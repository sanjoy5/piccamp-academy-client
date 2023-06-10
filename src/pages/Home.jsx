import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from '../components/HomeComponents/PopularClasses';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const popularClassesData = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Home - PicCamp Academy</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses popularClassesData={popularClassesData} ></PopularClasses>
        </div>
    );
};

export default Home;