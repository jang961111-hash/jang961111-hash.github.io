module.exports = function setupDevHistoryFallback(app) {
  app.use((req, res, next) => {
    const acceptsHtml =
      req.method === "GET" && req.headers.accept?.includes("text/html");
    const hasFileExtension = /\.[^/]+$/.test(req.path);
    const isClientRoute =
      req.path === "/en" ||
      req.path.startsWith("/projects/") ||
      req.path.startsWith("/en/projects/");

    if (acceptsHtml && isClientRoute && !hasFileExtension) {
      req.url = "/";
    }

    next();
  });
};
