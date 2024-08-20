import React from "react";
import Slider from "react-slick";

function Carousel4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div>
         <iframe className="rounded-lg" width="681" height="383" src="https://www.youtube.com/embed/xXTgJA1r4NM" title="SCI Hospital | Multispeciality Hospital in Delhi | Male Infertility,IVF,Orthopedics &amp; Spine Problems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
        </div>
        <div>
        <div>
        <iframe width="681" height="383" src="https://www.youtube.com/embed/3GMXNLLa_LE" title="Patient Testimonial: Urethroplasty Success Story | Dr. Gautam Banga | SCI Hospital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
        </div>
        <div>
        <div>
        <iframe width="681" height="383" src="https://www.youtube.com/embed/4CMlFmY-6AM" title="Fistula: Diagnosis &amp; Treatment | Dr. Vikrant Singh | SCI Hospital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
        </div>
        <div>
        <div>
        <iframe width="681" height="383" src="https://www.youtube.com/embed/KbSPqRpncPc" title="The ULTIMATE Truth of Big Hospitals! | Healthcare Revolution in India | SCI Hospital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
        </div>
        <div>
        <div>
        <iframe width="681" height="383" src="https://www.youtube.com/embed/FfT6ikqvG3s" title="SCI International Hospital - Review - Overiew | Multispeciality Hospital in Delhi | Lyfboat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
        </div>
        <div>
        <div>
        <iframe width="681" height="383" src="https://www.youtube.com/embed/rZFc0BIQvxI" title="Discover Comfort and Confidence: Hear from a Mother Whose Baby Thrived After Hypospadias Treatment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel4;
