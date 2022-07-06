import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-sky-900'>EUBRICKS</h1>
                </div>
                <div className='hidden md:flex pr-4'>

                    <button className='border-none bg-transparent text-black mr-4'>
                        <NavLink to="/SignIn"> Sign In </NavLink>
                    </button>
                    <NavLink to='/SignUp'>
                        <button className='px-8 py-3'>
                            Sign Up
                        </button>
                    </NavLink>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>

                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4' >
                        <NavLink to="/SigIn"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}>
                            Sign In
                        </NavLink>

                    </button>
                    <button className='px-8 py-3'>
                        <NavLink to='/SignUp'>  Sign Up</NavLink>
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
