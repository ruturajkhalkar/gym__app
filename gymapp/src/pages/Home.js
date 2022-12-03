import React, { useState } from 'react'
import{Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

export default function Home() {
  const[bodyPart,setBodyPart] = useState('all')
  const [exercises,setExercises] = useState([]) 
  console.log(bodyPart)
  return (
   <Box>
    <HeroBanner/>
    <SearchExercises
     setExercises={setExercises}
     setBodyPart={setBodyPart}
      bodyPart={bodyPart}/>
    <Exercises
    exercises={exercises}
    setExercises={setExercises}
     bodyPart={bodyPart}/>
   </Box>
  )
}
