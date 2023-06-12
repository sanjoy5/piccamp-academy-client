import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaTimes } from 'react-icons/fa';


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const [classId, setClassId] = useState(null)



    const { data: classes = [], refetch } = useQuery({
        queryKey: ['manageclasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageclasses')
            return res.data
        }
    })

    // console.log(classes, '$$');

    // Handle Approve 

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


    // Handle Deny 

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

    // Handle Feedback 

    const handleFeedback = cls => {
        setClassId(cls?._id)
    }

    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const feedback = form.feedback.value;

        console.log(feedback, classId);

        axiosSecure.patch(`/feedbackclass/${classId}`, { feedback })
            .then(res => {
                console.log(res.data);
                form.reset()
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire(
                        'Done!',
                        `Feedback has been send successfully !`,
                        'success'
                    )
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
                                    <td>
                                        <p className="">Name: {cls.iname}</p>
                                        <p className="text-sm">Email: {cls.email}</p>
                                    </td>
                                    <td>{cls.seats}</td>
                                    <td>${cls.price}</td>

                                    <td className={cls?.status === 'Approve' ? 'text-green-600' : cls?.status === 'Deny' ? 'text-red-600' : 'text-indigo-600'}>{cls?.status}</td>
                                    <td className='space-x-1 space-y-1'>
                                        <button onClick={() => handleApprove(cls)} className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" disabled={cls.status === 'Approve' || cls.status === 'Deny' ? true : false} >Approve</button>
                                        <button onClick={() => handleDeny(cls)} className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" disabled={cls.status === 'Approve' || cls.status === 'Deny' ? true : false} >Deny</button>
                                        <label onClick={() => handleFeedback(cls)} htmlFor="my_modal_6" className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Feedback</label>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>


                </table>

            </div>

            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div className="modal-action absolute right-3 -top-3">
                        <label htmlFor="my_modal_6" className="py-2 px-2 bg-base-200 rounded-full cursor-pointer text-xl"><FaTimes /></label>
                    </div>
                    <h3 className="font-bold text-2xl text-center text-indigo-500 mb-5">Feedback</h3>

                    <form onSubmit={handleForm}>
                        <div className="relative mb-4">
                            <textarea id="feedback" name="feedback" className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <div className="text-center">
                            <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Feedback</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ManageClasses;