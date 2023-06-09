import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['manageclasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageclasses')
            return res.data
        }
    })

    console.log(classes, '$$');

    return (
        <div>
            <Helmet>
                <title>Manage Classes - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Manage</span> Classes</h2>

            <div className="overflow-x-auto px-5 md:px-10 py-5">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            classes?.map((cls) => (
                                <tr key={cls._id}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{cls.cname} </td>
                                    <td>{cls.iname} </td>
                                    <td>{cls.email} </td>
                                    <td>{cls.seats}</td>
                                    <td>${cls.price}</td>
                                    <td>{cls.status}</td>
                                    <td className='space-x-2'>
                                        <button className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Approve</button>
                                        <button className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Deny</button>
                                        <button className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Feedback</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>


                </table>

            </div>

        </div>
    );
};

export default ManageClasses;