import React from 'react';
import HeaderBanner from '../components/HeaderBanner';
import { useLoaderData } from 'react-router-dom';

const Classes = () => {
    const classes = useLoaderData()
    return (
        <div>
            <HeaderBanner title='All Classes'></HeaderBanner>

            <div className="flex flex-wrap pt-16 pb-10">
                {
                    classes?.map(data => (
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
                                    <div className="h-2 w-2 bg-indigo-500 rounded"></div> Available Seats : {data.seats}
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

export default Classes;