import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
// console.log(img_hosting_token);

const AddClasses = () => {
    const { user } = useAuthContext()
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    const { cname, iname, email, seats, price } = data
                    const newClass = { cname, image: imgURL, iname, email, seats: parseInt(seats), price: parseFloat(price), enrolled: 0, status: 'Pending', feedback: 'No feedback', iimage: user?.photoURL }
                    // console.log(newClass);
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };


    return (
        <div>
            <Helmet>
                <title>Add a Class - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Add</span> a Class</h2>
            <div className="px-5 md:px-14 py-10 mx-auto flex">
                <form onSubmit={handleSubmit(onSubmit)} className=" lg:3/4 xl:w-1/2 rounded-lg p-8 border flex flex-col md:mx-auto w-full z-10 shadow-lg">


                    <div className="">
                        <label htmlFor="cname" className="leading-7  ">Class Name<span className="text-indigo-500 text-lg"> *</span></label>
                        <input type="text" id="cname" {...register("cname", { required: true })} className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.cname && <p className='text-red-500 mt-1'>Class Name field is required</p>}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="image" className="leading-7  ">Class Image<span className="text-indigo-500 text-lg"> *</span></label>
                        <input type="file" id='image' {...register("image", { required: true })} className="file-input file-input-bordered w-full rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.image && <p className='text-red-500 mt-1'>Class Image field is required</p>}
                    </div>



                    <div className="flex items-center flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="iname" className="leading-7  ">Instructor Name<span className="text-indigo-500 text-lg"> *</span></label>
                            <input type="text" id="iname" {...register("iname", { required: true })} defaultValue={user?.displayName} className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly />
                        </div>

                        <div className=" w-full md:w-1/2">
                            <label htmlFor="email" className="leading-7  ">Instructor Email<span className="text-indigo-500 text-lg"> *</span></label>
                            <input type="email" id="email" {...register("email", { required: true })} defaultValue={user?.email} className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly />
                        </div>
                    </div>

                    {errors.iname && <p className='text-red-500 mt-1'>Instructor Name field is required</p>}
                    {errors.email && <p className='text-red-500 mt-1'>Instructor Email field is required</p>}



                    <div className="flex items-center flex-col md:flex-row gap-4 mt-4">
                        <div className=" w-full md:w-1/2">
                            <label htmlFor="seats" className="leading-7  ">Available Seats<span className="text-indigo-500 text-lg"> *</span></label>
                            <input type="number" id="seats" {...register("seats", { required: true })} className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <label htmlFor="price" className="leading-7  ">Price<span className="text-indigo-500 text-lg"> *</span></label>
                            <input type="number" id="price" {...register("price", { required: true })} className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                    </div>

                    {errors.seats && <p className='text-red-500 mt-1'>Available Seats field is required</p>}
                    {errors.price && <p className='text-red-500 mt-1'>Price field is required</p>}




                    <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5">Add Class</button>

                </form>
            </div>

        </div>
    );
};

export default AddClasses;