import React from 'react'
import {useEffect,useState} from 'react'
import { Pagination } from '@mui/material'
import{Box,Stack,Typography} from '@mui/material'
import { FetchData,exerciseOption } from '../utils/FetchData'
import ExersiseCart from './ExerciseCard'



export default function Exercises({exercises,setExercises,bodyPart}) {
  const[currentPage,setCurretntPage] = useState(1)
  const exercisesPerpage = 9;
  const indexOfLastExercise = currentPage*exercisesPerpage;
  const indexofFirstExercise =  indexOfLastExercise-exercisesPerpage;
  
  const currentExercise = exercises.slice(indexofFirstExercise,indexOfLastExercise)
   const paginate = (e,value)=>{
    setCurretntPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
   }
   useEffect(()=>{
    const fetchExerciseData = async ()=>{
      let exercisesData = [];
      
      if(bodyPart==='all'){
        exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption)
        
      }
      else{
        exercisesData =await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOption)
        
      }
      setExercises(exercisesData)
      }
       fetchExerciseData();
    },[bodyPart])

  return (
    <Stack id='exercises' sx={{mt:{lg:'109px'}}} mt='50px' padding='20px'>
     
     <Typography variant='h3' >
      Showing Result 
     </Typography>
     <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}}
     flexWrap='wrap' justifyContent='center'
     >
      {   currentExercise.map((exercise,index)=>(
       <ExersiseCart key={index} exercise={exercise}/>
      ))}
     </Stack>
     <Stack mt='100px' alignItems='center'>
       {exercises.length > 9 &&( <Pagination
       color='standard'
       shape='rounded'
       count = {Math.ceil(exercises.length/exercisesPerpage)}
       page={currentPage}
       onChange = {paginate}
       size='large'
       /> )}
     </Stack>
    </Stack>
  )
}
