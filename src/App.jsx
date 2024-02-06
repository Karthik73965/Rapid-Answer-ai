import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import PageNotFound from './pages/PageNotFound'



export default function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route exact  path='/' element={<Home/>} />
      <Route
                    path="*"
                    element={<PageNotFound />}
                />
    </Routes>
    <Fotter/>
   </>
  )
}
