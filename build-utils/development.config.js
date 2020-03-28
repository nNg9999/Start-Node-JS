const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const path = require("path");

module.exports = env => ({
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      inject: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    stats: "errors-only",
    clientLogLevel: "warning",
    noInfo: true,
    quiet: true,
    open: true
  }
});
