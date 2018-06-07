import React from "react";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";
import Strong from "./Strong";
import Em from "./Em";
import P from "./P";
import A from "./A";

export const components = [
  {
    Component: () => <H1>Headline 1</H1>,
    name: "typography/H1"
  },
  {
    Component: () => <H2>Headline 1</H2>,
    name: "typography/H2"
  },
  {
    Component: () => <H3>Headline 1</H3>,
    name: "typography/H3"
  },
  {
    Component: () => <H4>Headline 1</H4>,
    name: "typography/H4"
  },
  {
    Component: () => <H5>Headline 1</H5>,
    name: "typography/H5"
  },
  {
    Component: () => <H6>Headline 1</H6>,
    name: "typography/H6"
  },
  {
    Component: () => <P>Headline 1</P>,
    name: "typography/P"
  },
  {
    Component: () => <Strong>Headline 1</Strong>,
    name: "typography/Strong"
  },
  {
    Component: () => <Em>Headline 1</Em>,
    name: "typography/EM"
  },
  {
    Component: () => <A href="http://avocode.com">This is a link</A>,
    name: "typography/A"
  }
];
