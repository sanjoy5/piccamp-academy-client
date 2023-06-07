import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <section class="flex items-center justify-center">

                <div className="w-full mt-6 flex items-center justify-center">
                    <div class="bg-gray-100 flex  shadow-lg w-full md:w-8/12  items-center">

                        <div class="md:block hidden w-1/2 relative ">
                            <div className="absolute flex flex-col px-5 text-center items-center justify-center w-full h-full z-10 hero-overlay bg-opacity-60 ">
                                <h2 className="text-2xl md:text-4xl font-bold text-white">Already have an account?</h2>

                                <Link to="/login" class="py-2 px-5 mt-3 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>
                            </div>

                            <img class=" h-full object-cover w-full z-0" src="https://i.ibb.co/8xkvFYR/nicolas-ladino-silva-o2-DVs-V2-Pn-HE-unsplash.jpg" />

                        </div>

                        <div class="w-full md:w-1/2 py-8 px-8 md:px-16">
                            <h2 class="font-bold text-3xl text-indigo-600">Registration</h2>
                            <p class=" mt-4 text-indigo-600">Join the Picture Adventure Today!</p>

                            <form action="" class="flex flex-col gap-4">
                                <input class="p-2 mt-8 rounded-xl border-2 outline-none bg-transparent" type="text" name="name" placeholder="Name" />
                                <input class="p-2  rounded-xl border-2 outline-none bg-transparent" type="text" name="photo" placeholder="Photo URL" />
                                <input class="p-2  rounded-xl border-2 outline-none bg-transparent" type="email" name="email" placeholder="Email" />
                                <input class="p-2 rounded-xl border-2 outline-none bg-transparent" type="password" name="password" placeholder="Password" />
                                <input class="p-2 rounded-xl border-2 outline-none bg-transparent" type="password" name="confirmpassword" placeholder="Confirm Password" />

                                <button class="bg-indigo-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                            </form>

                            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                                <hr class="border-gray-400" />
                                <p class="text-center text-sm">OR</p>
                                <hr class="border-gray-400" />
                            </div>

                            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 text-indigo-600">
                                <FcGoogle className='mr-3 text-3xl' />
                                Sign Up with Google
                            </button>


                            <div class="mt-3 flex justify-between items-center text-indigo-600 md:hidden">
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