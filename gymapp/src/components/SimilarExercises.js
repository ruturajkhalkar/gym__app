import React from 'react'
import {Box,Typography,Stack}from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

export default function SimilarExercises({targetExerciseMucel,equipmentExercise}) {
  return (
    <Box sx={{mt:{lg:'80px',xs:'0'}}} >
      <Typography variant='h3' marginBottom='40px'>Exercises that target the same muscle group </Typography>
      <Stack direction='row' sx={{p:'2',position:'relatives'}}>
         {targetExerciseMucel.length? <HorizontalScrollbar data={targetExerciseMucel}/>:
         <Loader/>} 
      </Stack>
      <Typography variant='h3' marginBottom='40px'>Exercises that use same equipment </Typography>
      <Stack direction='row' sx={{p:'2',position:'relatives'}}>
         {equipmentExercise.length? <HorizontalScrollbar data={equipmentExercise}/>:
         <Loader/>} 
      </Stack>
    </Box>
  )
}
