import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { textTransform } from '@mui/system';
import { FetchData, exerciseOption } from '../utils/FetchData';
import HorizontalScrollbar from './HorizontalScrollbar'


export default function SearchExercises({setExercises,bodyPart,setBodyPart}) {

  const [search, setSearch] = useState('')
  
  const [bodyParts,setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async()=>{
      const bodyPartData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOption)
      setBodyParts(['all',...bodyPartData])
    };
    fetchExerciseData();
  },[])
  
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption)
      const searchedExercises = exerciseData.filter((exercise)=>exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)

      )
      setSearch('');
      setExercises(searchedExercises);
      
    }

  }

  return (
    <Stack alignitems='center' mt='37' justifyContent='center' p='20px'>
      <Typography fontWeight='700px' sx={{ fontSize: { lg: '44px', xs: '30px' } }} mt='49px' textAlign='center'>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box posit='relative' mb='72px'>
        <TextField
          height='76px'
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder="Search Exercise"
          text='type'
        >
        </TextField>
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: 'fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px', position: 'absolute',
            fontSize: { lg: '20px', xs: '14px' }
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'ralative', width: '100%', p: '20px' }}>
           <HorizontalScrollbar data={bodyParts}
           bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>

    </Stack>
  )
}
