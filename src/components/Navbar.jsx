import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { TbMathSymbols } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";
import 'tailwindcss/tailwind.css';

const DropdownItem = ({ children }) => {
    return (
        <div className="hover:text-green-500 hover:bg-blue-100 rounded-2xl mx-1 transition ease-in duration-300 p-2">
            {children}
        </div>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const login = true; // This should ideally be derived from your authentication state

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
        <header className={`fixed font-semibold text-black w-full z-10 ${isScrolled ? 'bg-white shadow-md ' : 'bg-transparent '} transition-all`}>
            <nav className="flex items-center justify-around p-4">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <h1 className='text-xl font-bold '>NexGenStudy Ai</h1>
                    </Link>
                </div>

                {/* Menu items */}
                     {/* Menu items */}
                     <div className="hidden md:flex space-x-4 ">
                        {/* Add dropdown logic and items */}
                        {/* Dropdown */}
                        <div
                            className="dropdown flex justify-center items-center gap- 4 cursor-pointer"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >   
                            <Link to={'/dashboard'}><span className=" hover:text-green-700 transition ease-in duration-300">Subjects</span></Link>
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

                        <Link to={'/dashboard'}>
                       <div className="dropdown flex justify-center gap-1  align-middle"><span>Chatbot</span></div>
                       </Link>
                        {/* <div className="dropdown">Pricing</div> */}
                        <Link to={'/Blogs'}>
                       <div className="dropdown flex justify-center gap-1  align-middle"><span>Blogs</span></div>
                       </Link>
                       <Link to={'/About'}>
                       <div className="dropdown flex justify-center gap-1  align-middle"><span>About</span></div>
                       </Link>
                    </div>


                {/* Conditionally render buttons based on login state */}
                <div className="hidden md:flex space-x-4">
                    {login ? (
                        <Link to="/dashboard">
                           <button className="bg-black  font-medium rounded-full text-sm px-5 py-2.5 text-center text-white">
                           <div className='flex items-center justify-center gap-x-3'>
                                        Dashboard <HiArrowSmRight size={20} />
                                    </div>   
                                </button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/signup">
                                <button className="bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signin">
                                <button type="button" className="bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
                                    <div className='flex items-center justify-center gap-x-3'>
                                        Start for free <HiArrowSmRight size={20} />
                                    </div>
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
