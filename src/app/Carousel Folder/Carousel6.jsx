import React from "react";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";

function Carousel6() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
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
        <div>
        <div className='flex justify-between p-3' id='urology'>
          <div className=''>
            <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Vikrant.webp" alt="" className='w-[150px] rounded-[50%]'/>
          </div>
          <div>
              <h5 className='text-red-800 text-[20px] font-bold '>Dr. Indra Nath Varma</h5>
              <p>Seniour Consultant</p>
              <p>Urologiest & Antralogiest</p>
              <button className='mt-4 w-[150px] bg-[#C0333D] rounded-[30px] p-3 text-center text-white'>View more</button>
          </div>
        </div>
        </div>
        </div>
        <div>
        <div className="mx-2">
        <div className='flex justify-between p-3 mx-4' id='urology'>
          <div className=''>
            <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Dr-Indernath-Verma.webp" alt="" className='w-[150px] rounded-[50%]'/>
          </div>
          <div>
              <h5 className='text-red-800 text-[20px] font-bold '>Dr. Indra Nath Varma</h5>
              <p>Seniour Consultant</p>
              <p>Urologiest & Antralogiest</p>
              <button className='mt-4 w-[150px] bg-[#C0333D] rounded-[30px] p-3 text-center text-white'>View more</button>
          </div>
        </div>
        </div>
        </div>
        <div>
        <div className="mx-2">
        <div className='flex justify-between p-3 mx-4' id='urology'>
          <div className=''>
            <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Daipayan.png" alt="" className='w-[150px] rounded-[50%]'/>
          </div>
          <div>
              <h5 className='text-red-800 text-[20px] font-bold '>Dr. Indra Nath Varma</h5>
              <p>Seniour Consultant</p>
              <p>Urologiest & Antralogiest</p>
              <button className='mt-4 w-[150px] bg-[#C0333D] rounded-[30px] p-3 text-center text-white'>View more</button>
          </div>
        </div>
        </div>
        </div>
        <div>
        <div className="mx-2">
        <div className='flex justify-between p-3 mx-4' id='urology'>
          <div className=''>
            <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Vikrant.webp" alt="" className='w-[150px] rounded-[50%]'/>
          </div>
          <div>
              <h5 className='text-red-800 text-[20px] font-bold '>Dr. Indra Nath Varma</h5>
              <p>Seniour Consultant</p>
              <p>Urologiest & Antralogiest</p>
              <button className='mt-4 w-[150px] bg-[#C0333D] rounded-[30px] p-3 text-center text-white'>View more</button>
          </div>
        </div>
        </div>
        </div>
        <div>
        <div className="mx-2">
        <div className='flex justify-between p-3 ' id='urology'>
          <div className=''>
            <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Daipayan.png" alt="" className='w-[150px] rounded-[50%]'/>
          </div>
          <div>
              <h5 className='text-red-800 text-[20px] font-bold '>Dr. Indra Nath Varma</h5>
              <p>Seniour Consultant</p>
              <p>Urologiest & Antralogiest</p>
              <button className='mt-4 w-[150px] bg-[#C0333D] rounded-[30px] p-3 text-center text-white'>View more</button>
          </div>
        </div>
        </div>
        </div>
        <div>
        <div className="mx-2">
        <div className='flex justify-between p-3 ' id='urology'>
          <div className=''>
            <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Dr-Indernath-Verma.webp" alt="" className='w-[150px] rounded-[50%]'/>
          </div>
          <div>
              <h5 className='text-red-800 text-[20px] font-bold '>Dr. Indra Nath Varma</h5>
              <p>Seniour Consultant</p>
              <p>Urologiest & Antralogiest</p>
              <button className='mt-4 w-[150px] bg-[#C0333D] rounded-[30px] p-3 text-center text-white'>View more</button>
          </div>
        </div>
        </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel6;
