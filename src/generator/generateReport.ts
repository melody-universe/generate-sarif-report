import { readFile, writeFile } from "fs/promises";
import sarifLogsToken from "../sarifLogsToken";

export default async function generateReport(
  sarifFile: string,
  outputFile: string
) {
  const sarifContents = JSON.stringify(
    JSON.parse((await readFile(sarifFile)).toString())
  );
  const report = sarifReport.replace(sarifLogsToken, sarifContents);
  await writeFile(outputFile, report);
}
