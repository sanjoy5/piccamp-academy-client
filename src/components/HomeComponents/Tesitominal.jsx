import React from 'react';

const Tesitominal = () => {
    return (
        <div className='pt-16 md:pt-24 px-2'>
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Happy Clients Stories</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Testimonial</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Inspiring words from those who have trusted us with their photography needs. Discover their stories and the remarkable results they achieved with our services.</p>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-5 mx-auto"></div>
            </div>


            <div className=" mx-auto">
                <div className="flex flex-wrap">
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-base-200 p-8 rounded">
                            <img src="https://i.ibb.co/8dx4myt/quote.png" alt="" className="h-10 w-10 mb-4" />
                            <p className="leading-relaxed mb-6">PicCamp academy academy surpassed all my expectations. Exceptional instructors, immersive classes, and prestigious awards have elevated my skills and ignited my passion for photography.</p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://i.ibb.co/VQn6kXV/Ansel-Adams-and-camera.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium ">Ansel Adams</span>
                                    <span className="text-gray-500 text-sm">Photographer</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-base-200 p-8 rounded">
                            <img src="https://i.ibb.co/8dx4myt/quote.png" alt="" className="h-10 w-10 mb-4" />
                            <p className="leading-relaxed mb-6">PicCamp academy has been a catalyst for my growth. With skilled mentors, diverse classes, and prestigious awards, it's an unparalleled experience for honing my craft. Best of Luck.</p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://i.ibb.co/GPZP78k/young-photographer-women-girl-wallpaper-preview.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium ">Sophie Calle</span>
                                    <span className="text-gray-500 text-sm">Photographer</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tesitominal;