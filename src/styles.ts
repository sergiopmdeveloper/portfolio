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

// Darkened colors
const darkenedColors = {
  darkenedLightestNavy: '#1C2A43',
  darkenedGreen: '#00b187',
}

// Fonts
const fonts = {
  roboto: 'Roboto, sans-serif',
  spaceMono: 'Space Mono, monospace',
}

// Font sizes
const fontSizes = {
  fontSize0: '.5rem',
  fontSize1: '.75rem',
  fontSize2: '1rem',
  fontSize3: '1.1rem',
  fontSize4: '1.25rem',
  fontSize5: '1.5rem',
  fontSize6: '2rem',
  fontSize7: '2.5rem',
  fontSize8: '3rem',
  fontSize9: '3.5rem',
  fontSize10: '4rem',
  fontSize11: '5rem',
}

// Screens
const screens = {
  laptop: '1440px',
  smallLaptop: '1024px',
  tablet: '768px',
  largeMobile: '480px',
  smallMobile: '360px',
}

// Theme
export const theme = {
  ...colors,
  ...translucentColors,
  ...darkenedColors,
  ...fonts,
  ...fontSizes,
  ...screens,
}

// Global styles
export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${theme.navy};
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    padding: 0 0.8rem 0 0.8rem;
    box-sizing: border-box;
  }

  select {
    border: none;
    outline: none;
    padding-left: 0.8rem;
  }

  textarea {
    border: none;
    outline: none;
    padding: 0.8rem;
  }
`

// Global styled components

export const AppSection = styled.div`
  max-width: ${theme.laptop};
  margin: 0rem auto 8rem auto;
  padding: 0 2rem;

  @media (width <= ${theme.largeMobile}) {
    padding: 0 1.5rem;
  }
`
