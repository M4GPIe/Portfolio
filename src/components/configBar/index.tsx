import { ColorLens, Language } from '@mui/icons-material'
import { IconButton, List, ListItemButton, Popover, Stack } from '@mui/material'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'


const ConfigBar = () => {

    const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] = useState(false)
    const [isThemePopoverOpen, setIsThemePopoverOpen] = useState(false)

    const {i18n} = useTranslation()

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
                <ListItemButton onClick={()=>i18n.changeLanguage(lang)}>
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
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
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
