import { readFileSync } from "fs";
import { DefinePlugin } from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./base";

export default function createConfig(
  mode: "development" | "production",
  sarifFilePath: string
) {
  const sarifLogs = readFileSync(sarifFilePath).toString();
  return merge(baseConfig, {
    mode,
    plugins: [
      new DefinePlugin({
        sarifLogs,
      }),
    ],
  });
}
