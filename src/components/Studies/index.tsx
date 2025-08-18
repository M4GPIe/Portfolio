import { IconButton, Stack, useTheme } from '@mui/material'
import StudyCard from './StudyCard'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { useCallback, useEffect, useRef, useState } from 'react'


const step = 250

const Studies = () => {

    const theme = useTheme()

    const [canScrollUp, setCanScrollUp] = useState(false)
    const [canScrollDown, setCanScrollDown] = useState(false)

    // display or not scrll buttons
    const [needsScroll, setNeedsScroll] = useState(false)
    
    const scrollContainerRef = useRef<HTMLDivElement | null>(null)

    const updateButtons = useCallback(()=>{
        const el = scrollContainerRef.current

        if(!el) return

        const atTop = el.scrollTop<=0

        // distances to top + distance shown >= total distance
        const atBottom = Math.ceil(el.scrollTop + el.clientHeight)>=el.scrollHeight

        setCanScrollUp(!atTop)
        setCanScrollDown(!atBottom)
        setNeedsScroll(el.scrollHeight > el.clientHeight);
    },[])

    useEffect(()=>{
        updateButtons()

        const el = scrollContainerRef.current
        if(!el) return

        const onScroll = ()=>updateButtons()
        const onResize = ()=>updateButtons()

        el.addEventListener('scroll', onScroll,{passive:true})
        window.addEventListener('resize',onResize)

        return ()=>{
            el.removeEventListener('scroll',onScroll)
            window.removeEventListener('resize',onResize)
        }
    },[])

    const doScroll = (delta: number)=>{
        const el = scrollContainerRef.current
        if(!el) return

        el.scrollBy({top: delta, behavior: 'smooth'})
    }

  return (
    <Stack sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 15,
        display: 'flex',    
        paddingY: 5,
        paddingX: 8,
        gap: 4,
        flexDirection: 'row',
        maxHeight: '80vh',  
    }}>
        <Stack ref={scrollContainerRef} component={'div'} gap={4} sx={{
            overflowY: 'hidden',
        }}>
            <StudyCard translationName='ib' imageUrl='/ib_logo.png'/>
            <StudyCard translationName='ib' imageUrl='/ib_logo.png'/>
            <StudyCard translationName='ib' imageUrl='/ib_logo.png'/>
            <StudyCard translationName='ib' imageUrl='/ib_logo.png'/>
            <StudyCard translationName='ib' imageUrl='/ib_logo.png'/>
        </Stack>
       { needsScroll && (
            <Stack display={'flex'} justifyContent={'space-between'} >
                <IconButton 
                    onClick={()=>doScroll(-step)}
                    disabled={!canScrollUp}
                    sx={{backgroundColor: theme.palette.secondary.main}}
                >
                    <KeyboardArrowUp fontSize='large'/>
                </IconButton>
                <IconButton 
                    onClick={()=>doScroll(step)}
                    disabled={!canScrollDown}
                    sx={{backgroundColor: theme.palette.secondary.main}}
                >
                    <KeyboardArrowDown fontSize='large'/>
                </IconButton>
            </Stack>
        )}
        
    </Stack>
  )
}

export default Studies
