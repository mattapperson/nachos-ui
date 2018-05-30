/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from "react";
import { render, TextStyles, View } from "react-sketchapp";
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

const Document = ({ system }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
        This is an example react-sketchapp document, showing how to render a
        styleguide from a data representation of your design system.
      </Label>
    </View>

    <Section title="Color Palette">
      <Palette colors={system.colors} />
    </Section>
  </View>
);

export function generateLibrary(context) {
  const document = createNewDocument(context);

  context.document = document;
  console.log("here");
  renderLibrary(context);
  console.log("here 2");

  const path = getStoragePath(context);
  saveDocument(document, path);
  closeDocument(document);
  addLibrary(path);
  console.log("here 7");

  context.document.showMessage("Library added! 🙌");
}

export function renderLibrary(context) {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true
    },
    designSystem.fonts
  );

  //exposeSymbols();

  render(<Document system={designSystem} />, context.document.currentPage());
}
