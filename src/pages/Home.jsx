import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import VideoSection from '../components/home/VideoSection'
import Subjects from '../components/home/Subjects'

export default function Home() {
  return (
   <>
    <div  className=''>
      <div className='h-[100px]'></div>
      <Hero/>
      <VideoSection/>
      <Subjects/>
    </div>
   </>
  )
}
