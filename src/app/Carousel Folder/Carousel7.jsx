import React from "react";
import Slider from "react-slick";

function  Carousel7() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery2.webp" alt=""  className='w-[350px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery3.webp" alt=""  className='w-[350px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery4.webp" alt=""  className='w-[350px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery5.webp" alt=""  className='w-[350px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery8.webp" alt=""  className='w-[350px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery9.webp" alt=""  className='w-[300px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery10.webp" alt=""  className='w-[300px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery11.webp" alt=""  className='w-[300px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery12.webp" alt=""  className='w-[300px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/gallery13.webp" alt=""  className='w-[300px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/14.png" alt=""  className='w-[300px] slid1'/>
          </div>
        </div>
        <div>
        <div className='slid'>
            <img src="https://scihospital.com/gurgaon/public/assets/images/gallery/15.png" alt=""  className='w-[300px] slid1'/>
          </div>
        </div>
        
        
      </Slider>
    </div>
  );
}

export default Carousel7;
