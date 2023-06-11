import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const PopularClasses = ({ popularClassesData }) => {
    console.log(popularClassesData);
    return (
        <div className='pt-16 md:pt-24 pb-10 px-2'>
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Mastering the Shot</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Popular Classes</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a transformative photography journey. Master technical skills, explore artistic expressions, and discover the power of visual storytelling. Unleash your creativity and join our inspiring photography classes.</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </div>


            <div className="flex flex-wrap">

                {
                    popularClassesData?.map(data => (

                        <div className="p-4 md:w-1/2 lg:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={data.image} />
                            </div>
                            <h2 className="text-xl font-medium title-font mt-5">{data.cname}</h2>
                            <p className="text-base font-medium leading-relaxed mt-2">
                                Instructor : {data.iname}
                            </p>
                            <p className="text-base leading-relaxed mt-1">
                                Email : {data.email}
                            </p>
                            <div className="flex gap-3 items-center">
                                <p className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                    <div className="h-2 w-2 bg-indigo-500 rounded"></div>  Price : ${data.price}
                                </p>
                                <p className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                    <div className="h-2 w-2 bg-indigo-500 rounded"></div>  Available Seats : {data.seats}
                                </p>

                            </div>
                            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600 mt-3">Select</button>
                        </div>
                    ))
                }

            </div>


        </div>
    );
};

export default PopularClasses;