import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";
import { withTheme } from "../Theme";
import { View } from "react-native";

const Radio = ({ theme, ...rest }) => {
  return (
    <Checkbox
      checkComponent={<View style={[theme.check]} />}
      theme={theme}
      {...rest}
    />
  );
};

Radio.themeConfig = {
  props: {
    iconName: "md-checkmark",
    iconColor: "#fff",
    iconSize: 18
  },
  style: {
    base: {
      position: "relative",
      width: 22,
      height: 22,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#ececee",
      borderRadius: 9999
    },
    active: {
      backgroundColor: "#fff"
    },
    check: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: "@primaryColor"
    }
  }
};

Radio.propTypes = {
  checkType: PropTypes.string,
  kind: PropTypes.string
};

Radio.defaultProps = {
  checkType: "circle",
  kind: "circle"
};

export default withTheme("Radio", Radio);
