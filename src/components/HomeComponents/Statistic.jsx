import React from 'react';

const Statistic = () => {
    return (
        <div className='pt-16 md:pt-24 pb-10 px-2'>
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Visual Insights</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Our Statistics</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unveiling our photography website's vibrant statistics: Thriving student community, diverse classes, expert instructors, and a plethora of awards embellishing our journey of excellence. Join us and be inspired!</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </div>
        </div>
    );
};

export default Statistic;