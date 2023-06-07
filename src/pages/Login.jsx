import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div>
            <section class="flex items-center justify-center">

                <div className="w-full mt-10 md:mt-16 flex items-center justify-center">
                    <div class="bg-gray-100 flex  shadow-lg w-full md:w-8/12  items-center">

                        <div class="w-full md:w-1/2 py-8 md:py-0 px-8 md:px-16">
                            <h2 class="font-bold text-3xl text-indigo-600">Welcome Back!</h2>
                            <p class=" mt-4 text-indigo-600">Login to Continue</p>

                            <form action="" class="flex flex-col gap-4">
                                <input class="p-2 mt-8 rounded-xl border-2 outline-none bg-transparent" type="email" name="email" placeholder="Email" />

                                <input class="p-2 rounded-xl border-2 outline-none bg-transparent" type="password" name="password" placeholder="Password" />

                                <button class="bg-indigo-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                            </form>

                            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                                <hr class="border-gray-400" />
                                <p class="text-center text-sm">OR</p>
                                <hr class="border-gray-400" />
                            </div>

                            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 text-indigo-600">
                                <FcGoogle className='mr-3 text-3xl' />
                                Login with Google
                            </button>


                            <div class="mt-3 flex justify-between items-center text-indigo-600 md:hidden">
                                <p>Don't have an account?</p>
                                <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>

                            </div>
                        </div>


                        <div class="md:block hidden w-1/2 relative ">
                            <div className="absolute flex flex-col px-5 text-center items-center justify-center w-full h-full z-10 hero-overlay bg-opacity-60 ">
                                <h2 className="text-2xl md:text-4xl font-bold text-white">New Here?</h2>
                                <p className="text-white my-4 text-lg">Sign Up and Discover a great <br className='hidden md:block' /> amount of new opportunities</p>
                                <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Sign Up</button>
                            </div>

                            <img class=" max-h-[500px] object-cover w-full z-0" src="https://i.ibb.co/PmQGKKj/rendy-novantino-Qwq-H4v-OC0-Co-unsplash.jpg" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;