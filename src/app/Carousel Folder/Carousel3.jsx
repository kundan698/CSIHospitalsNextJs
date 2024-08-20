import React from "react";
import Slider from "react-slick";

function Carousel3() {
  const settings = {
    dots: true,
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
        <div className="text-right p-2">
          <p> I am so very thankful to SCI International Hospital for this amazing journey of becoming a mother. Everything was so smooth and perfect here. Doctors, staff, nurses—everyone was so helpful and professional. It feels like home. I strongly recommend SCI Hospital and especially Dr. Dhwani if you are dreaming of having a baby. She is so professional, humble, and a doctor always with a smile who gives you the best advice, treatment, and positivity. Thank you so much
          </p>
        </div>
        </div>
        <div>
        <div className="text-right p-2">
          <p>It was a great experience, and I'm really happy that I chose SCI Hospital. The doctors are very good, and all the staff are very kind. First experience at SCI International Hospital. The cleanliness was top-notch, and the services were great. I'll recommend this hospital to all my friends and relatives.
          </p>
          <p className="text-right">Uday Singh.</p>
        </div>
        </div>
        <div>
        <div className="text-right p-2">
          <p> I really appreciate all the staff's cooperation during the treatment. Doctor Shivani is so nice and the best doctor I have ever seen in my life.. and all staff members are very polite and easily accessible. I appreciate all the staff of this hospital. Thank you to all the doctors and staff for being so polite.
          </p>
        </div>
        </div>
        <div>
        <div className="text-right p-2">
          <p> I am so very thankful to SCI International Hospital for this amazing journey of becoming a mother. Everything was so smooth and perfect here. Doctors, staff, nurses—everyone was so helpful and professional. It feels like home. I strongly recommend SCI Hospital and especially Dr. Dhwani if you are dreaming of having a baby. She is so professional, humble, and a doctor always with a smile who gives you the best advice, treatment, and positivity. Thank you so much
          </p>
        </div>
        </div>
        <div>
        <div className="text-right p-2">
          <p> My Mother went for surgery in SCI hospital and we have had the best experience in regards of consulting, diagnosis and surgery. They offer you the best services and efficient doctors and highly trained staff that makes you feel at home. Miss Usha specifically has been very helpful and supportive in all the instances.
          </p>
        </div>
        </div>
        <div>
        <div className="text-right p-2">
          <p> I am so very thankful to SCI International Hospital for this amazing journey of becoming a mother. Everything was so smooth and perfect here. Doctors, staff, nurses—everyone was so helpful and professional. It feels like home. I strongly recommend SCI Hospital and especially Dr. Dhwani if you are dreaming of having a baby. She is so professional, humble, and a doctor always with a smile who gives you the best advice, treatment, and positivity. Thank you so much
          </p>
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel3;
