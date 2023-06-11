import React from 'react';

const Statistic = () => {
    return (
        <div className='pt-16 md:pt-24 px-2'>
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Visual Insights</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Our Statistics</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unveiling our photography website's vibrant statistics: Thriving student community, diverse classes, expert instructors, and a plethora of awards embellishing our journey of excellence. Join us and be inspired!</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </div>

            <div className="flex flex-wrap text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-base-200 px-4 py-6 rounded-lg">
                        <img src="https://i.ibb.co/r0yKfh1/training.png" alt="" className="w-12 h-12 mb-3 mx-auto" />
                        <h2 className="title-font font-medium text-3xl ">40</h2>
                        <p className="leading-relaxed">Classes</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-base-200 px-4 py-6 rounded-lg">
                        <img src="https://i.ibb.co/7nqht6x/lecturer.png" alt="" className="w-12 h-12 mb-3 mx-auto" />
                        <h2 className="title-font font-medium text-3xl ">25</h2>
                        <p className="leading-relaxed">Instructors</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-base-200 px-4 py-6 rounded-lg">
                        <img src="https://i.ibb.co/frfDM5x/read.png" alt="" className="w-12 h-12 mb-3 mx-auto" />
                        <h2 className="title-font font-medium text-3xl ">5.5k</h2>
                        <p className="leading-relaxed">Students</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-base-200 px-4 py-6 rounded-lg">
                        <img src="https://i.ibb.co/Mh1xkRG/winner.png" alt="" className="w-12 h-12 mb-3 mx-auto" />
                        <h2 className="title-font font-medium text-3xl ">46</h2>
                        <p className="leading-relaxed">Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;