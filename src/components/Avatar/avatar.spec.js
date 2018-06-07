import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Avatar from "../Avatar";

it("should render correctly", () => {
  const component = renderer.create(<Avatar email="test@test.com" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
