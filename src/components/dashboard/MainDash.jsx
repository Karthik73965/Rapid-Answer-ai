import React, { useState } from 'react';
import { GrSafariOption } from "react-icons/gr";
import Subjechatbot from '../../components/dashboard/Subjectchatbot';

const options = [
  { name: 'Maths', content: 'Homework Help Content' },
  { name: 'science', content: 'Chat with AI Content' },
  { name: 'social', content: 'Ask Expert Content' },
  { name: 'english', content: 'Feedback Content' },
  // Add more options as needed
];

const Sidebar = () => {
  const [activeContent, setActiveContent] = useState(options[0].content);
  const [activeOption, setActiveOption] = useState(options[0].name); // Added state to track active option

  return (
    <div className='h-[85vh]' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '20%', borderRight: '1px solid #ccc' }}>
        <div className='text-gradient px-[40px] py-[10px] text-3xl font-bold mb-6 underline'>Subjects</div>
        {options.map((option) => (
          <div
            key={option.name}
            className={`m-[15px] rounded-xl  ${activeOption === option.name ? 'bg-green-300' : ''}`} // Conditional styling
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setActiveContent(option.content);
              setActiveOption(option.name); // Update active option state
            }}
          >
            <div className='m-3 rounded-lg text-2xl p-1 font-semibold text-slate-900 flex gap-x-2'>
              <GrSafariOption className='m-2' size={20} />
              {option.name}
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '80%', padding: '10px' }}> 
       <Subjechatbot content={activeContent}/>  {/* Pass activeContent as a prop */}
      </div>
    </div>
  );
};

export default Sidebar;
