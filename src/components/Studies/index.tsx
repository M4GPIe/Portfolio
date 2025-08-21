import { Stack, useTheme } from '@mui/material'
import TimeLineSection from './TimeLineSection'
import { useTranslation } from 'react-i18next'



const Studies = () => {

    const theme = useTheme()

    const {t} = useTranslation()

    const items = [
        {
            title: t('studies.ib.title'),
            subtitle: t('studies.ib.academy'),
            timeSpan: t('studies.ib.timeSpan'),
            description: t('studies.ib.body')
        },
        {
            title: t('studies.computerScience.title'),
            subtitle: t('studies.computerScience.academy'),
            timeSpan: t('studies.computerScience.timeSpan'),
            description: t('studies.computerScience.body')
        },
        {
            title: t('studies.helsinkiFullStack.title'),
            subtitle: t('studies.helsinkiFullStack.academy'),
            timeSpan: t('studies.helsinkiFullStack.timeSpan'),
            description: t('studies.helsinkiFullStack.body')
        }
    ]

  return (
    <Stack sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 15,
        display: 'flex',    
        paddingY: 5,
        paddingX: 8,
        gap: 4,
        flexDirection: 'row',
        height: '80vh',  
        width: '100%',
        overflowY: 'auto',
        ":-webkit-scrollbar":{
          display:'none'
        },
        '-ms-overflow-style': 'none', 
        'scrollbar-width': 'none',
    }}>
        <TimeLineSection align='right' items={items}/>
        
    </Stack>
  )
}

export default Studies
