import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Bubble from "./index";
import { View } from "react-native";

export const components = [
  {
    Component: () => (
      <Bubble
        bubbleStyle={{
          backgroundColor: "#ececee"
        }}
        textStyle={{
          color: "#8a8aa2"
        }}
      >
        What’s cooking?
      </Bubble>
    ),
    name: "Bubble/Left"
  },
  {
    Component: () => <Bubble arrowPosition="right">What’s cooking?</Bubble>,
    name: "Bubble/Right"
  }
];
