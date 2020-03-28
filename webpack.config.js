const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
const webpackMerge = require("webpack-merge");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);

module.exports = env =>
  webpackMerge(
    {
      context: path.resolve(__dirname, "src"),
      mode: env.mode,
      entry: "./index.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "[path]/[name].[ext]",
                  limit: 10000
                }
              }
            ]
          },
          {
            test: /\.html$/,
            use: "html-loader"
          },
          { test: /\.hbs$/, use: "handlebars-loader" }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        // new webpack.ProgressPlugin(),
        new WebpackBar(),
        new FriendlyErrorsWebpackPlugin()
      ]
    },
    loadModeConfig(env)
  );
