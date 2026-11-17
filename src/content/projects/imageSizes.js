// Pixel sizes of images under public/projects, used for width/height
// attributes so the layout does not shift while images load.
// Regenerate after adding images: sips -g pixelWidth -g pixelHeight <file>.
export const projectImageSizes = {
  "/projects/ansim-ieum/about-desktop.webp": [1280, 800],
  "/projects/ansim-ieum/about-mobile.webp": [780, 1688],
  "/projects/ansim-ieum/demo-mobile.webp": [780, 1688],
  "/projects/ansim-ieum/field-1113.webp": [1300, 560],
  "/projects/ansim-ieum/home-mobile.webp": [780, 1688],
  "/projects/ansim-ieum/play-mobile.webp": [780, 1688],
  "/projects/ansim-ieum/train-mobile.webp": [780, 1688],
  "/projects/argus/agent-run-polling.webp": [1456, 828],
  "/projects/argus/approval-panel.webp": [1456, 828],
  "/projects/argus/request-form.webp": [1456, 828],
  "/projects/dailylog/app-diary-ai.webp": [1080, 2400],
  "/projects/dailylog/app-diary-photo.webp": [1080, 2400],
  "/projects/dailylog/app-home.webp": [1080, 2400],
  "/projects/dailylog/app-runtime.webp": [1080, 2400],
  "/projects/dailylog/award-3rd-place.jpg": [1600, 901],
  "/projects/dailylog/design-diary-result.webp": [617, 1337],
  "/projects/dailylog/design-reco-rating.webp": [617, 1337],
  "/projects/easyexam/award-best-team.webp": [1600, 1200],
  "/projects/genwing/og-banner.webp": [1200, 670],
  "/projects/jangbogo/agent-run.webp": [1600, 1000],
  "/projects/jangbogo/merchants.webp": [1600, 1000],
  "/projects/jangbogo/policy-block.webp": [1600, 1000],
  "/projects/krafton-multiplierboard/learning-curve.webp": [1600, 593],
  "/projects/krafton-multiplierboard/report-preview.webp": [893, 1263],
  "/projects/supporty/console-live.webp": [1600, 900],
  "/projects/supporty/ugv-defender.webp": [1400, 2132],
  "/projects/supporty/vtol-heewing-t2.webp": [1400, 1053],
};

export const getImageSize = (src) => projectImageSizes[src] ?? null;
