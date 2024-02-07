import React from 'react'
import DashboardNav from '../components/dashboard/DashboardNav'
import MainDash from '../components/dashboard/MainDash'
export default function Dashboard() {
  return (
    <>
    <div className='bg '>
    <DashboardNav/> <div className='h-[100px]'></div>
    <MainDash />
    </div>
    </>
  )
}
