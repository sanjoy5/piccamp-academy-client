import React, { useEffect, useState } from 'react';
import ActiveLink from './ActiveLink';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';



const Header = () => {
    const { user, logOut } = useAuthContext()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [isStudent] = useStudent()

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const links = <>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/instructors'>Instructors</ActiveLink>
        <ActiveLink to='/classes'>Classes</ActiveLink>

        {
            isAdmin && <ActiveLink to='/dashboard/manageusers'>Dashboard</ActiveLink>
        }
        {
            isInstructor && <ActiveLink to='/dashboard/myclasses'>Dashboard</ActiveLink>
        }
        {
            isStudent && <ActiveLink to={`dashboard/selectedclasses`}>Dashboard</ActiveLink>
        }

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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-5 text-base shadow z-50 bg-base-100 rounded-box w-52 space-y-2">
                                {links}
                            </ul>
                        </div>
                        <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center ">
                            <img src="https://i.ibb.co/CQVKS6y/dslr-camera.png" className='h-10 w-10' alt="" />
                            <span className="ml-3 text-2xl font-semibold hidden sm:block">PicCamp</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
                            {links}
                        </ul>
                    </div>

                    <div className="navbar-end space-x-3">
                        {
                            user ? <>
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} className='object-cover object-top' />
                                    </div>
                                </label>
                                <button onClick={handleLogout} className='py-2 px-4 rounded text-white text-lg bg-indigo-500 hover:bg-indigo-600'>Logout</button>
                            </> : <>
                                <Link to='/login' className='py-2 px-4 rounded text-white text-lg bg-indigo-500 hover:bg-indigo-600'>Login</Link>
                            </>
                        }


                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;