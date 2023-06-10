import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const { user, loading } = useAuthContext()
    const [axiosSecure] = useAxiosSecure()


    const { data: classes = [], refetch } = useQuery({
        queryKey: ['instructorclasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorclasses?email=${user?.email}`)
            return res.data
        }
    })




    return (
        <div>
            <Helmet>
                <title>My Classes - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Instructor:</span> {user?.displayName}</h2>


            <div className="overflow-x-auto px-5 md:px-14 py-5">
                {

                    classes?.length === 0 && loading ? <h2 className="text-2xl font-semibold p-5 mx-auto text-center">You have no classes yet</h2> :
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-base'>
                                    <th>SN</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Seats</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Enrolled</th>
                                    <th>Feedback</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    classes?.map((cls, index) => (
                                        <tr key={cls._id}>
                                            <td>{index + 1}</td>
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
                                            <td>{cls.seats}</td>
                                            <td>${cls.price}</td>
                                            <td>{cls.status}</td>
                                            <td>{cls.enrolled}</td>
                                            <td>{cls.feedback}</td>
                                            <td>
                                                <Link to={`/dashboard/updateclasses/${cls._id}`} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" >Update</Link>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>


                        </table>
                }
            </div>

        </div>
    );
};

export default MyClasses;