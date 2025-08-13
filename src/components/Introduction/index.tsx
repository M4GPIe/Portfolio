import { Stack, Typography, useTheme } from '@mui/material'
import AvatarImage from './AvatarImage'
import { t } from 'i18next'

const Introduction = () => {

    const theme = useTheme()
    console.log(t('introduction.greeting'))
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
            backgroundColor:theme.palette.primary.main,
            borderRadius: 15,
        }}>
            <Stack margin={5}>
            <Typography variant='h4'>
                {t('introduction.greeting')}
            </Typography>

            </Stack>
        </Stack>
    </>
  )
}

export default Introduction
