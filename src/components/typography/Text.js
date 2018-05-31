import React from "react";
import PropTypes from "prop-types";
import { Text as RNText, StyleSheet } from "react-native";
import { withTheme } from "../Theme";

const Text = props => {
  const theme = props.theme;
  const { ...textProps } = props;

  if (textProps.style) {
    textProps.style = StyleSheet.flatten(textProps.style);
  }
  textProps.style = [theme.base, { textAlign: props.align }, textProps.style];

  // NOTE: delete Component specific props
  delete textProps.theme;
  delete textProps.align;

  return <RNText {...textProps} />;
};

Text.themeConfig = {
  style: {
    base: {
      fontFamily: "Helvetica",
      fontSize: 14,
      fontWeight: "200",
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left"
    }
  }
};

Text.propTypes = {
  align: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ]),
  theme: PropTypes.object.isRequired
};

Text.defaultProps = { align: "left" };

export default withTheme("Text", Text);
