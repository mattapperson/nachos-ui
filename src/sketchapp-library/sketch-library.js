/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from "react";
import { render, Document, View, Page } from "react-sketchapp";
import designSystem from "./designSystem";

import exposeSymbols from "./exposeSymbols";

import Label from "./components/Label";
import Palette from "./components/palette";
import Section from "./components/section";

import {
  createNewDocument,
  getStoragePath,
  saveDocument,
  closeDocument,
  addLibrary
} from "./sketch-utils";

const SketchDocument = ({ system }) => (
  <React.Fragment>
    <Page name="Branding">
      <View>
        <View name="Intro" style={{ width: 420, marginBottom: 34 }}>
          <Label>
            This is an example react-sketchapp document, showing how to render a
            styleguide from a data representation of your design system.
          </Label>
        </View>

        <Section title="Color Palette">
          <Palette colors={system.colors} />
        </Section>
      </View>
    </Page>
  </React.Fragment>
);

export function generateLibrary(context) {
  const document = createNewDocument(context);

  context.document = document;
  renderLibrary(context);

  const path = getStoragePath(context);
  saveDocument(document, path);
  closeDocument(document);
  addLibrary(path);

  context.document.showMessage("Library added! 🙌");
}

export function renderLibrary(context) {
  exposeSymbols();
  render(<SketchDocument system={designSystem} />, context.document.pages()[0]);
}
