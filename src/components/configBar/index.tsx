import { ColorLens, Language } from '@mui/icons-material'
import { Box, IconButton, List, ListItemButton, Popover, Stack } from '@mui/material'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MyThemes, themeList } from '../../AppThemes'

export interface Props {
    setTheme: Dispatch<SetStateAction<MyThemes>>
}


const ConfigBar = ({setTheme}:Props) => {

    const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] = useState(false)
    const [isThemePopoverOpen, setIsThemePopoverOpen] = useState(false)

    const {i18n, t} = useTranslation()

    const languageAnchorRef = useRef(null)
    const themeAnchorRef = useRef(null)

  return (
    <>
    <Popover
        open={isLanguagePopoverOpen}
        onClose={() => setIsLanguagePopoverOpen(false)}
        anchorEl={languageAnchorRef.current}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
        }}
        sx={{
            marginLeft: 3
        }}
    >
        <List>
            {(i18n.options.supportedLngs as string[])?.filter(lang=>lang!=='cimode')?.map((lang)=>(
                <ListItemButton key={lang} onClick={()=>i18n.changeLanguage(lang)}>
                    {lang}
                </ListItemButton>
            ))}
        </List>
    </Popover>
    <Popover
        open={isThemePopoverOpen}
        onClose={() => setIsThemePopoverOpen(false)}
        anchorEl={themeAnchorRef.current}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
        }}
        sx={{
            marginLeft: 3
        }}
    >
        <List>
            {themeList.map(({name, color})=>(
                <ListItemButton key={name} onClick={()=>setTheme(name)}>
                    {t(name)}
                    <Box width={'20px'} height={'20px'} sx={{backgroundColor: color}}/>
                </ListItemButton>
            ))}
        </List>
    </Popover>
    <Stack gap={2} position={'absolute'} top={'30px'} left={'30px'}>
        <IconButton ref={languageAnchorRef} sx={{backgroundColor:'white'}} onClick={()=>setIsLanguagePopoverOpen(true)}>
            <Language/>
        </IconButton>

        <IconButton ref={themeAnchorRef} sx={{backgroundColor:'white'}} onClick={()=>setIsThemePopoverOpen(true)}>
            <ColorLens/>
        </IconButton>
    </Stack>
    </>
  )
}

export default ConfigBar
