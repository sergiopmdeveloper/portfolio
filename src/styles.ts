import styled, { createGlobalStyle } from 'styled-components'

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

// Translucent colors
const translucentColors = {
  translucentGreen: '#64ffda4d',
}

// Fonts
const fonts = {
  roboto: 'Roboto, sans-serif',
  spaceMono: 'Space Mono, monospace',
}

// Screens
const screens = {
  laptop: '1440px',
}

// Theme
export const theme = {
  ...colors,
  ...fonts,
  ...screens,
  ...translucentColors,
}

// Global styles
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.navy};
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

// Global styled components

export const AppSection = styled.div`
  max-width: ${theme.laptop};
  margin: 0 auto;
  padding: 0 2rem;
`
