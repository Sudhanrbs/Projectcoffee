import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './LoginSignup'
import Reg from './Reg.jsx'
import Home from './Home.jsx'

export const Project = () => {
  return (
   <>
 
  <Routes>
  <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<LoginSignup/>}></Route>
    <Route path='/register' element={<Reg/>}></Route>
   
    
  </Routes>
   
      </>
  )
}
export default Project;
