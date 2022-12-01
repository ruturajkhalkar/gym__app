import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

 

export default function App() {
  return (
    <>
   <Box width='400px'>
    <Navbar/>
    <Routes>
        <Route path='/' eLement={<Home/>}/>
        <Route path='/exercise/:id' eLement={<ExerciseDetail/>}/>
    </Routes>
    <Footer/>
   </Box>
   </>
  )
}
