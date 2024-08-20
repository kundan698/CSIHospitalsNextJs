import React from "react";
import Slider from "react-slick";

export default function Carousel2() {
  var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Slider {...settings}>
      <div>
      <div className="bg-[#C0333D] p-6 mt-10 text-center text-white rounded-2xl mx-2">
          <h1 className="font-bold text-[25px] p-3 ">1+</h1>
         <h5 className="p-3">Experience</h5>
         <p>Our Specialist</p>
         <p className="border-spacing-5 p-3 cl">Book an appontment  | Make an enquiry</p>


        </div>
         
      </div>
      <div>
      <div className="bg-[#C0333D] p-6 mt-10 text-center text-white rounded-2xl mx-2">
          <h1 className="font-bold text-[25px] p-3 ">1+</h1>
         <h5 className="p-3">Experience</h5>
         <p>Our Specialist</p>
         <p className="border-spacing-5 p-3 cl">Book an appontment  | Make an enquiry</p>


        </div>
         
      </div>
      <div>
      <div className="bg-[#C0333D] p-6 mt-10 text-center text-white rounded-2xl mx-2">
          <h1 className="font-bold text-[25px] p-3 ">1+</h1>
         <h5 className="p-3">Experience</h5>
         <p>Our Specialist</p>
         <p className="border-spacing-5 p-3 cl">Book an appontment  | Make an enquiry</p>


        </div>
         
      </div>
      <div>
      <div className="bg-[#C0333D] p-6 mt-10 text-center text-white rounded-2xl mx-2">
          <h1 className="font-bold text-[25px] p-3 ">1+</h1>
         <h5 className="p-3">Experience</h5>
         <p>Our Specialist</p>
         <p className="border-spacing-5 p-3 cl">Book an appontment  | Make an enquiry</p>


        </div>
         
      </div>
      <div>
      <div className="bg-[#C0333D] p-6 mt-10 text-center text-white rounded-2xl">
          <h1 className="font-bold text-[25px] p-3 ">1+</h1>
         <h5 className="p-3">Experience</h5>
         <p>Our Specialist</p>
         <p className="border-spacing-5 p-3 cl">Book an appontment  | Make an enquiry</p>


        </div>
         
      </div>
      
    </Slider>
  );
}
