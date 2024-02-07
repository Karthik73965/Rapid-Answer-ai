import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { TbMathSymbols } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

import 'tailwindcss/tailwind.css';

const DropdownItem = ({ children }) => {
    return (
        <div className="hover:text-green-500 hover:bg-blue-100 rounded-2xl mx-1 transition ease-in duration-300 p-2">
            {children}
        </div>
    );
};

const DashboardNav= () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);    
    const [isProfileOpen, setIsprofileOpen] = useState(false);    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed font-semibold  shadow-md text-black w-full z-10 ${isScrolled ? 'bg-white shadow-md ' : 'bg-transparent '} transition-all`}>
            <nav className="flex items-center justify-around p-4">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <h1 className='text-xl'>DasTekEdu</h1>
                    </Link>
                </div>

                    {/* Menu items */}
                    <div className="hidden md:flex space-x-4 ">
                        {/* Add dropdown logic and items */}
                        {/* Dropdown */}
                        <div
                            className="dropdown flex justify-center items-center gap-x-6 cursor-pointer"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >   
                            <span className=" hover:text-green-700 transition ease-in duration-300">Subjects</span>
                            {isDropdownOpen ? <RiArrowDropUpLine className='m-[5px] transition-transform duration-300' /> : <RiArrowDropDownLine className='m-[5px] transition-transform duration-300' />}

                            {isDropdownOpen && (
                                <div className="absolute  mt-[235px] py-2 bg-white shadow-lg rounded-lg fade-in">
                                    <DropdownItem>
                                        <div className='flex  '>
                                            <TbMathSymbols color='black' size={'25px'} />
                                            <div >Maths<p className='text-blue-400'>this is for maths</p></div>

                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex gap-2'>
                                            <TbMathSymbols color='black' size={'25px'} />
                                            <div >Maths<p className='text-blue-400'>this is for maths</p></div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex gap-2'>
                                            <TbMathSymbols color='black' size={'25px'} />
                                            <div >Maths<p className='text-blue-400'>this is for maths</p></div>
                                        </div>
                                    </DropdownItem>
                                </div>
                            )}
                        </div>

                        <div className="dropdown flex justify-center gap-1  align-middle"><span>Ai chat</span></div>
                        {/* <div className="dropdown">Pricing</div> */}
                        <div className="dropdown flex justify-center gap-1  align-middle"><span>Discussions</span></div>
                     
                    </div>

                {/* Conditionally render buttons based on login state */}
                <div
                            className="dropdown flex justify-center items-center gap- 4 p-2 rounded-lg cursor-pointer bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            onMouseEnter={() => setIsprofileOpen(true)}
                            onMouseLeave={() => setIsprofileOpen(false)}
                        >   
                            <span className="  transition ease-in duration-300 text-white font-bold  "><span className='flex align-middle justify-center' > <CgProfile className='m-1' size={20}/>
profile</span></span>
                            {isDropdownOpen ? <RiArrowDropUpLine className='m-[5px] transition-transform duration-300' /> : <RiArrowDropDownLine className='m-[5px] transition-transform duration-300' />}

                            {isProfileOpen && (
                                <div className="absolute  mt-[145px] py-2 bg-white shadow-lg rounded-lg fade-in">
                                    <DropdownItem>
                                        <div className='flex  '>
                                            <TbMathSymbols color='black' size={'25px'} />
                                            <div >Settigns</div>

                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex  '>
                                            <TbMathSymbols color='black' size={'25px'} />
                                            <div >Logout</div>

                                        </div>
                                    </DropdownItem>
                                   
                                </div>
                            )}
                        </div>

            </nav>
        </header>
    );
};

export default DashboardNav;
