import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import theme from '../src/theme';

addParameters({
  /**
   * https://github.com/storybookjs/storybook/tree/master/addons/viewport
   * https://github.com/storybookjs/storybook/tree/master/addons/backgrounds
   */
  backgrounds: [
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider>{storyFn()}</ColorModeProvider>
  </ThemeProvider>
));
