import React, { useEffect, useState } from 'react';
import ActiveLink from './ActiveLink';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Header = () => {


    const links = <>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/instructors'>Instructors</ActiveLink>
        <ActiveLink to='/classes'>Classes</ActiveLink>
        <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
    </>

    return (
        <>
            <div className=" py-3">
                <div className="navbar max-w-7xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className=" lg:hidden">
                                <AiOutlineBars className='text-2xl mr-3' />
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-5 text-base shadow bg-base-100 rounded-box w-52 space-y-2">
                                {links}
                            </ul>
                        </div>
                        <a className=" text-2xl font-semibold">PicCamp</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
                            {links}
                        </ul>
                    </div>

                    <div className="navbar-end space-x-3">
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/34GxQTD/1677149097978-01.jpg" className='object-cover object-top' />
                            </div>
                        </label>

                        <Link to='/login' className='py-2 px-4 rounded text-white text-lg bg-indigo-500 hover:bg-indigo-600'>Login</Link>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;