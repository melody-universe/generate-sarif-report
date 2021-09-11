import createTemplate from "./generator/createTemplate";
import merge from "webpack-merge";
import baseConfig from "./webpack.common";
import { BannerPlugin, Configuration, DefinePlugin } from "webpack";

export default async (): Promise<Configuration> =>
  merge(baseConfig, {
    entry: "./src/generator",
    mode: "production",
    plugins: [
      new BannerPlugin({
        banner: "#!/usr/bin/env node",
        raw: true,
      }),
      new DefinePlugin({
        sarifReport: JSON.stringify(await createTemplate()),
      }),
    ],
    target: "node",
  });
