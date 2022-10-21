import React from 'react';
import Experts from '../Expert/Experts/Experts';
import Servises from '../Servises/Servises';
import Slider from '../../Shared/Header/Slider/Slider'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Servises></Servises>
            <Experts></Experts>
        </div>
    );
};

export default Home;