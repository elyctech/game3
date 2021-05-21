import React, {
  ReactElement
} from "react";

import engineService, {
  viewportManager
} from "@game3/eng3";

import DemoViewMain from "./main";

export default function DemoView() : ReactElement {
  return (
    <DemoViewMain
      engineService   = {engineService}
      viewportManager = {viewportManager}
    />
  );
}
