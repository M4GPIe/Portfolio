import { Stack, Typography, useTheme } from '@mui/material'
import AvatarImage from './AvatarImage'
import { useTranslation } from 'react-i18next'
import TypeWritter from './TypeWritter'

const Introduction = () => {

    const theme = useTheme()

    const {t} = useTranslation()

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
            <Typography variant='h1'>
                {'Manuel de los Santos'}
            </Typography>
            <TypeWritter texts={[
                t('Programmer'),
                t('Frontend'),
                t('Backend')
            ]} />
            </Stack>
        </Stack>
    </>
  )
}

export default Introduction
