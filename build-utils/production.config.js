const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm

module.exports = env => ({
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: true
      //  {
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   removeRedundantAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   useShortDoctype: true
      // }
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new OptimizeCssAssetsPlugin()
  ]
});
