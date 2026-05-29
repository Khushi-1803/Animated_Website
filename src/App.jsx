import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/projects'


const App = () => {
  
  
  return (
    <div>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/agence" element={<Agence/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </div>
  )
}

export default App