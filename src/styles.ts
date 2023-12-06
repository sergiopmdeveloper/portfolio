import { createGlobalStyle } from 'styled-components'

// Colors
const colors = {
  navy: '#0a192f',
  lightNavy: '#112240',
  lightestNavy: '#233554',
  slate: '#8892b0',
  lightSlate: '#a8b2d1',
  lightestSlate: '#ccd6f6',
  white: '#e6f1ff',
  green: '#64ffda',
}

// Fonts
const fonts = {
  roboto: 'Roboto, sans-serif',
  spaceMono: 'Space Mono, monospace',
}

// Theme
export const theme = {
  ...colors,
  ...fonts,
}

// Global styles
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.navy};
  }
`
