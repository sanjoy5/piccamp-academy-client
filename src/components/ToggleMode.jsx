import React, { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ToggleMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <div>
            <div className="relative w-full h-full">
                <div className="fixed z-50 top-24 right-0">
                    <label className="swap swap-rotate">

                        <input type="checkbox"
                            onChange={handleToggle}
                            checked={theme === 'light' ? false : true}
                        />

                        {/* sun icon */}

                        <div className=" py-2 md:py-3 px-2 md:px-3 flex items-center justify-center rounded-tl-box rounded-bl-box bg-indigo-600 swap-on fill-current">
                            <BsSun className=' text-white text-lg md:text-xl' />
                        </div>

                        {/* moon icon */}
                        <div className=" py-2 md:py-3 px-2 md:px-3 flex items-center justify-center rounded-tl-box rounded-bl-box bg-indigo-600 swap-off fill-current">
                            <BsMoon className=' text-white text-lg md:text-xl' />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ToggleMode;