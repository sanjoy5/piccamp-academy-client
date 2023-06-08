import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser, updateUserProfile, googleSignIn } = useAuthContext()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const registerUser = result.user
                updateUserProfile(registerUser, data.name, data.photoURL)
                    .then(() => {
                        console.log('User Updated');
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => setError(error.message))
    };

    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div>
            <Helmet>
                <title>Register - PicCamp Academy</title>
            </Helmet>

            <section class="flex flex-col items-center justify-center mt-10 pb-10">


                <div className="w-full  flex items-center justify-center">
                    <div class="bg-base-200 flex  shadow-lg w-full md:w-10/12  items-center">

                        <div class="md:block hidden w-1/2 relative ">
                            <div className="absolute flex flex-col px-5 text-center items-center justify-center w-full h-full z-10 hero-overlay bg-opacity-60 ">
                                <h2 className="text-2xl md:text-4xl font-bold text-white">Already have an account?</h2>
                                <p class=" mt-2 text-white">Join the Picture Adventure Today!</p>

                                <Link to="/login" class="py-2 px-5 mt-3 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>
                            </div>

                            <img class=" h-full object-cover w-auto z-0" src="https://i.ibb.co/8xkvFYR/nicolas-ladino-silva-o2-DVs-V2-Pn-HE-unsplash.jpg" />

                        </div>

                        <div class="w-full md:w-1/2 py-8 px-8 md:px-16">
                            <h2 class="font-bold text-3xl text-indigo-500 text-center">Registration</h2>
                            {
                                error && <label className="label">
                                    <p className="mt-4 text-red-500"><strong>Error:</strong> {error}</p>
                                </label>
                            }

                            <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col gap-4">

                                <input class="p-2 mt-8 rounded-xl border border-gray-300 outline-none bg-transparent" {...register("name", { required: true })} type="text" placeholder="Name" />
                                {errors.name && <span className='text-red-500 '>Name field is required</span>}

                                <input class="p-2  rounded-xl border border-gray-300 outline-none bg-transparent" type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" />
                                {errors.photoURL && <span className='text-red-500 '>Photo URL field is required</span>}


                                <input class="p-2  rounded-xl border border-gray-300 outline-none bg-transparent" type="email"  {...register("email", { required: true })} placeholder="Email" />
                                {errors.email && <span className='text-red-500 '>Email field is required</span>}

                                <input class="p-2 rounded-xl border border-gray-300 outline-none bg-transparent" type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                })} name='password' placeholder="Password" />
                                {errors.password?.type === 'required' && <p className='text-red-500 '>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500 '>Password must be 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500 '>Password must be less than 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500 '>Password must be at least a symbol, upper and lower case letters and a number
                                </p>}

                                <input class="p-2 rounded-xl border border-gray-300 outline-none bg-transparent" type="password" {...register("confirmpassword", { required: true })} placeholder="Confirm Password" />
                                {errors.email && <span className='text-red-500 '>Confirm Password field is required</span>}
                                {errors.password !== errors.confirmpassword && <span className='text-red-500 '>The password and confirm password fields must match</span>}


                                <button type='submit' class="bg-indigo-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                            </form>

                            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                                <hr class="border-gray-400" />
                                <p class="text-center text-sm">OR</p>
                                <hr class="border-gray-400" />
                            </div>

                            <button onClick={handleLoginWithGoogle} class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 text-indigo-500">
                                <FcGoogle className='mr-3 text-3xl' />
                                Sign Up with Google
                            </button>


                            <div class="mt-3 flex justify-between items-center text-indigo-500 md:hidden">
                                <p>Already have an account?</p>
                                <Link to='/login' class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>

                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;