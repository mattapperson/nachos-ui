import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, PanResponder, Platform } from "react-native";
import Progress from "./Progress";
import { withTheme } from "./Theme";

class Slider extends Component {
  static themeConfig = {
    style: {
      base: {
        position: "relative",
        marginVertical: 25
      },
      finger: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderRadius: 90,
        width: 72,
        height: 72
      },
      knob: {
        position: "absolute",
        top: -22 + 2,
        left: -22,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        alignItems: "center",
        justifyContent: "center",
        ...(Platform.OS === "web"
          ? {
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)"
            }
          : {}),
        ...(Platform.OS === "android"
          ? {
              elevation: 1
            }
          : {})
      }
    }
  };
  static propTypes = {
    value: PropTypes.number,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    knobStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    width: PropTypes.number,
    height: PropTypes.number,
    onValueChange: PropTypes.func,
    theme: PropTypes.object
  };

  static defaultProps = {
    value: 0,
    maxValue: 1,
    minValue: 0,
    width: 300,
    height: 6,
    onValueChange: () => {}
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onPanResponderTerminationRequest: () => false,
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove
    });
  }

  _handlePanResponderGrant = () => {
    this._onGrantValue = this.props.value;
  };

  _handlePanResponderMove = (e, gesture) => {
    const { onValueChange, minValue, maxValue, width } = this.props;
    const oldProgress = this._onGrantValue / (maxValue - minValue);
    const valueRange = maxValue - minValue;
    const newProgress = oldProgress + gesture.dx / width;
    const newValue = minValue + newProgress * valueRange;

    onValueChange(Math.max(minValue, Math.min(maxValue, newValue)));
  };

  render() {
    const {
      value,
      maxValue,
      minValue,
      style,
      knobStyle,
      width,
      height,
      theme
    } = this.props;

    const progress = value / (maxValue - minValue);
    const knobTransform = {
      transform: [{ translateX: width * progress }]
    };

    return (
      <View style={[theme.base, style, { width, height }]}>
        <Progress width={width} height={height} progress={progress} />
        <View
          {...this._panResponder.panHandlers}
          style={[theme.knob, knobTransform, knobStyle]}
        >
          <View style={theme.finger} />
        </View>
      </View>
    );
  }
}

export default withTheme("Slider", Slider);
