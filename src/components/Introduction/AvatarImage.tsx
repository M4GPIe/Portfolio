import { Box, keyframes, useTheme } from '@mui/material'

const openIrisAnimation = keyframes`
    from { clip-path: circle(0% at 50% 50%); }
    to   { clip-path: circle(50% at 50% 50%); }
`

const circularMotion = keyframes`
    from { transform: rotate(0turn);}
    to   { transform: rotate(0.5turn);}
`

const AvatarImage = () => {

    const theme = useTheme()

  return (
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        width:'450px',
        height:'450px'
    }}>
        {/* Arc */}
        <Box display={'flex'} sx={{
            position: 'absolute',
            width:'100%',
            height:'100%',
            background: `conic-gradient(
            ${theme.palette.primary.dark} 0deg 90deg,
            transparent 90deg 360deg
            )`,
            borderRadius:'50%',
            animation: `${circularMotion} 1000ms ease-in 150ms forwards`,
        }}/>
        {/* Iris */}
        <Box display={'flex'} width={'410px'} height={'410px'} sx={{
            borderRadius:50,
            backgroundColor: theme.palette.primary.main,
            position: 'relative',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            {/* Final image */}
            <Box width={'400px'} height={'400px'} sx={{
                borderRadius:50,
                backgroundImage:'url(/sailoe.png)',
                backgroundSize:'cover',
                backgroundPosition:'center',
                animation: `${openIrisAnimation} 1000ms ease-in 150ms forwards`,
            }}/>
        </Box>
    </Box>
  )
}

export default AvatarImage
