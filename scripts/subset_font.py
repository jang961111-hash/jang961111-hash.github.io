"""Rebuild public/fonts/PretendardVariable.woff2 with only the glyphs the site needs.

The full variable font is about 2 MB (11,172 Hangul syllables). The site keeps:
  - the 2,350 Hangul syllables of KS X 1001 (covers ordinary Korean text),
  - every character that appears in src/, public/index.html and workers/,
  - Latin, punctuation, arrows, box and CJK symbol ranges.
Any other character falls back to the system font listed after Pretendard.

Run from the repository root with a Python that has fonttools and brotli:
    python scripts/subset_font.py <path to the full PretendardVariable.woff2>
"""
import pathlib
import sys

from fontTools import subset
from fontTools.ttLib import TTFont

TARGET = pathlib.Path("public/fonts/PretendardVariable.woff2")

if len(sys.argv) != 2:
    sys.exit("usage: python scripts/subset_font.py <full PretendardVariable.woff2>")

SOURCE = pathlib.Path(sys.argv[1])

# The file in public/fonts is already a subset; using it as the source would
# overwrite it with an even smaller one and the full set could not be restored.
if SOURCE.resolve() == TARGET.resolve():
    sys.exit("the source must be the full font, not the subset in public/fonts")

TEXT_ROOTS = ["src", "workers", "public/index.html", "public/404.html", "public/manifest.json"]
TEXT_SUFFIXES = {".js", ".json", ".css", ".html", ".md"}

codepoints = set()

# KS X 1001 Hangul: lead bytes B0-C8, trail bytes A1-FE in EUC-KR
for lead in range(0xB0, 0xC9):
    for trail in range(0xA1, 0xFF):
        try:
            codepoints.add(ord(bytes([lead, trail]).decode("euc-kr")))
        except UnicodeDecodeError:
            pass

for start, end in [
    (0x20, 0x7E), (0xA0, 0xFF), (0x2000, 0x206F), (0x20A0, 0x20BF),
    (0x2100, 0x214F), (0x2190, 0x21FF), (0x2200, 0x22FF), (0x2460, 0x24FF),
    (0x2500, 0x257F), (0x25A0, 0x25FF), (0x2600, 0x26FF), (0x3000, 0x303F),
    (0x3130, 0x318F), (0xFF00, 0xFFEF),
]:
    codepoints.update(range(start, end + 1))

for root in TEXT_ROOTS:
    path = pathlib.Path(root)
    files = (
        [path]
        if path.is_file()
        else [
            p
            for p in path.rglob("*")
            if p.suffix in TEXT_SUFFIXES and "node_modules" not in p.parts
        ]
    )
    for file in files:
        if file.exists():
            codepoints.update(ord(ch) for ch in file.read_text(encoding="utf-8", errors="ignore"))

options = subset.Options()
options.flavor = "woff2"
options.layout_features = ["*"]
options.name_IDs = ["*"]
options.name_languages = ["*"]
options.notdef_outline = True

font = TTFont(SOURCE)
available = set(font.getBestCmap())
subsetter = subset.Subsetter(options)
subsetter.populate(unicodes=sorted(codepoints & available))
subsetter.subset(font)
font.flavor = "woff2"

# The weight axis and the licence notice must survive the subset.
assert "fvar" in font and font["fvar"].axes[0].axisTag == "wght"
assert any(record.nameID == 13 for record in font["name"].names)

font.save(TARGET)

missing = sorted(c for c in codepoints if c > 0x7F and c not in available and 0xAC00 <= c <= 0xD7A3)
print(f"kept {len(codepoints & available)} characters, wrote {TARGET} ({TARGET.stat().st_size / 1024:.0f} KB)")
if missing:
    print("Hangul not in the source font:", "".join(map(chr, missing)))
