import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './LoginSignup'
import Reg from './Reg.jsx'
import Home from './Home.jsx'
import Table from './Table.jsx'
import { About } from './About.jsx'

export const Project = () => {
  return (
   <>
 
  <Routes>
  <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<LoginSignup/>}></Route>
    <Route path='/register' element={<Reg/>}></Route>
    <Route path='/table' element={<Table />}></Route>
    <Route path='/about' element={<About/>}></Route>
    
  </Routes>
   
      </>
  )
}
export default Project;
