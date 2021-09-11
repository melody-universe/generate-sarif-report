import HtmlWebpackPlugin from "html-webpack-plugin";
import { Compiler } from "webpack";

declare class InlineChunkHtmlPlugin {
  constructor(htmlWebpackPlugin: typeof HtmlWebpackPlugin, regExp: RegExp[]);
  apply(compiler: Compiler): void;
}

export default InlineChunkHtmlPlugin;
