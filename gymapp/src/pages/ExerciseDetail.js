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
  const {id} = useParams();
  console.log(id)
  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';
    
      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOption)
           setExerciseDetail(exerciseDetailData)     
      
      const exerciseVideoData = await FetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,youtubeOption)
       setExerciseVideo(exerciseVideoData)
    }
    fetchExerciseData();
  },[id])

  return (
<Box>
  <Detail exerciseDetail={exerciseDetail}/>
  <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
  <SimilarExercises/>
</Box>
  )
}
