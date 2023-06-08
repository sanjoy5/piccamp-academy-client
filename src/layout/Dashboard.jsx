import React from 'react';
import { FaBars, FaHome, FaUserTie, FaUserCog } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ToggleMode from '../components/ToggleMode';

const Dashboard = () => {

    // TODO:  
    const isAdmin = true

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <ToggleMode />
                    <label htmlFor="my-drawer-2" className="btn text-white bg-indigo-500 hover:bg-indigo-600 drawer-button lg:hidden m-5"><FaBars className='text-xl' /></label>
                    <div className="w-full px-5 md:px-14 py-8 md:py-16">
                        <Outlet />
                    </div>

                </div>
                <div className="drawer-side bg-base-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">
                        {/* Sidebar content here */}
                        <Link to='' className='md:px-5 md:py-5 text-2xl font-bold'><span className="text-indigo-500">PicCamp</span> Academy</Link>

                        {
                            isAdmin && <>
                                <li><NavLink className='text-lg' to='/'><FaHome className='text-xl' />User Home</NavLink></li>
                                <li><NavLink className='text-lg' to='/dashboard/manageusers'><FaUserCog className='text-xl' /> Manage User</NavLink></li>
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