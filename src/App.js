import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { fonts } from "./style/styleSettings";
import { colors } from "./style/styleSettings";
import Welcome from "./screens/Welcome";
const App = () => {
  const {
    primary: primaryColor,
    secondary,
    whitish,
    tertiary,
    hpsBlue,
    error,
    selectedgray
  } = {
    primary: colors.WALLMART_BLUE,
    whitish: colors.WHITE,
    // primary: colors.HOST_BLUE,
    secondary: colors.WHITE,
    tertiary: colors.TERTIARY,
    success: colors.GREEN_REST,
    error: colors.ERROR_RED,
    hpsBlue: colors.HPS_BLUE,
    selectedgray: colors.BACKGROUND_GREY
  };
  const linksColor = colors.PRIMARY_LINKS;

  const darkTextColor = colors.PRIMARY_DARK_TEXT;

  const theme = createMuiTheme({
    palette: {
      primary: { main: primaryColor },
      whitish: { main: whitish},
      secondary: { main: secondary },
      tertiary: { main: tertiary },
      error: { main: error },
      selectedGray: { main: selectedgray },
      action: { main: colors.PRIMARY_GREY_TEXT }
    },
    typography: {
      fontFamily: `${fonts.PRIMARY}`,
      htmlFontSize: 14,
      fontSize: 14,
      body1: { fontSize: 14 }
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": `${fonts.PRIMARY}`
        }
      }
    },
    primaryColor,
    hpsBlue,
    secondaryTextColor: linksColor,
    iconColor: primaryColor,
    fontColor: darkTextColor
  });
  return (
    <ThemeProvider theme={theme}>
     <Welcome/>
    </ThemeProvider>
  );
};

export default App;
