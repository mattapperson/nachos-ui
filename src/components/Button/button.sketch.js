import React from "react";
import Button from "./index";

const btnStyle = { margin: 3 };

export const components = [
  {
    Component: () => (
      <Button type="success" iconName="person" style={btnStyle}>
        Success....
      </Button>
    ),
    name: "Button/Success"
  },
  {
    Component: () => (
      <Button type="danger" style={btnStyle}>
        Danger
      </Button>
    ),
    name: "Button/Danger"
  },
  {
    Component: () => <Button style={btnStyle}>Primary</Button>,
    name: "Button/Primary"
  },
  {
    Component: () => (
      <Button type="success" disabled style={btnStyle}>
        Disabled Primary
      </Button>
    ),
    name: "Button/Disabled"
  }
];
