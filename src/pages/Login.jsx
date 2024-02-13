import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { SlLogin } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";


export default function Signup() {
    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep(step + 1);
      };
    
      const previousStep = () => {
        setStep(step - 1);
      };
    const handleback = ()=>{
        if (step >   1) {
            setStep(1)
          } else {
            // Handle final form submission here
            console.log("Form submitted");
          }
    }
      const handleSubmit = (event) => {

        if (step === 1) {
          nextStep();
        } else {
          // Handle final form submission here
          console.log("Form submitted");
        }
      };
    return (
        <>
            <Navbar />
            <div className='h-20'></div> {/* Use standard spacing units */}
            <div className="flex mt-14 justify-center">
                <div className='flex min-h-[60] align-baseline border w-full max-w-4xl mx-auto border-black rounded-xl'>
                    <section className='w-1/2 border-r border-black'>
                        {/* slider component will go here */}
                    </section>
                    <section className='w-1/2 p-8'>
                       {
                        step ===1 ?
                        <div>
                             <h2 className='text-3xl  flex gap-x-4 font-semibold text-center mb-8'>
                            <SlLogin />

                            Login to your account
                        </h2>
                        <form className='my-[10vh]'>
                            <div className='border-2 cursor-pointer  p-2 rounded-lg border-gray-900 flex align-middle justify-center'><FcGoogle size={25} className='mr-7' />    Login with google</div>
                            <input
                                type='email'
                                id='email'
                                placeholder='Email'
                                className='border my-3 w-full p-2 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500' />


                            <input
                                type='password'
                                id='password'
                                placeholder='Enter password'
                                className='border w-full mt-3 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500' />
                            <span onClick={handleSubmit} className='mb-3 ml-3 text-blue-900 text-sm '>Forgot your password ?</span>

                            <div className='justify-between items-center my-6'>
                                <button  className="bg-black w-full font-medium rounded-full text-sm p-3 text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                    Login
                                </button>
                            </div>
                                <Link to="/login" className='text-gray-900 hover:text-gray-800'>
                                    Already have an account? Login
                                </Link><br/>
                        </form>
                        </div>
                        :
                        <div>
                              <h2 className='text-3xl  flex gap-x-4 font-semibold text-center mb-8'>
                            <SlLogin />Forget your password ? NO worries 
                        </h2>
                          
                            <div className='font-bold mt-5 text-lg'>Enter your registered email to continue ..  </div>
                            <input
                                type='email'
                                id='email'
                                placeholder='Email'
                                className='border my-3 w-full p-2 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500' />
                                 <button onClick={handleback} type='submit' className="bg-black font-medium rounded-full mt-8 text-lg text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full p-3 focus:ring-black">
                      Submit
                    </button>
                        </div>
                       }
                    </section>
                        
                </div>
            </div>
        </>
    );
}
