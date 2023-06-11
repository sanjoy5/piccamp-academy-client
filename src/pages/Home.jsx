import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from '../components/HomeComponents/PopularClasses';
import { useLoaderData } from 'react-router-dom';
import PopularInstructors from '../components/HomeComponents/PopularInstructors';
import Statistic from '../components/HomeComponents/Statistic';
import Tesitominal from '../components/HomeComponents/Tesitominal';
import Contact from '../components/HomeComponents/Contact';

const Home = () => {

    const popularClassesData = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Home - PicCamp Academy</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses popularClassesData={popularClassesData} ></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Statistic></Statistic>
            <Tesitominal></Tesitominal>
            <Contact></Contact>
        </div>
    );
};

export default Home;