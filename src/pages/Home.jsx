import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import VideoSection from '../components/home/VideoSection'

export default function Home() {
  return (
   <>
    <div  className='h-[200vh] '>
      <div className='h-[100px]'></div>
      <Hero/>
      <VideoSection/>
    </div>
   </>
  )
}
