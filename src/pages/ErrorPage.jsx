import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="p-10 md:p-20 rounded">
                <img src="https://i.ibb.co/5vgH4Dm/404-error-illustration-maintenance-system-technology-showing-404-internet-connection-problem-message.png" className='w-full max-w-[400px] mx-auto' alt="" />

                <h2 className="text-3xl md:text-5xl mt-4 md:mt-6 font-bold text-center">Opps! Page Not Found!</h2>
                <div className="text-center">
                    <Link to='/' className='btn bg-blue-700 text-white text-lg mt-4 md:mt-8 hover:bg-blue-800'>Back to Home</Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;