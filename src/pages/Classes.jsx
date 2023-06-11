import React, { useState } from 'react';
import HeaderBanner from '../components/HeaderBanner';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import useUsers from '../hooks/useUsers';
import Swal from 'sweetalert2'

const Classes = () => {
    const classes = useLoaderData()

    const navigate = useNavigate()
    const { user } = useAuthContext()
    const [allusers] = useUsers()
    const loggedUser = allusers.find(us => us?.email === user?.email)


    const handleSelect = cls => {

        if (user) {
            cls.sname = user?.displayName
            cls.semail = user?.email
            cls.simage = user?.photoURL

            fetch('http://127.0.0.1:5000/selectedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cls)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Selected Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        } else {
            Swal.fire({
                title: 'Oppps!',
                text: "Log in before selecting the course!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                } else {
                    setDisabled(true)
                }
            })
        }

    }

    return (
        <div>
            <HeaderBanner title='All Classes'></HeaderBanner>

            <div className="flex flex-wrap pt-16 pb-10">
                {
                    classes?.map((cls, idx) => (
                        <div key={idx} className="p-4 md:w-1/2 lg:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={cls.image} />
                            </div>
                            <h2 className="text-xl font-medium title-font mt-5">{cls.cname}</h2>
                            <p className="text-base font-medium leading-relaxed mt-2">
                                Instructor : {cls.iname}
                            </p>
                            <p className="text-base leading-relaxed mt-1">
                                Email : {cls.email}
                            </p>
                            <div className="flex gap-3 items-center">
                                <div className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                    <div className="h-2 w-2 bg-indigo-500 rounded"></div>  Price : ${cls.price}
                                </div>
                                <div className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                    <div className="h-2 w-2 bg-indigo-500 rounded"></div> Available Seats : {cls.seats}
                                </div>

                            </div>
                            {
                                cls?.seats === 0 || loggedUser?.role === 'admin' || loggedUser?.role === 'instructor' ?
                                    <button className="btn bg-indigo-500 text-white hover:bg-indigo-600 mt-3" disabled>Select</button>
                                    : <button onClick={() => handleSelect(cls)} className="btn bg-indigo-500 text-white hover:bg-indigo-600 mt-3">Select</button>
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Classes;