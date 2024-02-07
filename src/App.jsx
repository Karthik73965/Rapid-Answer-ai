import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'



export default function App() {
  return (
   <>
   
    <Routes>
      <Route exact  path='/' element={<Home/>} />
      <Route exact  path='/dashboard' element={<Dashboard/>} />
      <Route
             path="*"
             element={<PageNotFound />}
                />
    </Routes>
   
   </>
  )
}
