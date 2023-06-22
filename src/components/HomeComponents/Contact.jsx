import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className='py-16 md:pt-24 px-2'>
            <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="flex flex-col text-center w-full mb-14">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Reach Us Now</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Contact Us</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whether you have inquiries, feedback, or want to collaborate, our dedicated team is ready to assist you. Reach out today and let's create something extraordinary together.</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </motion.div>



            <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap">
                    <div className="p-2 w-full md:w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/2">
                        <div className="relative">
                            <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                            <textarea id="message" name="message" className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
                    </div>

                </div>
            </motion.div>

        </div>
    );
};

export default Contact;

