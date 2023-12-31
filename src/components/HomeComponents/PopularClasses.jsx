import React, { useState } from 'react';
import { useAuthContext } from '../../AuthProvider/AuthProvider';
import useUsers from '../../hooks/useUsers';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useSelectedClasses from '../../hooks/useSelectedClasses';
import { motion } from "framer-motion";


const PopularClasses = ({ popularClassesData }) => {

    const { user } = useAuthContext()
    const [selectedClasses, refetch] = useSelectedClasses()
    const [allusers] = useUsers()
    const loggedUser = allusers.find(us => us?.email === user?.email)
    const [axiosSecure] = useAxiosSecure()



    const handleSelect = data => {
        // console.log('Data : ', data);

        const existsClass = selectedClasses.find(cls => cls?.cId === data?._id)
        if (existsClass) {
            refetch()
            Swal.fire({
                position: 'top-end',
                title: 'Allready Selected',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }

        const { _id, cname, email, enrolled, image, iname, price, seats } = data;
        const selectCls = { cId: _id, cname, email, enrolled, image, iname, price, seats, sname: user?.displayName, semail: user?.email }


        axiosSecure.post('/selectedclass', selectCls)
            .then(res => {
                if (res.data.insertedId) {
                    refetch()
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


    return (
        <div className='pt-16 md:pt-24 pb-10 px-2'>
            <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Mastering the Shot</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Popular Classes</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a transformative photography journey. Master technical skills, explore artistic expressions, and discover the power of visual storytelling. Unleash your creativity and join our inspiring photography classes.</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </motion.div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

                {
                    popularClassesData?.map((data, idx) => (

                        <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} key={idx} className={data?.seats === 0 ? "bg-red-100" : ""}>
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

                                    {
                                        data?.enrolled && <div className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                            <div className="h-2 w-2 bg-indigo-500 rounded"></div>  Enrolled : {data.enrolled}
                                        </div>
                                    }

                                </div>
                                <div className="text-base leading-relaxed mt-1 flex items-center gap-2">
                                    <div className="h-2 w-2 bg-indigo-500 rounded"></div>  Available Seats : {data.seats}
                                </div>

                                {
                                    !user || data?.seats === 0 || loggedUser?.role === 'admin' || loggedUser?.role === 'instructor' ?
                                        <button className="btn bg-indigo-500 text-white hover:bg-indigo-600 mt-3" disabled>{user ? 'Select' : 'Login to Select'}</button>
                                        : <button onClick={() => handleSelect(data)} className="btn bg-indigo-500 text-white hover:bg-indigo-600 mt-3">Seletct</button>
                                }
                            </div>
                        </motion.div>
                    ))
                }

            </div>


        </div>
    );
};

export default PopularClasses;