
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useSelectedClasses from '../hooks/useSelectedClasses';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';


const SelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClasses()
    const token = localStorage.getItem('token')

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete it!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://127.0.0.1:5000/deleteSelectedclass/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${token}`
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Selected Class has been deleted successfully',
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
                <title>Selected Classes - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Selected</span> Classes</h2>


            <div className="overflow-x-auto px-5 md:px-10 py-5">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base'>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selectedClasses?.map((cls, idx) => (
                                <tr key={cls._id}>
                                    <td>{idx + 1}</td>
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
                                    <td>
                                        <p className="">Name: {cls.iname}</p>
                                        <p className="text-sm">Email: {cls.email}</p>
                                    </td>
                                    <td>{cls.seats}</td>
                                    <td>${cls.price}</td>

                                    <td>
                                        <Link to={`/dashboard/payment/${cls._id}`} className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Payment</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(cls?._id)} className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Delete</button>
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

export default SelectedClasses;