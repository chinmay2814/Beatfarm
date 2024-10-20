import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5E6D3', // Light Brown
    },
    secondary: {
      main: '#4A3728', // Dark Brown
    },
    accent: {
      main: '#00A4E4', // Electric Blue
    },
    background: {
      default: '#E8D6C0', // Cream
    },
    success: {
      main: '#8DAA91', // Sage Green
    },
    warning: {
      main: '#FF6B5B', // Coral
    },
  },
  typography: {
    fontFamily: [
      'Lufga', 
      'Open Sans', 
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Lufga',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Lufga',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Lufga',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Open Sans',
      fontWeight: 400,
    },
  },
});

export default theme;
