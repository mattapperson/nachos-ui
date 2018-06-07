// NOTE: a slightly modified version of https://github.com/KyleAMathews/react-Avatar

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, PixelRatio, View } from "react-native";
import md5 from "md5";
import querystring from "query-string";
import { withTheme } from "../Theme";

class Avatar extends Component {
  static displayName = "Avatar";

  static propTypes = {
    circle: PropTypes.bool,
    email: PropTypes.string,
    src: PropTypes.string,
    md5Hash: PropTypes.string,
    size: PropTypes.number,
    rating: PropTypes.string,
    defaultIcon: PropTypes.string,
    protocol: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object
  };

  static defaultProps = {
    circle: false,
    email: null,
    md5Hash: null,
    size: 50,
    rating: "g",
    defaultIcon: "retro",
    protocol: "https://"
  };

  render() {
    const {
      theme,
      src,
      md5Hash,
      email,
      protocol,
      rating,
      size,
      style,
      className,
      defaultIcon,
      circle,
      ...rest
    } = this.props;

    let GravatarSrc;
    if (!src) {
      const base = `${protocol}www.gravatar.com/avatar/`;
      const query = querystring.stringify({
        s: size * PixelRatio.get(),
        r: rating,
        d: defaultIcon
      });

      // NOTE: Avatar service currently trims and lowercases all registered emails
      const formattedEmail = `${email}`.trim().toLowerCase();

      let hash;
      if (md5Hash) {
        hash = md5Hash;
      } else if (typeof email === "string") {
        hash = md5(formattedEmail);
      } else {
        console.warn(
          'Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'
        );
        return;
      }
      GravatarSrc = `${base}${hash}?${query}`;
    }

    return (
      <Image
        style={[
          { width: size, height: size },
          circle ? { borderRadius: size / 2 } : {},
          theme.image,
          style
        ]}
        source={{ uri: src || GravatarSrc }}
        {...rest}
      />
    );
  }
}

Avatar.themeConfig = {
  props: {},
  style: {
    image: {
      borderWidth: 3,
      borderColor: "white"
    }
  }
};

export default withTheme("Avatar", Avatar);
