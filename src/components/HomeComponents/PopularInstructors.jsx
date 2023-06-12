import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://pic-camp-academy-server.vercel.app/popularInstructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])


    return (
        <div className='pt-16 md:pt-20 px-2'>

            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Famous Educators</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Popular Instructors</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Discover the expertise and guidance of our renowned photography instructors. Learn from experienced professionals who will inspire and elevate your skills in capturing captivating moments and creating stunning visual artistry</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </div>


            <div className="flex flex-wrap">
                {
                    instructors?.map((instructor, idx) => {
                        const { iimage, iname, email, studentCount
                        } = instructor;
                        return (
                            <div key={idx} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex flex-col gap-3 sm:gap-0 sm:flex-row items-center border-base-200 border p-4 rounded-lg">
                                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={iimage} />
                                    <div className="flex-grow text-center sm:text-start">
                                        <h2 className=" title-font font-medium">{iname}</h2>
                                        <p className="text-gray-500 flex items-center justify-center sm:justify-start gap-2 mt-1"><AiOutlineMail /> {email}</p>
                                        <p className="text-gray-500 flex items-center justify-center sm:justify-start gap-2 mt-1"><AiOutlineUser /> Total Student: {studentCount}</p>
                                        <div className="text-gray-500 flex items-center justify-center sm:justify-start gap-3 cursor-pointer mt-2 text-sm">
                                            <FaFacebookF />
                                            <FaTwitter />
                                            <FaLinkedinIn />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    );
};

export default PopularInstructors;