import React, { useState, useEffect } from 'react';
import video from '../../assests/demo.mp4'
import { HiArrowSmRight } from 'react-icons/hi';

const categories = [
    { key: 'ld', name: 'Maths ', heading: 'Dummy heading', description: " this is the descrition of the things which is usefull for the demo this is the descrition of the things which is usefull for the  " },
    { key: 'se', name: 'Science', heading: 'Dummy heading', description: " this is the descrition of the things which is usefull for the demo this is the descrition of the things which is usefull for the  " },
    { key: 'cs', name: 'Engineering', heading: 'Dummy heading', description: " this is the descrition of the things which is usefull for the demo this is the descrition of the things which is usefull for the   " },
    { key: 'is', name: 'Communication', heading: 'Dummy heading', description: " this is the descrition of the things which is usefull for the demothis is the descrition of the things which is usefull for the   " },
    { key: 'mkt', name: 'Sociology', heading: 'Dummy heading', description: " this is the descrition of the things which is usefull for the demo this is the descrition of the things which is usefull for the" },
];

const ContentDisplay = ({ category }) => {
    // You can fetch and return the relevant content based on the category selected
    return (
        <>
            <section className='m-8 px-3 grid sm:flex'>
                <div className='text-wrap flex-1 p-4 '>
                    <div className='text-4xl text-gradient h-16 font-bold my-2'>{category.name}</div>
                    {/* <div className='text-xl font-semibold my-2'>{category.heading}</div> */}
                    <div className='text-xl  text-slate-600 font-semibold my-2 '>"Content for {category.description}"</div>
                    <div className='text-xl  text-slate-600 font-semibold my-2 '>"Content for {category.description}"</div>
                    <button type="button" className="relative text-white bg-blackhover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg mt-8 px-5 py-2.5 text-center ring-animation">
                        <div className='flex items-center justify-center gap-x-3'>
                            Start for free  <HiArrowSmRight size={20} />
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg" style={{ animation: 'ring-animation 2s infinite' }}></div>
                    </button>
                </div>
                <div className='flex-1 p-4'>
                    <video className='rounded-lg' autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </section>
        </>
    )

};

const VideoSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const updateMedia = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    return (
        <div className='mx-10 mt-24'>
            {isMobile ? (
                <select
                    value={selectedCategory.key}
                    onChange={(e) => setSelectedCategory(categories.find(cat => cat.key === e.target.value))}
                >
                    {categories.map((category) => (
                        <option key={category.key} value={category.key}>
                            {category.name}
                        </option>
                    ))}
                </select>
            ) : (
                <center>
                    <div className='flex justify-center align-middle mx-8  border-gray-300border- border-4 p-1 py-3 rounded-full '>
                        {categories.map((category) => (
                            <button className="inline-flex items-center bg-black text-white justify-center  n   rounded-full  p-3 py-4 mx-4 text-xl" onClick={() => setSelectedCategory(category)}>
                                <span className="relative mx-2 transition-all ease-in duration-75 bg-black  rounded-md group-hover:bg-opacity-0">
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </center>
            )}
            <ContentDisplay category={selectedCategory} />
        </div>
    );
};

export default VideoSection;
