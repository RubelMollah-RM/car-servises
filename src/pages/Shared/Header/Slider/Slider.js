// import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import baner1 from '../../../../images/banner/banner1.jpg';
import baner2 from '../../../../images/banner/banner2.jpg';
import baner3 from '../../../../images/banner/banner3.jpg';
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
 
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="container mx-auto mb-9 h-96 mt-4">
        <Slider className="h-full" ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img className="h-80" src={baner1} alt="" />
          </div>
          <div>
          <img className="h-80" src={baner2} alt="" />
          </div>
          <div>
          <img className="h-80" src={baner3} alt="" />
          </div>
          <div>
          <img className="h-80" src={baner1} alt="" />
          </div>
          <div>
          <img className="h-80" src={baner2} alt="" />
          </div>
          <div>
          <img className="h-80" src={baner3} alt="" />
          </div>
        </Slider>
        
        </div>
      
    );
  }
}









