
import { createTheme } from '@mui/material/styles';

export type MyThemes = 'basic' | 'light' 

const basicTheme = createTheme({
  palette: {
    primary: {
      main: '#00CECE',
      dark: '#00A8A8'
    },
    secondary: {
      main: '#EFEFEF',
    },
    background: {
        default: '#304047',
    }
  },
});

export const getTheme = (theme: MyThemes)=>{
    switch (theme) {
        case 'light':
            return basicTheme
        
        case 'basic':
            return basicTheme
    
        default:
            return basicTheme
    }
}