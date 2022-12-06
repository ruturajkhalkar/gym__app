import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import{Box} from "@mui/material"
import { FetchData,exerciseOption,youtubeOption} from '../utils/FetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'

export default function ExerciseDetail() {
  const[exerciseDetail,setExerciseDetail] = useState({})
  const[exerciseVideo,setExerciseVideo] = useState([])
  const[targetExerciseMucel,setTargetExerciseMucel] = useState([])
  const[equipmentExercise,setEquimentExercise] = useState([])
  const {id} = useParams();
  

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';
    
      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOption)
           setExerciseDetail(exerciseDetailData)     
      
      const exerciseVideoData = await FetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOption)
       setExerciseVideo(exerciseVideoData.contents)

       
       const targetMuscleExerciseData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOption);
       setTargetExerciseMucel(targetMuscleExerciseData);

       
       const equipmentExerciseData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOption)
       setEquimentExercise(equipmentExerciseData)
      }

    fetchExerciseData();
  },[id])

  return (
<Box>
  <Detail exerciseDetail={exerciseDetail}/>
  <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
  <SimilarExercises targetExerciseMucel={targetExerciseMucel}
                   equipmentExercise={equipmentExercise}/>
</Box>
  )
}
