import createConfig from "./create";
import { join, relative } from "path";
import { cwd } from "process";

export default createConfig(
  "development",
  relative(cwd(), join(__dirname, "../../sample.json"))
);
