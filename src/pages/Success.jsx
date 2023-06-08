import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center '>
            <div className="px-5 w-full md:w-8/12  md:px-14 py-6 md:py-16 rounded bg-base-200 shadow text-center mx-4">
                <img src="https://i.ibb.co/DkzzSrZ/output-onlinegiftools.gif" className='w-[300px] mx-auto' alt="" />
                <p className="text-lg text-center mb-3">Congratulations! Welcome to PicCamp Academy, where your creative journey begins. <br className="hidden md:block" /> Get ready to explore and create amazing memories!</p>
                <Link to='/' className="btn btn-ghost">Go to Home Page</Link>
            </div>
        </div>
    );
};

export default Success;