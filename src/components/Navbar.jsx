    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
    import { TbMathSymbols } from "react-icons/tb";
    import { HiArrowSmRight } from "react-icons/hi";



    // import { IconName } from 'react-icons/...'; // import specific icons
    import 'tailwindcss/tailwind.css';


    const DropdownItem = ({ children }) => {

        return (
            <div className=" hover:text-green-500 hover:bg-blue-100  roudned-2xl mx-1 transition ease-in duration-300 p-2">
                {children}
            </div>
        );
    };


    const Navbar = () => {
        const [isScrolled, setIsScrolled] = useState(false);
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            <header className={`fixed font-semibold  mb- text-black w-full z-10 ${isScrolled ? 'bg-white shadow-md ' : 'bg-transparent '}  transition-all`}>
                <nav className="flex items-center justify-around p-4">
                    {/* Logo */}
                    <div className="logo">
                        <Link to="/">
                            {/* Replace with your logo */}
                            {/* <IconName />  */} <h1 className='text-xl'>DasTekEdu</h1>
                        </Link>
                    </div>

                    {/* Menu items */}
                    <div className="hidden md:flex space-x-4 ">
                        {/* Add dropdown logic and items */}
                        {/* Dropdown */}
                        <div
                            className="dropdown flex justify-center items-center gap- 4 cursor-pointer"
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

                        <div className="dropdown flex justify-center gap-1  align-middle"><span>Chatbot</span></div>
                        {/* <div className="dropdown">Pricing</div> */}
                        <div className="dropdown flex justify-center gap-1  align-middle"><span>Blogs</span></div>
                        <div className="dropdown flex justify-center gap-1  align-middle"><span>About</span></div>
                    </div>

                    {/* Sign-in/Sign-up */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/signup">
                            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span className="relative px-5 py-2  transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Login 
                                </span>
                            </button>

                        </Link>
                        <Link to="/signin">
                            <button type="button" className="relative text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ring-animation">
                                <div className='flex items-center justify-center gap-x-3'>
                                    Start for free  <HiArrowSmRight size={20} />
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg" style={{ animation: 'ring-animation 2s infinite' }}></div>
                            </button>
                        </Link>

                    </div>
                </nav>
            </header>
        );
    };

    export default Navbar;
