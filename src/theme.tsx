import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB20F',
      //main: '#023047',
    },
    secondary: {
      //main: '#F4F4F6',
      main: '#ffb703',
    },
    error: {
      main: '#d62828',
    },
  },
});

export default theme;