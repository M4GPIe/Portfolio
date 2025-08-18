import { keyframes, Stack, Typography, useTheme } from '@mui/material'
import AvatarImage from './AvatarImage'
import { useTranslation } from 'react-i18next'
import TypeWritter from './TypeWritter'
import { keywords } from './keywords'

const Introduction = () => {

    const theme = useTheme()

    const {t} = useTranslation()

    const slideIn = keyframes`
        from { transform: translateX(100%); }
        to { transform: translateX(0%); }
    `

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
            <Typography variant='h4' sx={{fontFamily: 'serif'}}>
                {t('introduction.greeting')}
            </Typography>
            <Typography variant='h1' sx={{
                animation: `${slideIn} 1000ms ease-in 150ms forwards`,
                fontFamily: 'serif'
            }}>
                {'Manuel de los Santos'}
            </Typography>
            <TypeWritter texts={keywords.map(w=>t(w))} />

            <Typography display={'flex'} variant='body1' sx={{
                marginTop: 3,
                fontSize: '22px',
                fontFamily: 'serif'
            }}>
                {t('introduction.paragraph')}
            </Typography>
            </Stack>
        </Stack>
    </>
  )
}

export default Introduction
