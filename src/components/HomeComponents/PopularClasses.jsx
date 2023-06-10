import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const PopularClasses = ({ popularClassesData }) => {
    console.log(popularClassesData);
    return (
        <div className='pt-16 md:pt-24 pb-10'>
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Mastering the Shot</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">Popular Classes</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a transformative photography journey. Master technical skills, explore artistic expressions, and discover the power of visual storytelling. Unleash your creativity and join our inspiring photography classes.</p>
                <div class="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </div>


            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

                {
                    popularClassesData?.map(data => (

                        <div class="p-4 md:w-1/2 lg:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src={data.image} />
                            </div>
                            <h2 class="text-xl font-medium title-font mt-5">{data.cname}</h2>
                            <p class="text-base font-medium leading-relaxed mt-2">
                                Instructor : {data.iname}
                            </p>
                            <p class="text-base leading-relaxed mt-1">
                                Email : {data.email}
                            </p>
                            <div className="flex gap-3 items-center">
                                <p class="text-base leading-relaxed mt-1 flex items-center gap-2">
                                    <div class="h-2 w-2 bg-indigo-500 rounded"></div>  Price : ${data.price}
                                </p>
                                <p class="text-base leading-relaxed mt-1 flex items-center gap-2">
                                    <div class="h-2 w-2 bg-indigo-500 rounded"></div>  Seats : {data.seats}
                                </p>

                            </div>
                            <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    ))
                }

            </div>


        </div>
    );
};

export default PopularClasses;