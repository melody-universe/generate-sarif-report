import HtmlWebpackPlugin from "html-webpack-plugin";
import { join } from "path";
import InlineChunkHtmlPlugin from "react-dev-utils/InlineChunkHtmlPlugin";
import { DefinePlugin } from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.common";

export default function createReportConfig(
  mode: "development" | "production",
  sarifLogs: string
) {
  return merge(baseConfig, {
    entry: "./src/report/index.tsx",
    mode,
    module: {
      rules: [
        {
          test: /\.s?css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    output: {
      publicPath: "/",
    },
    plugins: [
      new DefinePlugin({
        sarifLogs: sarifLogs,
      }),
      new HtmlWebpackPlugin({
        inject: "body",
        template: join(__dirname, "./report/index.ejs"),
        title: "SARIF Report",
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/^main.js$/]),
    ],
  });
}
