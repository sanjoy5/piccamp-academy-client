import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['manageclasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageclasses')
            return res.data
        }
    })

    // console.log(classes, '$$');

    const handleApprove = cls => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to Approve ${cls?.cname}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approved !'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/approveclass/${cls._id}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()

                            Swal.fire(
                                'Done!',
                                `${cls.cname} has been approved succeessfully !`,
                                'success'
                            )
                        }
                    })

            }
        })
    }

    const handleDeny = cls => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to Deny ${cls?.cname}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deny !'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/denyclass/${cls._id}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()

                            Swal.fire(
                                'Done!',
                                `${cls.cname} has been Deny succeessfully !`,
                                'success'
                            )
                        }
                    })

            }
        })
    }

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

                                    <td className={cls?.status === 'Approve' ? 'text-green-600' : cls?.status === 'Deny' ? 'text-red-600' : 'text-indigo-600'}>{cls?.status}</td>
                                    <td className='space-x-2'>
                                        <button onClick={() => handleApprove(cls)} className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" disabled={cls.status === 'Approve' || cls.status === 'Deny' ? true : false} >Approve</button>
                                        <button onClick={() => handleDeny(cls)} className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" disabled={cls.status === 'Approve' || cls.status === 'Deny' ? true : false} >Deny</button>
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