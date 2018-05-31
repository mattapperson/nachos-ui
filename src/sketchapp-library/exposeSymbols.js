import React from "react";
import { makeSymbol } from "react-sketchapp";
import { Provider } from "../components/Theme";

export default function() {
  const req = require.context("../components", true, /.sketch.js$/);

  req.keys().forEach(filename => {
    var sketchComponent = req(filename);

    makeSymbol(
      () => (
        <Provider>
          <sketchComponent.Component />
        </Provider>
      ),
      sketchComponent.name
    );
  });
}
