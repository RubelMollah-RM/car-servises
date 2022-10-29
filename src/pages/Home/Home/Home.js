import React from 'react';
import Experts from '../Expert/Experts/Experts';
import Servises from '../Servises/Servises';
import Slider from '../../Shared/Header/Slider/Slider'
import TitlePage from '../../TitlePage/TitlePage';

const Home = () => {
    return (
        <div>
            <TitlePage title='Home'></TitlePage>
            <Slider></Slider>
            <Servises></Servises>
            <Experts></Experts>
        </div>
    );
};

export default Home;