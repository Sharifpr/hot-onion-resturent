import React from 'react';
import backgroundImage from '../../../../images/bannerbackground.png';
import './banner.css'
const Banner = () => {
    return (
        <div className="banner-container">
            <img src={backgroundImage} alt="" />
        </div>
    );
};

export default Banner;