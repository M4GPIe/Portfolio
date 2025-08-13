import { Stack } from '@mui/material'
import { ReactNode } from 'react'

const Section = ({children}:{children:ReactNode}) => {


  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'row',
      minHeight: '82vh',
      maxWidth: '100vw',
      alignItems:'center',
      justifyContent:'center',
      paddingY:10,
      paddingX:12
    }}>
      {children}
    </Stack>
  )
}

export default Section
