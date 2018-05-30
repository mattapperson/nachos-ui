import React from "react";
import { Helmet } from "react-helmet";

// Kinda risky. Urls grabbed directly from cdn
// Needed to do this to rename the font-family
// to match React Native
// http://stackoverflow.com/questions/25011533/google-font-api-uses-browser-detection-how-to-get-all-font-variations-for-font
//
// Also grabbed MaterialIcons
export default () => (
  <Helmet>
    <style type="text/css">
      {` 
        @font-face {
          font-family: 'font-awesome';
          src: local('FontAwesome'), local('font-awesome'), url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff) format('woff');
        }
      `}
    </style>
  </Helmet>
);
