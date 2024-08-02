import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    blue: [
      "#ebefff",
      "#d5dafc",
      "#a9b1f1",
      "#7b87e9",
      "#5362e1",
      "#3a4bdd",
      "#2d3fdc",
      "#1f32c4",
      "#182cb0",
      "#0b259c"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Inter Variable', sans-serif"
  },
  primaryColor: "blue"
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
