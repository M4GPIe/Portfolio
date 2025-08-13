import { useMemo, useState } from "react"
import { getTheme, MyThemes } from "./AppThemes"
import { Stack, ThemeProvider } from "@mui/material"
import Section from "./components/Section"
import './index.css' 
import Introduction from "./components/Introduction"

function App() {

  const [theme, setTheme] = useState<MyThemes>('basic')

  const muiTheme = useMemo(()=>getTheme(theme),[theme])
  
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack display={'flex'} flexGrow={1} gap={2} maxHeight={'100vh'} width={'100%'}  sx={{
        backgroundColor: muiTheme.palette.background.default,
        overflowX:'hidden',
        ":-webkit-scrollbar":{
          display:'none'
        },
        '-ms-overflow-style': 'none', 
        'scrollbar-width': 'none'
      }}>
        {/* <Introduction/> */}
        <Section>
          <Introduction/>
        </Section>

        {/* <Studies/> */}
        <Section>
          <Stack sx={{
            backgroundColor: muiTheme.palette.primary.main,
            borderRadius: 15,
            height: '90vh',
            width: '90vw'
          }}>
          </Stack>
        </Section>

        {/* <Working Experience/> */}
        <Section>
          <Stack sx={{
            backgroundColor: muiTheme.palette.primary.main,
            borderRadius: 15,
            height: '90vh',
            width: '90vw'
          }}>
          </Stack>
        </Section>

        {/* <Job expectations /> */}
        <Section>
          <Stack sx={{
            backgroundColor: muiTheme.palette.primary.main,
            borderRadius: 15,
            height: '90vh',
            width: '90vw'
          }}>
          </Stack>
        </Section>

        {/* <About myself/> */}
        <Section>
          <Stack sx={{
            backgroundColor: muiTheme.palette.primary.main,
            borderRadius: 15,
            height: '90vh',
            width: '90vw'
          }}>
          </Stack>
        </Section>

        {/* <Other projects/> */}
        <Section>
          <Stack sx={{
            backgroundColor: muiTheme.palette.primary.main,
            borderRadius: 15,
            height: '90vh',
            width: '90vw'
          }}>
          </Stack>
        </Section>
        
      </Stack>
    </ThemeProvider>
  )
}

export default App
