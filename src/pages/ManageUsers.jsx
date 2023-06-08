import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'],
        async () => {
            const res = await fetch('http://127.0.0.1:5000/users')
            return res.json()
        })


    // Make Admin Function 
    const handleMakeAdmin = user => {
        fetch(`http://127.0.0.1:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    // Make Instructor Function 
    const handleMakeInstructor = user => {
        fetch(`http://127.0.0.1:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className=''>
            <Helmet>
                <title>Manage User - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5"><span className="text-indigo-500">Manage</span> User</h2>

            <div className="overflow-x-auto">
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
                                    <td>{user.role === 'admin' ? 'Admin' : user.role === 'instructor' ? 'Instructor' : 'Student'}</td>
                                    <td>
                                        <button onClick={() => handleMakeAdmin(user)} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" disabled={user.role === 'admin' ? true : false}><FaUserShield className='text-xl' /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleMakeInstructor(user)} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" disabled={user.role === 'instructor' ? true : false}><FaUserGraduate className='text-xl' /></button>
                                    </td>
                                    <td>
                                        <button className="btn bg-red-500 hover:bg-red-600 text-white"><FaTrashAlt className='text-xl' /></button>
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