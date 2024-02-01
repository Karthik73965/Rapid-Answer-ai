import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

export default function Cards({ heading, component, description }) {
    return (
        <>
            <section className='border-solid bg-white border-2 rounded-lg p-3 shadow-xl m-4 w-[200px] border-blue-400'>
                <center>
                    <div className='m-1 font-semibold'>{component}</div>
                    <div className='m-1 text-gradient text-2xl font-bold'>{heading}</div>
                    <div className='m-1 text-sm text-gray-700 font-semibold'>{description}</div>
                    <button type="button" className="relative text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm m-2 px-5 py-2.5 text-center ring-animation">
                        <div className='flex items-center  justify-center gap-x-3'>
                            Get started  <HiArrowSmRight size={20} />
                        </div>
                       
                    </button>
                </center>
            </section>
        </>

    )
}
