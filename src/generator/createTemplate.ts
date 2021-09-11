import createReportConfig from "../createReportConfig";
import { webpack } from "webpack";
import sarifLogsToken from "../sarifLogsToken";

export default async function createTemplate(): Promise<string> {
  return new Promise((resolve, reject) => {
    const config = createReportConfig("production", sarifLogsToken);
    const compiler = webpack(config);
    compiler.hooks.shouldEmit.tap("SaveReport", (compilation) => {
      for (const key of Object.keys(compilation.assets)) {
        if (key === "index.html") {
          resolve(compilation.assets[key].buffer().toString());
        }
      }
      return false;
    });
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      } else {
        console.log(
          stats?.toString({
            chunks: false,
            colors: true,
          })
        );
      }
      compiler.close((error) => {
        if (error) {
          reject(error);
        }
      });
    });
  });
}
