import React from "react";
import Card from "./index";

const cardStyle = { margin: 15, width: 280 };
export const components = [
  {
    Component: () => (
      <Card
        footerContent="The avocado is a tree that is native to Mexico"
        image="https://upx.cz/BsN"
        style={cardStyle}
      />
    ),
    name: "Card"
  },
  {
    Component: () => (
      <Card
        footerContent="Agaves are a type of succulent plant from Mexico"
        image="https://upx.cz/BsD"
        style={cardStyle}
      />
    ),
    name: "Card/other"
  }
];
