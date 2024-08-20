"use client"
import React from "react";
import Slider from "react-slick";


function Slider1() {
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <img src="https://scihospital.com/gurgaon/public/assets/images/banner1.webp" alt="" />
        </div>
        <div>
         <img src="https://scihospital.com/gurgaon/public/assets/images/slider3.webp" alt="" />
        </div>
        <div>
          <img src="https://scihospital.com/gurgaon/public/assets/images/banner2.webp" alt="" />
        </div>
        <div>
         <img src="https://scihospital.com/gurgaon/public/assets/images/slider3.webp" alt="" />
        </div>
       
      </Slider>
    </div>
  );
}

export default Slider1;
