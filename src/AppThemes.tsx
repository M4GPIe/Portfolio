
import { createTheme } from '@mui/material/styles';

export enum MyThemes {
  BASIC='basic',
  SAND='sand'
}

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

const sandTheme = createTheme({
  palette: {
    primary: {
      main: '#ffe0ab',
      dark: '#f3ce93'
    },
    secondary: {
      main: '#eeb646',
    },
    background: {
        default: ' 	#dab984',
    }
  },
})

export const themeList = [
  {
    name: MyThemes.SAND,
    color: sandTheme.palette.primary.main
  },
  {
    name: MyThemes.BASIC,
    color: basicTheme.palette.primary.main
  }
]

export const getTheme = (theme: MyThemes)=>{
    switch (theme) {
        case MyThemes.SAND:
            return sandTheme
        
        case MyThemes.BASIC:
            return basicTheme
    
        default:
            return basicTheme
    }
}