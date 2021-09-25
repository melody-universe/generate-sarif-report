import { Command } from "commander";
import { readFile, writeFile } from "fs/promises";
import sarifLogsToken from "../sarifLogsToken";
import createTemplate from "./createTemplate";

new Command()
  .argument("<sarif-file>", "sarif file")
  .argument("<output-file>", "output file")
  .action(async (sarifFile: string, outputFile: string) => {
    const sarifContents = JSON.stringify(
      JSON.parse((await readFile(sarifFile)).toString())
    );
    const sarifReport = await createTemplate();
    const report = sarifReport.replace(sarifLogsToken, sarifContents);
    await writeFile(outputFile, report);
  })
  .parse();
