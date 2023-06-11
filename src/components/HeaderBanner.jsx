import React from 'react';

const HeaderBanner = ({ img, title }) => {
    return (
        <div>
            <div className="hero h-[200px] md:h-[300px]" style={{ backgroundImage: "url(https://i.ibb.co/QFGncP2/ba.jpg)", backgroundPosition: "center" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;