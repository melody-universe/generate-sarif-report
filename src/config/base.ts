import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import InlineChunkHtmlPlugin from "react-dev-utils/InlineChunkHtmlPlugin";
import { join } from "path";

const config: Configuration = {
  entry: "./src/report/index.tsx",
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: join(__dirname, "../report/index.ejs"),
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/^main.js$/]),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};

export default config;
