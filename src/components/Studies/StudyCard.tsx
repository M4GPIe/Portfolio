import { Box, Stack, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface Props {
    translationName: string,
    imageUrl: string
}

const StudyCard = ({translationName, imageUrl}:Props) => {

    const theme = useTheme()

    const {t} = useTranslation()

  return (
   <Stack sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 5,
        paddingY: 2,
        paddingX: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    }}>
        <Box component={'img'} src={imageUrl} sx={{
            width: '150px',
            height: '150px',
        }}>

        </Box>
        <Box>
            <Typography variant='h5'>
                {t(`studies.${translationName}.title`)}
            </Typography>
            <Typography fontSize={'18px'} variant='body2' color='#454545'>
                {t(`studies.${translationName}.timeSpan`)}
            </Typography>
            <Typography align='justify' display={'flex'} mt={1}>
                {t(`studies.${translationName}.body`)}
            </Typography>
        </Box>
    </Stack>
  )
}

export default StudyCard
