import React from 'react'
import {Stack,Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

export default function BodyPart({BodyPart,setBodyPart,item}) {
  return (
    <Stack
    type ='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={
        BodyPart===item?{
         borderTop:'4px solid #ff2625',
         background:'#fff',
         borderBottomLeftRadius:'20px',width:'270px',height:'282px',cursor:'pointer',gap:'47px'}
         :{background:'#fff',borderBottomLeftRadius:'20px',width:'270px',height:'282px',cursor:'pointer',gap:'47px'}
        }
    
    >
        <img src={Icon} alt='dumbbell' style={{width:'40px',height:'40px'}} />
    </Stack>
  )
}
