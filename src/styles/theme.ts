import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  colors: {
    white: "#FFFF",
    darkerWhite: "#FAFAFA",
    red: "#F82C2C",
    black: "#000000",
    grey: "#252F3D",
    lightGrey: "#4D5254",
    lighterBlue: "#EDF3FD",
    lightBlue: "#2C7EF8",
    lightGreen: "#59AE43",
  },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
});
