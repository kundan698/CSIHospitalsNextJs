import React from "react";
import Slider from "react-slick";

function Carousel6() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="mx-3">
            <img src="https://img.youtube.com/vi/SSLEE1ggkKc/sddefault.jpg" alt="" />
          </div>
        </div>
       
        <div>
        <div className="mx-3">
            <img src="https://img.youtube.com/vi/GFdGEHU38OQ/sddefault.jpg" alt="" />
          </div>
        </div>
        <div>
        <div className="mx-3">
            <img src="https://img.youtube.com/vi/VmZfDZYrulc/sddefault.jpg" alt="" />
          </div>
        </div>
        <div>
        <div className="mx-3">
            <img src="https://img.youtube.com/vi/RHj3T2tx7ZU/sddefault.jpg" alt="" />
          </div>
        </div>
        <div>
        <div className="mx-3">
            <img src="https://img.youtube.com/vi/PwnFRQIBrZ4/sddefault.jpg" alt="" />
          </div>
        </div>
        <div>
        <div className="mx-3">
            <img src="https://img.youtube.com/vi/heyU_vo_Kfw/sddefault.jpg" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel6;
