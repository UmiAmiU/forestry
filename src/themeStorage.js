import { createMuiTheme } from "@material-ui/core/styles";

export const themes = {
  dark: createMuiTheme({
    palette: {
      primary: {
        main: "rgba(234,18,18)",
        contrastText: "#fff"
      },
      secondary: {
        light: "#6d6d6d",
        main: "#424242",
        dark: "#1b1b1b",
        contrastText: "#fff"
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff"
      },
      background: {
        paper: "#424242",
        default: "#1b1b1b"
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        hint: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      action: {
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.1)",
        hoverOpacity: 0.1,
        selected: "rgba(255, 255, 255, 0.2)",
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)"
      }
    },
    typography: {
      useNextVariants: true
    }
  })
};
