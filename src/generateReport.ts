import createConfig from "./config/create";
import { writeFile } from "fs/promises";
import { join } from "path";
import { cwd } from "process";
import { webpack } from "webpack";

export default function generateReport(sarifFile: string, outputFile: string) {
  const config = createConfig("production", sarifFile);
  const compiler = webpack(config);
  compiler.hooks.shouldEmit.tap("SaveReport", (compilation) => {
    for (const key of Object.keys(compilation.assets)) {
      if (key === "index.html") {
        writeFile(join(cwd(), outputFile), compilation.assets[key].buffer());
      }
    }
    return false;
  });
  compiler.run((error, stats) => {
    if (error) {
      console.error(error);
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
        console.error(error);
      }
    });
  });
}
