import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import VideoSection from '../components/home/VideoSection'
import Subjects from '../components/home/Subjects'
import Reviews from '../components/home/Reviews'
import Feautures from '../components/home/Feautures'

export default function Home() {
  return (
   <>
    <div  className=''>
      <div className='h-[100px]'></div>
      <Hero/>
      <VideoSection/>
      <Subjects/>
      <Reviews/>
      <Feautures/>
    </div>
   </>
  )
}
