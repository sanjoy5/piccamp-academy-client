import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useAuthContext } from '../AuthProvider/AuthProvider';


const EnrolledClasss = () => {
    const { user } = useAuthContext()
    const [axiosSecure] = useAxiosSecure()

    const { data: enrolled = [] } = useQuery({
        queryKey: ['enrolled-history'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolled-history/?email=${user?.email}`)
            return res.data
        }
    })

    console.log(enrolled);

    return (
        <div>
            <Helmet>
                <title>Selected Classes - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Enrolled</span> Classes</h2>

            <div className="overflow-x-auto px-5 md:px-10 py-5">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base'>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Enrolled Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            enrolled?.map((cls, idx) => {
                                const { image, cname, iname, email } = cls.selected;
                                return (
                                    <tr key={cls._id}>
                                        <td>{idx + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{cname} </td>
                                        <td>
                                            {iname}
                                        </td>
                                        <td>{email}</td>
                                        <td>${cls.date}</td>

                                    </tr>
                                )
                            })
                        }


                    </tbody>


                </table>

            </div>


        </div>
    );
};

export default EnrolledClasss;