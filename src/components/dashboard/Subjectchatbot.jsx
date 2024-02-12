import React, { useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { IoSend, IoImage, IoAttach } from 'react-icons/io5';
import DashboardNav from './DashboardNav';
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { FaCopy, FaShareFromSquare } from 'react-icons/fa6';

const QuestionForm = ({ endpoint }) => {
    const [question, setQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(isLoading);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setData(null); // Clear previous data
        // Simulate an API call
        try {
            //   const response = await fetch(endpoint, {
            //     method: 'POST',
            //     body: JSON.stringify({ question }),
            //     headers: { 'Content-Type': 'application/json' },
            //   });
            //   const result = await response.json();
            //   setData(result); // Handle your data


            setTimeout(() => {
                setData("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  ")
                setIsLoading(false);
            }, 5000
            )
        } catch (error) {
            console.error('There was an error!', error);
            setIsLoading(false);
        }
    };

    const handleNewQuestion = () => {
        setQuestion('');
        setData(null);
        setSelectedImage(null);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <>
           <DashboardNav/>
           <div className='h-[100px]'></div>
            <div className='grid place-items-center'>
                <h1 className="text-4xl font-bold mb-4 text-gradient" >The evolution of 24/7 study starts here</h1>
                <p className="mb-4 text-slate-900 font-bold">Any question. Any subject. Get instant, step-by-step solutions the moment you need them.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
                <form className="w-[800px] " onSubmit={handleSubmit}>
                    <div className="flex items-center  border-2 border-black w-[800px] px- py-1 rounded-2xl mb-4">
                        <input
                            class="appearance-none bg-transparent  w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none h-16 "
                            type="text"
                            placeholder="What's your question?"
                            aria-label="Question input"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            disabled={isLoading}
                        />

                        <button
                            type="submit"
                            className={`flex-shrink-0 ${isLoading ? 'text-gray-500' : 'text-gray-700'} text-md py-1 px-2 rounded`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : <IoSend size={25} />}
                        </button>
                        <label className={`flex-shrink-0 ${isLoading ? 'text-gray-500' : 'text-gray-700'} text-md py-1 px-2 rounded`}>
                            <IoImage size={25} />
                            <input type="file" className="hidden" onChange={handleImageUpload} disabled={isLoading} />
                        </label>

                    </div>
                    {isLoading && <div className="loader">Loading...</div>}
                    {data && <div className="data-display bg-gray-200 p-3 rounded-lg">{JSON.stringify(data)}
                    <div className='flex gap-x-4 text-gray-700 mt-5'>
                    <BiSolidLike size={20} />
                    <BiSolidDislike size={20} />
                    <FaCopy size={20} />
                    <FaShareFromSquare size={20} />
                  </div>
                    </div>
                    }
        
                </form>

                {data && !isLoading && (
                    <button className="bg-black mt-8 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-full text-sm px-5 py-2.5 text-center text-white"
                    onClick={handleNewQuestion}
                    >
                        <div className='flex items-center justify-center gap-x-3'>
                            One More Question ? <HiArrowSmRight size={20} />
                        </div>
                    </button>
                )}
            </div>
        </>
    );
};

export default QuestionForm;
