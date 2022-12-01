import React from 'react'
import{Box,Stack,Typography} from '@mui/material';


export default function HeroBanner() {
  return (
   
   <Box sx={{mt:{lg:'212px',xs:'70px'},
             ml:{sm:'50px'}}}
             position='realtive'p='20px'>
    <Typography color='#FF2625' fontWait='600' fontSize='26px'>
        Fitness club
    </Typography>
    <Typography>
        Sweat,Smile<br/>and Repeat
    </Typography>
    <Typography>
        Check out the most effective exercises
    </Typography>
   </Box>
  )
}
