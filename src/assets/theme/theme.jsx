import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";

const components = {
  Button,
};

const sizes = {
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1110px",
      xl: "1280px",
    },
  },
};
const breakpoints = {
  sm: "35em", //560px
  md: "48em", //748px
  lg: "69.375em", //1110px
  xl: "80em",
  "2xl": "96em",
};
const spacing = {
  space: {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
};
const shadows = {
  bluegray:
    " 0px 0px 4px rgba(83, 104, 223, 0.08), 0px 4px 8px rgba(83, 104, 223, 0.15);",
};
const fonts = {
  fonts: {
    body: "Rubik, sans-serif",
    heading: "Rubik, sans-serif",
    mono: "Rubik, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", //12px
    sm: "0.813rem", //13px
    md: "0.938rem", //15px
    lg: "1.125rem", //18px body,paragrap
    xl: "1.25rem", //20px H3
    "2xl": "1.5rem",
    "3xl": "1.625rem", //26px h1 moblie
    "4xl": "2rem", //32px H2
    "5xl": "3rem", //H1
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "3.25rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tighte: " -0.03em",
    tightt: "-0.02em",
    tight: "-0.01em",
    normal: "0",
    wide: "0.01em",
    widee:'0.04em',
    wider: "0.05em",
    widest: "0.11em",
    widester: "0.13em",
  },
};

const colors = {
  Neutral: {
    GrayishBlue: "#9194a1",
    Graywhite: "#f7f7f7",
    DarkBluetrin: "#595c6d",
    VeryDarkBlue: "#252b46",
    darkblue: "#242946",
    darkbluealpha: "rgba(36, 41, 70,0.8)",
  },
  primary: {
    SoftRed: "#fa5757",
  },
  SoftBlue: {
    400: "#5368df",
    500: "#4c60d1",
  },
};

export const theme = extendTheme({
  ...sizes,
  colors,
  ...fonts,
  ...spacing,
  components,
  breakpoints,
  shadows
});
