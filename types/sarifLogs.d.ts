import { Log } from "sarif";

declare global {
  const sarifLogs: Log[];
  const sarifReport: string;
}
