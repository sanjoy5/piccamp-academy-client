import React from 'react';
import HeaderBanner from '../components/HeaderBanner';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import useUsers from '../hooks/useUsers';
import Swal from 'sweetalert2'
import useAxiosSecure from '../hooks/useAxiosSecure';
import useClasses from '../hooks/useClasses';
import useSelectedClasses from '../hooks/useSelectedClasses';
import { motion } from "framer-motion";

const Classes = () => {

    const [classes] = useClasses()
    const [selectedClasses, refetch] = useSelectedClasses()
    const { user } = useAuthContext()
    const [allusers] = useUsers()
    const loggedUser = allusers.find(us => us?.email === user?.email)

    const [axiosSecure] = useAxiosSecure()

    const handleSelect = data => {

        const existsClass = selectedClasses.find(cls => cls?.cId === data?._id)
        if (existsClass) {
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
        <div>
            <HeaderBanner title='All Classes'></HeaderBanner>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-16 pb-16">
                {
                    classes?.map(data => {
                        return (
                            <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} key={data._id} className={data?.seats === 0 ? "bg-red-100" : ""}>
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
                                            <div className="h-2 w-2 bg-indigo-500 rounded"></div> Enrolled : {data.enrolled}
                                        </div>
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
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Classes;