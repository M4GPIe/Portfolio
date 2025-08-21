
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Stack, Typography, useTheme } from '@mui/material';

interface TimeLineItem {
    title: string,
    subtitle?: string
    timeSpan?: string
    description?: string
}

interface Props {
    align: 'left' | 'right',
    items: TimeLineItem[]
}

const TimeLineSection = ({align, items}:Props) => {

    const theme = useTheme()

  return (
   <Timeline position={align}
    sx={{
        "& .MuiTimelineItem-root": { minHeight:250, display:'flex'},   
        "& .MuiTimelineDot-root": { padding: "12px" },   
        color: theme.palette.secondary.main,

        // mui by default adds a whitespace to align the timeline to the center
        "& .MuiTimelineItem-missingOppositeContent:before": {
            display: "none",  
        },
    }}
   >
        {items?.map((item,index)=>(
                <TimelineItem >
                    <TimelineSeparator>
                    <TimelineDot sx={{bgcolor: theme.palette.secondary.main}} />
                    {index!==items.length-1 && <TimelineConnector sx={{
                        bgcolor: theme.palette.secondary.main,
                        borderLeft: `2px dashed ${theme.palette.secondary.main}`, 
                        background: "none",    
                        }}/>}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Stack direction={'row'} gap={5} sx={{marginBottom:15 }}>
                            <Stack minWidth={'250px'}>
                                <Typography variant='h5'>
                                    {item.title}
                                </Typography>
                                <Typography fontSize={'18px'} variant='body2' color='#454545'>
                                    {item.subtitle}
                                </Typography>
                                <Typography fontSize={'16px'} variant='body2' color='#555555'>
                                    {item.timeSpan}
                                </Typography>
                            </Stack>
                            <Stack maxHeight={300} overflow={'auto'} >
                                <Typography fontSize={'22px'} align='justify' display={'flex'} mt={1} whiteSpace={'pre-line'}>
                                    {item.description}
                                </Typography>
                            </Stack>
                        </Stack>
                    </TimelineContent>
                </TimelineItem>
            ))}
    </Timeline>
  )
}

export default TimeLineSection
