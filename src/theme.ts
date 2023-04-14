import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#02112A',
    },
    secondary: {
      main: '#FFFEF4',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontFamily: '-apple-system'
    }
  },
});

export default theme;

