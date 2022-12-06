import React from 'react'
import{Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
export default function Footer() {
  return (
    <Box mt='80' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40' pt='24px' marginBottom='50px'>
          <img src={Logo} alt='logo' width='200px' height='40px'/>
      </Stack>
      
    </Box>
  )
}
