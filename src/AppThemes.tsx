
import { createTheme } from '@mui/material/styles';

export enum MyThemes {
  BASIC='basic',
  SAND='sand'
}

export const themeList = [
  {
    name: MyThemes.SAND,
    color: "linear-gradient(to right, #ffe0ab, #f3ce93, #eeb646, #ffe0ab, #dab984)"
  },
  {
    name: MyThemes.BASIC,
    color: 'linear-gradient(to right,#00CECE,#00A8A8,#304047)'
  }
]

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