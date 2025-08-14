import { Box, keyframes, Typography, useTheme } from '@mui/material'
import  { useEffect, useState } from 'react'

interface Props {
    texts: string[],
    typingSpeed?: number,
    pauseTime?: number,
    deletingSpeed?: number
}

const TypeWritter = ({texts, typingSpeed = 150, pauseTime = 1000, deletingSpeed = 100}:Props) => {

    const [index, setIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const theme = useTheme()

    useEffect(()=>{

        const text = texts[index]

        if(!isDeleting && displayedText !== text){
            setTimeout(()=>setDisplayedText(text.slice(0,displayedText.length+1)),typingSpeed)
        }else if(!isDeleting && displayedText === text){
            setTimeout(()=>setIsDeleting(true),pauseTime)
        }else if(isDeleting && displayedText.length>0){
            setTimeout(()=>{setDisplayedText(text.slice(0,displayedText.length-1))})
        }else{
            setTimeout(()=>{
                setIsDeleting(false)
                setIndex((index+1)%texts.length)
            })
        }
        
    },[texts, typingSpeed, pauseTime, deletingSpeed,index,displayedText,isDeleting])

    const blinkAnimation = keyframes`
        from, to { border-color: transparent; }
        50% { border-color: inherit; }
    `

    const appearAnimation = keyframes`
        0% { color: transparent; }
        75% { color: transparent; }
        100% { color: ${theme.palette.text.primary}}
    `

  return (
    <Typography variant='h5' sx={{
        fontFamily:'monospace',
        animation: `${appearAnimation} 1.15s`
    }}>
        {displayedText}
        <Box component={'span'} sx={{
            borderRight: '2px solid',
            animation: displayedText === texts[index]? `${blinkAnimation} 0.5s step-end infinite`:'none'
        }}/>
    </Typography>
  )
}

export default TypeWritter
