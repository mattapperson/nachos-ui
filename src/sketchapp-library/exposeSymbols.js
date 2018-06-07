import React from "react";
import { makeSymbol } from "react-sketchapp";
import { Provider } from "../components/Theme";

export default function() {
  const req = require.context("../components", true, /.sketch.js$/);

  req.keys().forEach(filename => {
    var sketchComponent = req(filename);

    if (sketchComponent.components) {
      sketchComponent.components.forEach(comp => {
        try {
          makeSymbol(
            () => (
              <Provider>
                <comp.Component />
              </Provider>
            ),
            comp.name
          );
        } catch (e) {
          console.error(`Error rendering ${comp.name}`);
          throw e;
        }
      });
    } else {
      try {
        makeSymbol(
          () => (
            <Provider>
              <sketchComponent.Component />
            </Provider>
          ),
          sketchComponent.name
        );
      } catch (e) {
        console.error(`Error rendering ${sketchComponent.name}`);
        throw e;
      }
    }
  });
}
