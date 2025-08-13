import { Stack, useTheme } from '@mui/material'
import AvatarImage from './AvatarImage'

const Introduction = () => {

    const theme = useTheme()
    
  return (
    <>
        <Stack display={'flex'} sx={{
            width:'50%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'        
        }}>
            <AvatarImage/>
        </Stack>
        <Stack width={'50%'} display={'flex'}  sx={{
            width:'50%',
            height:'100%',
            backgroundColor:theme.palette.primary.main
        }}>
            aaaaaaaaaaaaa
        </Stack>
    </>
  )
}

export default Introduction
