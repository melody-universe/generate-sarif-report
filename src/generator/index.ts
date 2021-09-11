import { Command } from "commander";
import generateReport from "./generateReport";

new Command()
  .argument("<sarif-file>", "sarif file")
  .argument("<output-file>", "output file")
  .action(generateReport)
  .parse();
