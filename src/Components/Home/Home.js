import React from 'react';
import Banner from '../Banner/Banner';
import HomeChef from '../HomeChef/HomeChef';
import Services from '../Services/Services';
import TopRestrurent from '../TopRestrurent/TopRestrurent'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeChef></HomeChef>
            <TopRestrurent></TopRestrurent>
        </div>
    );
};

export default Home;