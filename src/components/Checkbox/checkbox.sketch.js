import React from "react";
import Checkbox from "./index";

export const components = [
  {
    Component: () => <Checkbox checked={false} />,
    name: "Checkbox/unchecked/enabled"
  },
  {
    Component: () => <Checkbox checked={true} />,
    name: "Checkbox/checked/enabled"
  },
  {
    Component: () => <Checkbox checked={false} disabled />,
    name: "Checkbox/unchecked/disabled"
  },
  {
    Component: () => <Checkbox checked={true} disabled />,
    name: "Checkbox/checked/disabled"
  }
];
