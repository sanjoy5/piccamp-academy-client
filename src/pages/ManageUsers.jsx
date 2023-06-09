import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import useAxiosSecure from '../hooks/useAxiosSecure';


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'],
        async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        })


    // Make Admin Function 
    const handleMakeAdmin = user => {

        Swal.fire({
            title: 'Are you sure?',
            text: `You want to give super power to '${user.name}' as a Admin !`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin !'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://127.0.0.1:5000/users/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch()
                            Swal.fire(
                                'Done!',
                                `${user.name} is an admin now !`,
                                'success'
                            )

                        }
                    })
            }
        })

    }


    // Make Instructor Function 
    const handleMakeInstructor = user => {

        Swal.fire({
            title: 'Are you sure?',
            text: `You want to give permission to '${user.name}' as a Instructor !`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Instructor !'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://127.0.0.1:5000/users/instructor/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch()

                            Swal.fire(
                                'Done!',
                                `${user.name} is an instructor now !`,
                                'success'
                            )
                        }
                    })

            }
        })
    }

    // Delete User 
    const handleUserDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete '${user.name}'`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/deleteuser/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `'${user?.name} has been deleted successfully'`,
                                'success'
                            )
                        }
                    })

            }
        })
    }


    return (
        <div className=''>
            <Helmet>
                <title>Manage User - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Manage</span> User</h2>

            <div className="overflow-x-auto px-5 md:px-14 py-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base'>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.name} </td>
                                    <td>{user.email}</td>
                                    <td>{user?.email === 'sanjoysarker157@gmail.com' ? 'Super Admin' : user?.role === 'admin' ? 'Admin' : user?.role === 'instructor' ? 'Instructor' : 'Student'}</td>
                                    <td>
                                        <button onClick={() => handleMakeAdmin(user)} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" disabled={user?.role === 'admin' || user?.email === 'sanjoysarker157@gmail.com' ? true : false}><FaUserShield className='text-xl' /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleMakeInstructor(user)} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" disabled={user.role === 'instructor' || user?.email === 'sanjoysarker157@gmail.com' ? true : false}><FaUserGraduate className='text-xl' /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleUserDelete(user)} className="btn bg-red-500 hover:bg-red-600 text-white" disabled={user?.email === 'sanjoysarker157@gmail.com' ? true : false}><FaTrashAlt className='text-xl' /></button>
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

export default ManageUsers;