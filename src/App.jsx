import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'
import AiChar from './pages/AiChat'
import Disscussions from './pages/Disscussions'
import Individualdisscussion from './pages/Indivialdisscussion'
import Chathistory from './pages/Chathistory'
import About from './pages/About'



export default function App() {
  return (
   <>
   
    <Routes>
      <Route exact  path='/' element={<Home/>} />
      <Route exact  path='/dashboard' element={<Dashboard/>} />
      <Route exact  path='/Aichat' element={<AiChar/>} />
      <Route exact  path='/discussions' element={<Disscussions/>} />
      <Route exact  path='/discussions/id' element={<Individualdisscussion/>} />
      <Route exact  path='/chathistory' element={<Chathistory/>} />
      <Route exact  path='/About' element={<About/>} />
      <Route
             path="*"
             element={<PageNotFound />}
                />
    </Routes>
   
   </>
  )
}
