import React from 'react';
import Header from '../../Shared/Header/Header'
import Banner from '../Banner/Banner';
import FoodOverView from '../Food/FoodOverview/FoodOverview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FoodOverView></FoodOverView>
        </div>
    );
};

export default Home;