import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

export default function ExerciseVideo({exerciseVideo,name}) {
  if(!exerciseVideo.length) return('Loading...');
  return (
   <Box sx={{marginTop:{lg:'100px',xs:'15px'}}} p='20px'>
      <Typography variant='h4' mb='33px'>
         Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise Video
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItem='center'
      sx={{flexDirection:{lg:'row'},
      gap:{lg:'110px', xs:'0'}}}
      >
       {exerciseVideo?.slice(0,6).map((item,index)=>(
        <a key={index}
          className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_bank'
          rel='noreferrel'
          >
          <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
          <Typography variant='h5' color='#000'>
            {item.video.title}
          </Typography>
          <Typography variant='h6' color='#000'>
            {item.video.channelName}
          </Typography>
        </a>
       ))}  
      </Stack>
   </Box>
  )
}
