import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: red.A100,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        },
      },
    },
  },
});

export default theme;
