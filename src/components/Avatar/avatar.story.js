import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Avatar from "./index";
import { View } from "react-native";

const Example = () => {
  const AvatarStyle = {
    margin: 15
  };
  return (
    <View>
      <Avatar email="blah@blah.com" style={AvatarStyle} />
      <Avatar
        email="blahblah@blah.com"
        size={150}
        rating="pg"
        default="retro"
        style={AvatarStyle}
      />
      <Avatar
        md5Hash="313cbdb52db5b6bb6b3f14bc4ddae461"
        size={100}
        circle
        style={AvatarStyle}
      />
    </View>
  );
};

storiesOf("Avatar", module).add("default", withInfo()(Example));

export default Example;
