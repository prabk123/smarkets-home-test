const proxy = require("http-proxy-middleware");

// Custom PROXY - https://cors-anywhere.herokuapp.com/ seemed to significantly slow down API response
module.exports = app => {
  app.use(
    proxy(["/v3/**", "/v0/**"], {
      target: "https://api.smarkets.com",
      changeOrigin: true
    })
  );
};
