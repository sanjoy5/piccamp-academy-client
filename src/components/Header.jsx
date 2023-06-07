import React from 'react';
import ActiveLink from './ActiveLink';
import { AiOutlineBars } from 'react-icons/ai';

const Header = () => {

    const links = <>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/'>Instructor</ActiveLink>
        <ActiveLink to='/'>Classes</ActiveLink>
        <ActiveLink to='/'>Dashboard</ActiveLink>
    </>

    return (
        <>
            <div className="bg-base-100">
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

                    <div className="navbar-end">
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/34GxQTD/1677149097978-01.jpg" className='object-cover object-top' />
                            </div>
                        </label>
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;