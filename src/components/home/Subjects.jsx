import React from 'react'
import Cards from '../utils/Cards'
import { PiMathOperationsBold } from "react-icons/pi";


export default function Subjects() {
    return (
        <div className='mx-10 mt-24 '>
            <h3 className='text-4xl font-bold text-gradient'>
                <span className='flex justify-center align-middle'>Easily Ask Your Questions with Images or Texts,<br /> and Get All-in-one Solutions for Any Homework</span>
            </h3>
            <p className='text-gray-500 text-md flex justify-center align-middle mt-4 font-semibold '>With  advanced AI studymates, easily dive into interactive learning with AI.</p>
            <section className='flex flex-wrap justify-center align-middle mt-8'>
            <Cards heading={'Maths'} component={<PiMathOperationsBold size={70} />
            } description={'Get more precise responses to all questions  '} />
            <Cards heading={'Maths'} component={<PiMathOperationsBold size={70} />
            } description={'Get more precise responses to all questions  '} />
            <Cards heading={'Maths'} component={<PiMathOperationsBold size={70} />
            } description={'Get more precise responses to all questions '} />
            </section>
            <section className='flex flex-wrap justify-center align-middle '>
            <Cards heading={'Maths'} component={<PiMathOperationsBold size={70} />
            } description={'Get more precise responses to all questions  '} />
            <Cards heading={'Maths'} component={<PiMathOperationsBold size={70} />
            } description={'Get more precise responses to all questions  '} />
            <Cards heading={'Maths'} component={<PiMathOperationsBold size={70} />
            } description={'Get more precise responses to all questions '} />
            </section>

        </div>
    )
}
