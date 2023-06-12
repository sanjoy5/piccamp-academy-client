import React, { useState } from 'react';
import { useAuthContext } from '../../AuthProvider/AuthProvider';
import useUsers from '../../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const PopularClasses = ({ popularClassesData }) => {
    // console.log(popularClassesData);

    const navigate = useNavigate()

    const { user } = useAuthContext()
    const [allusers] = useUsers()
    const loggedUser = allusers.find(us => us?.email === user?.email)
    // console.log(loggedUser, 'Logged User')
    const token = localStorage.getItem('token')

    const handleSelect = data => {
        if (user) {
            data.clsId = data?._id
            data.sname = user?.displayName
            data.semail = user?.email
            data.simage = user?.photoURL

            console.log('data : ', data);

            fetch('http://127.0.0.1:5000/selectedclass', {
                method: 'POST',
                headers: {
                    authorization: `bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
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

        }

    }


    return (
        <div className='pt-16 md:pt-24 pb-10 px-2'>
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Mastering the Shot</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Popular Classes</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a transformative photography journey. Master technical skills, explore artistic expressions, and discover the power of visual storytelling. Unleash your creativity and join our inspiring photography classes.</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

                {
                    popularClassesData?.map((data, idx) => (

                        <div key={idx} className={data?.seats === 0 ? "bg-red-100" : ""}>
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={data.image} />
                            </div>
                            <div className="px-5 pb-5">
                                <h2 className="text-xl font-medium title-font mt-5">{data.cname}</h2>
                                <p className="text-base font-medium leading-relaxed mt-2">
                                    Instructor : {data.iname}
                                </p>
                                <p className="text-base leading-relaxed mt-1">
                                    Email : {data.email}
                                </p>
                                <div className="flex gap-3 items-center">
                                    <div className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                        <div className="h-2 w-2 bg-indigo-500 rounded"></div>  Price : ${data.price}
                                    </div>
                                    <div className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                        <div className="h-2 w-2 bg-indigo-500 rounded"></div>  Available Seats : {data.seats}
                                    </div>

                                </div>

                                {
                                    !user || data?.seats === 0 || loggedUser?.role === 'admin' || loggedUser?.role === 'instructor' ?
                                        <button className="btn bg-indigo-500 text-white hover:bg-indigo-600 mt-3" disabled>{user ? 'Select' : 'Login to Select'}</button>
                                        : <button onClick={() => handleSelect(data)} className="btn bg-indigo-500 text-white hover:bg-indigo-600 mt-3">Seletct</button>
                                }
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    );
};

export default PopularClasses;