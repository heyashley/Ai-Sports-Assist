const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-dev.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // serve the public folder
    },
    port: 3000,            // your dev server port
    open: true,            // automatically open browser
    hot: true,             // enable hot module replacement
    allowedHosts: "all",   
  },
});
