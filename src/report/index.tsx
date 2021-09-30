import React from "react";
import ReactDom from "react-dom";
import { Viewer as SarifViewer } from "@microsoft/sarif-web-component";
import "./index.css";

ReactDom.render(
  <SarifViewer logs={[sarifLogs].flat()} />,
  document.getElementById("app")
);
