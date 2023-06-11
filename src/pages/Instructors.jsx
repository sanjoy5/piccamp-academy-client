import React from 'react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import HeaderBanner from '../components/HeaderBanner';

const Instructors = () => {
    const instructors = useLoaderData()
    return (
        <div className=''>

            {/* TODO: Banner  */}

            <HeaderBanner title='Instructors' />

            <div className="flex flex-wrap py-16">
                {
                    instructors?.map((instructor, idx) => {
                        const { name, email, photo, role
                        } = instructor;
                        return (
                            <div key={idx} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex flex-col sm:flex-row items-center gap-4 border-base-200 border p-4 rounded-lg">
                                    <div className="w-1/3">
                                        <img alt="team" className="max-w-[100px] max-h-[100px] bg-gray-100 object-cover object-center rounded-full" src={photo} />
                                    </div>
                                    <div className="w-2/3 text-center sm:text-left">
                                        <h2 className=" title-font font-medium">{name}</h2>
                                        <p className="text-gray-500 flex items-center gap-2 mt-1 justify-center sm:justify-start"><AiOutlineUser /> {role}</p>
                                        <p className="text-gray-500 flex items-center gap-2 mt-1 justify-center sm:justify-start"><AiOutlineMail /> {email}</p>
                                        <div className="text-gray-500 flex items-center gap-3 cursor-pointer mt-2 text-sm justify-center sm:justify-start">
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

export default Instructors;