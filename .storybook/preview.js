import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from "../src/theme";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider>{storyFn()}</ColorModeProvider>
  </ThemeProvider>
));
