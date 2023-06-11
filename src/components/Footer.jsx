import React from 'react';
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="bg-base-200 body-font mt-10">
            <div className="max-w-7xl px-5 pt-24 pb-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center ">
                        <img src="https://i.ibb.co/CQVKS6y/dslr-camera.png" className='h-10 w-10' alt="" />
                        <span className="ml-3 text-2xl font-semibold">PicCamp</span>
                    </Link>
                    <p className="mb-3 mt-4">Address: 123 ABC Street, Dhaka 1234, Bangladesh</p>
                    <p className="">Hotline: +8801XXXXXXXXX</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium  tracking-widest text-sm mb-3 uppercase">Pages</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Classes</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Instructor</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium  tracking-widest text-sm mb-3 uppercase">Quick Links</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Faq</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Service</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Feedback</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Portrait</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Wildlife</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Street</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Landscape</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">LINKS</h2>
                        <nav className="list-none mb-10">

                            <li>
                                <a className="text-gray-600 hover:text-gray-800">History</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Payemnts</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Students</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Dashboard</a>
                            </li>

                        </nav>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="container mx-auto py-10 border-t px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">Sanjoy Sarker &copy; 2023 | All Rights Reserved
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start cursor-pointer">
                        <a className="text-gray-500">
                            <FaFacebookF />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <FaLinkedinIn />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <FaTwitter />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <FaYoutube />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;