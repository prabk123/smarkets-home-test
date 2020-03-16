const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/v3",
    proxy({ target: "https://api.smarkets.com", changeOrigin: true })
  );
  app.use(
    "/v0",
    proxy({ target: "https://api.smarkets.com", changeOrigin: true })
  );
};
