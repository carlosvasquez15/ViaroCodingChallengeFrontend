import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB20F',
    },
    secondary: {
      main: '#FFE548',
    },
    error: {
      main: '#972D07',
    },
  },
});

export default theme;