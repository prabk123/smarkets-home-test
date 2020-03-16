const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const proxy = require("http-proxy-middleware");

app.use(morgan("tiny")); // logging framework

// Proxy API
app.use(
  proxy(["/v3/**", "/v0/**"], {
    target: "https://api.smarkets.com",
    changeOrigin: true
  })
);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}

// Choose the port and start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`> Server starting on ${PORT}`));
