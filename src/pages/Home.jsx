import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
   <>
     <Navbar/>
    <div  className='h-[200vh] '>
      <div className='h-[100px]'></div>
      <Hero/>
    </div>
   </>
  )
}
