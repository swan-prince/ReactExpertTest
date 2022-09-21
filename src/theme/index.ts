import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material';

export interface CustomColors {
  main: string;
  green: string;
  grey: string;
  blue: string;
}

export const customColors: CustomColors = {
  main:'#0F2830',
  green: '#2EE297',
  grey: '#5E6E78',
  blue: '#1DC9D4'
}

interface MyPaletteExtensions {
  customColors: CustomColors;
}

declare module '@mui/material/styles' {
  interface Palette extends MyPaletteExtensions {}
  interface PaletteOptions extends MyPaletteExtensions {}
}

export const myPalette: PaletteOptions = {
  primary: { 
    main: '#0F2830',
  },
  secondary: {   
    main: '#272727',
  }, 
  customColors
};

const theme = createTheme({
  palette: myPalette,
  typography: {
    fontFamily: 'Sora'
  }
});

export default theme;
