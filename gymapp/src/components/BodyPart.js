import React from 'react'
import {Stack,Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

export default function BodyPart({bodyPart,setBodyPart,item}) {
  return (
    <Stack
    type ='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={
        bodyPart===item?{
         borderTop:'4px solid #ff2625',
         background:'#fff',
         borderBottomLeftRadius:'20px',width:'270px',height:'282px',cursor:'pointer',gap:'47px'}
         :{background:'#fff',borderBottomLeftRadius:'20px',width:'270px',height:'282px',cursor:'pointer',gap:'47px'}
        }
        onClick={()=>{
            setBodyPart(item)
            window.scroll({top:1800,left:100,behavior:'smooth'})
        }}
    
    >
        <img src={Icon} alt='dumbbell' style={{width:'40px',height:'40px'}} />
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTranform='capitalize'>{item}</Typography>

    </Stack>
  )
}
