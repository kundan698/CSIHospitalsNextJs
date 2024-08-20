import React from "react";
import Slider from "react-slick";

function Carousel5() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
         <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/Recovery-Area-min-768x512.webp" alt="" />
         </div>
        </div>
        <div>
        <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/M1-min-768x509.webp" alt="" />
         </div>
        </div>
        <div>
        <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/nicu3-.webp" alt="" />
         </div>
        </div>
        <div>
        <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/nicu.jpg" alt="" />
         </div>
        </div>
        <div>
        <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/Deluxe-Room-min-3-768x512.webp" alt="" />
         </div>
        </div>
        <div>
        <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/MODULAR-OT..-min-768x512.webp" alt="" />
         </div>
        </div>
        <div>
        <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/OT...-min-768x512.webp" alt="" />
         </div>
        </div>
        <div>
        <div className="hvr">
            <img src="https://scihospital.com/gurgaon/public/assets/images/img-gallery/NICU-Staff-2.webp" alt="" />
         </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel5;
