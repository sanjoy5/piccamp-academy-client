import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Login = () => {
    const { signIn, googleSignIn } = useAuthContext()
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

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
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    };


    const handleLoginWithGoogle = () => {

        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, role: 'student' }
                fetch('http://127.0.0.1:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
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
            <section className="flex flex-col items-center justify-center mt-10 pb-10">


                <div className="w-full flex items-center justify-center">
                    <div className="bg-base-200 flex  shadow-lg w-full md:w-10/12  items-center">

                        <div className="w-full md:w-1/2 py-10 px-8 md:px-16">
                            <h2 className="font-bold text-2xl md:text-3xl text-indigo-500">Welcome Back!</h2>
                            <p className=" mt-3 text-indigo-500">Login to Continue</p>
                            {
                                error && <label className="label">
                                    <p className="mt-2 text-red-500"><strong>Error</strong>: {error}</p>
                                </label>
                            }

                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                <input className="p-2 mt-8 rounded-xl border border-gray-400 outline-none bg-transparent" type="email" {...register("email", { required: true })} placeholder="Email" />

                                {errors.email && <span className='text-red-500 mt-1'>Email field is required</span>}

                                <div className="relative">
                                    <input className="p-2 rounded-xl border border-gray-400 outline-none bg-transparent  w-full" type={show ? 'text' : 'password'} {...register("password", { required: true })} placeholder="Password" />

                                    {
                                        show ? <BsEyeSlash onClick={() => setShow(!show)} className=" absolute top-1/2 right-3 -translate-y-1/2 text-lg cursor-pointer" />
                                            : <BsEye onClick={() => setShow(!show)} className=" absolute top-1/2 right-3 -translate-y-1/2 text-lg cursor-pointer" />
                                    }
                                </div>
                                {errors.password && <span className='text-red-500 mt-1'>Password field is required</span>}


                                <button type='submit' className="bg-indigo-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                            </form>

                            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                                <hr className="border-gray-400" />
                                <p className="text-center text-sm">OR</p>
                                <hr className="border-gray-400" />
                            </div>

                            <button onClick={handleLoginWithGoogle} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 text-indigo-500">
                                <FcGoogle className='mr-3 text-3xl' />
                                Login with Google
                            </button>


                            <div className="mt-3 flex justify-between items-center text-indigo-500 md:hidden">
                                <p>New Here?</p>
                                <Link to='/signup' className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</Link>

                            </div>
                        </div>


                        <div className="md:block hidden w-1/2 relative ">
                            <div className="absolute flex flex-col px-5 text-center items-center justify-center w-full h-full z-10 hero-overlay bg-opacity-60 ">
                                <h2 className="text-2xl md:text-4xl font-bold text-white">New Here?</h2>
                                <p className="text-white my-4 text-lg">Sign Up and Discover a great <br className='hidden md:block' /> amount of new opportunities</p>
                                <Link to='/signup' className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Sign Up</Link>
                            </div>

                            <img className=" max-h-[600px] object-cover w-full z-0" src="https://i.ibb.co/NWYCft9/zarak-khan-v263cl-VYq-4-unsplash.jpg" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;