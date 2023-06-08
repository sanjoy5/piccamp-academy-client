import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, googleSignIn } = useAuthContext()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    };


    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setError('')
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div>
            <Helmet>
                <title>Login - PicCamp Academy</title>
            </Helmet>
            <section class="flex flex-col items-center justify-center mt-10 pb-10">


                <div className="w-full flex items-center justify-center">
                    <div class="bg-base-200 flex  shadow-lg w-full md:w-10/12  items-center">

                        <div class="w-full md:w-1/2 py-10 px-8 md:px-16">
                            <h2 class="font-bold text-2xl md:text-3xl text-indigo-500">Welcome Back!</h2>
                            <p class=" mt-3 text-indigo-500">Login to Continue</p>
                            {
                                error && <label className="label">
                                    <p className="mt-2 text-red-500"><strong>Error</strong>: {error}</p>
                                </label>
                            }

                            <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col gap-4">
                                <input class="p-2 mt-8 rounded-xl border border-gray-300 outline-none bg-transparent" type="email" {...register("email", { required: true })} placeholder="Email" />

                                {errors.email && <span className='text-red-500 mt-1'>Email field is required</span>}

                                <input class="p-2 rounded-xl border border-gray-300  outline-none bg-transparent" type="password" {...register("password", { required: true })} placeholder="Password" />
                                {errors.password && <span className='text-red-500 mt-1'>Password field is required</span>}

                                <button type='submit' class="bg-indigo-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                            </form>

                            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                                <hr class="border-gray-400" />
                                <p class="text-center text-sm">OR</p>
                                <hr class="border-gray-400" />
                            </div>

                            <button onClick={handleLoginWithGoogle} class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 text-indigo-500">
                                <FcGoogle className='mr-3 text-3xl' />
                                Login with Google
                            </button>


                            <div class="mt-3 flex justify-between items-center text-indigo-500 md:hidden">
                                <p>New Here?</p>
                                <Link to='/signup' class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</Link>

                            </div>
                        </div>


                        <div class="md:block hidden w-1/2 relative ">
                            <div className="absolute flex flex-col px-5 text-center items-center justify-center w-full h-full z-10 hero-overlay bg-opacity-60 ">
                                <h2 className="text-2xl md:text-4xl font-bold text-white">New Here?</h2>
                                <p className="text-white my-4 text-lg">Sign Up and Discover a great <br className='hidden md:block' /> amount of new opportunities</p>
                                <Link to='/signup' class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Sign Up</Link>
                            </div>

                            <img class=" max-h-[600px] object-cover w-full z-0" src="https://i.ibb.co/NWYCft9/zarak-khan-v263cl-VYq-4-unsplash.jpg" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;