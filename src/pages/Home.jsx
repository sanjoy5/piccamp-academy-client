import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - PicCamp Academy</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;