import createReportConfig from "./createReportConfig";
import { join } from "path";
import { readFileSync } from "fs";

const sarifLogs = readFileSync(join(__dirname, "../sample.json")).toString();
export default createReportConfig("development", sarifLogs);
