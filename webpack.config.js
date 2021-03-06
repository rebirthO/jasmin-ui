var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var TSConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
var MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./example/app.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: "./",
              exclude: /node_modules/,
            },
          },
          {
            loader: "css-loader",
          },
          //TODO: 重新定制antd主题时会用到
          // {
          //   loader: "less-loader",
          // },
        ],
      },
      {
        test: /\.(eot|svg|ttf|jpg|png|woff|woff2?)(\?.+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.ejs",
    }),
  ],
  devtool: "cheap-source-map",
  devServer: {
    contentBase: __dirname,
    publicPath: "/",
    compress: true,
    clientLogLevel: "info",
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 6602,
    watchOptions: {
      ignored: [/node_module/],
    },
    stats: {
      all: false,
      colors: true,
      errors: true,
      errorDetails: true,
      performance: true,
      reasons: true,
      timings: true,
      warnings: true,
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    plugins: [
      new TSConfigPathsWebpackPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json"),
      }),
    ],
  },
};
