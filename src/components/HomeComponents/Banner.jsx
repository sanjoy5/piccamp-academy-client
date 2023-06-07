import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Pagination, Navigation } from "swiper";

import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'



const Banner = () => {
    return (



        <div className='max-w-7xl mx-auto'>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full object-cover rounded-xl" />
                    <div className="h-full absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="space-y-7 w-10/12 md:w-5/12 ml-6 md:ml-14 text-white">
                            <h2 className="text-3xl md:text-6xl font-bold">
                                Discovering Beauty Through Photography
                            </h2>
                            <p>Discovering Beauty Through Photography, unveiling the world's wonders, and immortalizing moments that evoke awe and appreciation.</p>
                            <div className="">
                                <button className="py-2 px-4 text-base md:py-3 md:px-6 md:text-lg rounded-md text-white bg-indigo-500 hover:bg-indigo-600 mr-5">Explore Classes</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-2 space-x-3">
                        <a href="#slide4" className="py-1 px-3 rounded-full bg-white">❮</a>
                        <a href="#slide2" className="py-1 px-3 rounded-full bg-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img3} className="w-full object-cover rounded-xl" />
                    <div className="h-full absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="space-y-7 w-10/12 md:w-5/12 ml-6 md:ml-14 text-white">
                            <h2 className="text-3xl md:text-6xl font-bold">
                                Exploring Light and Shadows
                            </h2>
                            <p>Exploring Light and Shadows, unveiling hidden dimensions, where contrasts dance and create captivating stories within frames</p>
                            <div className="">
                                <button className="py-2 px-4 text-base md:py-3 md:px-6 md:text-lg rounded-md text-white bg-indigo-500 hover:bg-indigo-600 mr-5">Explore Classes</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-2 space-x-3">
                        <a href="#slide1" className="py-1 px-3 rounded-full bg-white">❮</a>
                        <a href="#slide3" className="py-1 px-3 rounded-full bg-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img2} className="w-full object-cover rounded-xl" />
                    <div className="h-full absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="space-y-7 w-10/12 md:w-5/12 ml-6 md:ml-14 text-white">
                            <h2 className="text-3xl md:text-6xl font-bold">
                                Capturing Moments in Time
                            </h2>
                            <p>Capturing Moments in Time, freezing fleeting emotions, and preserving memories that last a lifetime, one click at a time.</p>
                            <div className="">
                                <button className="py-2 px-4 text-base md:py-3 md:px-6 md:text-lg rounded-md text-white bg-indigo-500 hover:bg-indigo-600 mr-5">Explore Classes</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-2 space-x-3">
                        <a href="#slide2" className="py-1 px-3 rounded-full bg-white">❮</a>
                        <a href="#slide4" className="py-1 px-3 rounded-full bg-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full object-cover rounded-xl" />
                    <div className="h-full absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="space-y-7 w-10/12 md:w-5/12 ml-6 md:ml-14 text-white">
                            <h2 className="text-3xl md:text-6xl font-bold">
                                Unveiling the World's Wonders
                            </h2>
                            <p>Unveiling the World's Wonders, capturing the extraordinary, and revealing the hidden treasures that leave us breathless and inspired</p>
                            <div className="">
                                <button className="py-2 px-4 text-base md:py-3 md:px-6 md:text-lg rounded-md text-white bg-indigo-500 hover:bg-indigo-600 mr-5">Explore Classes</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-2 space-x-3">
                        <a href="#slide3" className="py-1 px-3 rounded-full bg-white">❮</a>
                        <a href="#slide1" className="py-1 px-3 rounded-full bg-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;