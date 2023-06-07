import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';

const Main = () => {
    const navigation = useNavigation()
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
        <>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading....'}</div>
            <main className='max-w-7xl mx-auto px-4 md:px-2'>

                <div className="relative w-full h-full">
                    <div className="fixed z-50 top-24 right-0 py-2 md:py-3 px-2 md:px-3 flex items-center justify-center rounded-tl-box rounded-bl-box bg-indigo-600">
                        <label className="swap swap-rotate">

                            <input type="checkbox"
                                onChange={handleToggle}
                                checked={theme === 'light' ? false : true}
                            />

                            {/* sun icon */}

                            <BsSun className='swap-on fill-current text-white text-lg md:text-xl' />

                            {/* moon icon */}

                            <BsMoon className='swap-off fill-current text-white text-lg md:text-xl' />
                        </label>
                    </div>
                </div>

                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Main;