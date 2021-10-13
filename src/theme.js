import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00a4db",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#fff",
      secondary: "#b2b2b3",
      disabled: "#ccd",
    },
  },
  typography: {
    fontFamily: "Lato, OpenSans",
    h2 : {
      '@media (max-width: 960px)': {
        fontSize: "2.5rem"
      }
    }
  },
});

export default theme;
