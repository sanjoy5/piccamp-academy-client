import React from 'react';
import { FaBars, FaHome, FaUserTie, FaUserCog, FaBook, FaRegGem } from 'react-icons/fa';
import { MdOutlinePostAdd, MdChecklist } from 'react-icons/md';
import { FiCheckSquare } from 'react-icons/fi';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ToggleMode from '../components/ToggleMode';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [isStudent] = useStudent()


    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <ToggleMode />
                    <label htmlFor="my-drawer-2" className="btn text-white bg-indigo-500 hover:bg-indigo-600 drawer-button lg:hidden m-5"><FaBars className='text-xl' /></label>
                    <div className="w-full pb-6 md:pb-10">
                        <Outlet />
                    </div>

                </div>
                <div className="drawer-side bg-base-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">
                        {/* Sidebar content here */}
                        <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center mb-10 ">
                            <img src="https://i.ibb.co/CQVKS6y/dslr-camera.png" className='h-10 w-10' alt="" />
                            <span className="ml-3 text-2xl font-semibold">PicCamp</span>
                        </Link>

                        {
                            isAdmin && <>
                                <li><NavLink className='text-lg' to='/dashboard/manageusers'><FaUserCog className='text-xl' /> Manage Users</NavLink></li>
                                <li><NavLink className='text-lg' to='/dashboard/manageclasses'><FaBook className='text-xl' /> Manage Classes</NavLink></li>
                            </>
                        }
                        {
                            isInstructor && <>
                                <li><NavLink className='text-lg' to='/dashboard/myclasses'><FaUserCog className='text-xl' /> My Classes</NavLink></li>
                                <li><NavLink className='text-lg' to='/dashboard/addclass'><MdOutlinePostAdd className='text-2xl' />Add a Class</NavLink></li>

                            </>}
                        {
                            isStudent && <>
                                <li><NavLink className='text-lg' to='/dashboard/selectedclasses'><FiCheckSquare className='text-xl' />Selected Classes</NavLink></li>
                                <li><NavLink className='text-lg' to='/dashboard/enrolledclasses'><FaRegGem className='text-xl' />Enrolled Classes</NavLink></li>
                            </>

                        }



                        <div className="divider"></div>

                        <li><NavLink className='text-lg' to='/'><FaHome className='text-xl' /> Home</NavLink></li>
                        <li><NavLink className='text-lg' to='/classes'><FaBars className='text-xl' /> Classes</NavLink></li>
                        <li><NavLink className='text-lg' to='/insttructors'><FaUserTie className='text-xl' /> Instructors</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;