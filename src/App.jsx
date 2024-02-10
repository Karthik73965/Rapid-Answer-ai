import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'
import AiChar from './pages/AiChat'
import Disscussions from './pages/Disscussions'
import Individualdisscussion from './pages/Indivialdisscussion'



export default function App() {
  return (
   <>
   
    <Routes>
      <Route exact  path='/' element={<Home/>} />
      <Route exact  path='/dashboard' element={<Dashboard/>} />
      <Route exact  path='/Aichat' element={<AiChar/>} />
      <Route exact  path='/discussions' element={<Disscussions/>} />
      <Route exact  path='/discussions/id' element={<Individualdisscussion/>} />
      <Route
             path="*"
             element={<PageNotFound />}
                />
    </Routes>
   
   </>
  )
}
