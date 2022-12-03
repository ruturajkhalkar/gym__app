import React from 'react'
import{Link} from 'react-router-dom'
import { Button,Stack,Typography } from '@mui/material'
import { fontSize } from '@mui/system'
export default function ExerciseCard({exercise}) {
  return (
   <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
    <Stack direction='row'>
        <Button
         sx={{ml:'21px',color:'#fff',background:'#ffa9a9',
         fontSize:'14px',borderRadius:'20px',textTranform:'capitalize'}}>
          {exercise.bodyPart}
        </Button>
        <Button
         sx={{ml:'21px',color:'#fff',background:'#fcc757',
         fontSize:'14px',borderRadius:'20px',textTranform:'capitalize'}}>
          {exercise.target}
        </Button>  
    </Stack>
        <Typography ml='21px' color='#000' fontWeight='Bold' mt='11px'pb='10px' textTransform='capitalize'
         >
          {exercise.name}
        </Typography>
   </Link>
  )}