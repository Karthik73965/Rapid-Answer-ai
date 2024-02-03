import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'


export default function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Fotter/>
   </>
  )
}
