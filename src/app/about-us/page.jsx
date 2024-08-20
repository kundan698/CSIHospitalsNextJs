'use client'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import Contact from '../PagesComponent/Contact';
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import Modal6 from '../ModalFolder/Modal6';

export default function AboutUs() {
   /*  let [getEmail,setEmail] = useState(false) */
  return (
    <div>
       {/*  {getEmail ? <Modal6 getEmail={getEmail} setEmail={setEmail}/> : ''} */}
       <div className='text-italic mx-auto max-w-[1170px] bg-[#f9f8fd] p-2'>
        <p className='text-slate-500'>Home/About Us</p>
       </div>
       <div>
          <h1 className='text-center uppercase font-bold text-[40px] text-gray-400'>Who We Are</h1>
       </div>
       <section className='mt-5 mx-auto max-w-[1170px] grid grid-cols-2 gap-5'>
        <div className='flex gap-4'>
            <div className='text-center '>
                <img src="https://scihospital.com/gurgaon/public/assets/images/SHIVANI.jpg" alt="" className='img-fluid'/>
                <h2 className='text-[20px] pt-2 font-[bold]'>DR SHIVANI SACHDEV <br /> GOUR</h2>
                 <p>Founder & Medical Director At SCI</p>
            </div>
            <div className='text-center'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/VISHAL.jpg" alt="" className='img-fluid'/>
                <h2 className='text-[20px] pt-2 font-[bold]'>DR VISHAL DUTT GOUR</h2>
                <p>Founder & Medical Director At SCI</p>
            </div>
        </div>
        <div>
            <p className='mb-5'>Recognizing the need for high-quality accessible healthcare services for the people of Delhi NCR, SCI IVF Hospital and SCI International Hospital were established in 2011 and 2014.</p>
            <p className='mb-5'>Since their inception, these institutions have become synonymous with excellence in medical care. They are committed to delivering exceptional healthcare services and catering to patients from around the world.</p>
            <p>In 2011, SCI IVF Hospital was established as the first dedicated IVF facility in South Delhi. The hospital has a team of internationally trained and experienced experts in the field. The in-house embryology team, equipped with state-of-the-art facilities, ensures the highest standards of care in the IVF laboratory.</p>

            <button className='bg-[#C0333D] rounded-[30px] mt-5 hover:bg-black duration-75 underline  p-3 text-center text-white w-[150px]'>View More</button>
        </div>

       </section>
       <section className='mt-10 p-4'>
         <div className='grid grid-cols-3 mx-auto max-w-[1170px] gap-4'>
            <div className='text-center'>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvWahZ1rp_ahpWx55lFSJBPWLVvZEQfD7KsfOruvrZ15qA4Rvi" alt=""  className='w-[50px] mx-[45%]'/>
                <h5 className='font-bold pt-2 text-[20px]'>MISSION</h5>
                <p className='text-center pt-3'>To dedicate years of expertise towards helping our patients on the path to a healthy and happy life with highly advanced technologies.</p>
            </div>

            <div className='text-center'>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUpa6x-vi042o8v1wgkKZz91sJGdaiQdsRtT6aMUWH-KVD8uL4" alt=""  className='w-[70px] mx-[42%]'/>
                <h5 className='font-bold pt-2 text-[20px]'>VISION</h5>
                <p className='text-center pt-3'>To position the organization as a leader providing Affordable and Quality Healthcare Services based on sound scientific principles. Providing expert care by highly trained professionals along with best hygiene practices.</p>
            </div>
            <div className='text-center'>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQS4EdEYBG56g1h727mA4bYu8ySQA2S_kEEPN77vBhM9yPwSKP5" alt=""  className='w-[50px] mx-[42%]'/>
                <h5 className='font-bold pt-2 text-[20px]'>VALUES</h5>
                <p className='text-center pt-3'>Personalized care at affordable cost Patient centric approach : Committed to patient’s needs Innovation : Continuously improving patients experience Team work : Together Everyone Achieves More</p>
            </div>

         </div>

       </section>
       <section className='w-[100%] mt-10'>
         <h1 className=' font-bold text-[30px] text-center p-3'>THE PERFECT <span className='text-red-800 font-bold text-[30px]'>SPECIALISTS TEAM</span></h1>
        <div className=' mx-auto max-w-[1170px] grid grid-cols-3 gap-5'>
            <div  className='bg-slate-100 mt-5 rounded-lg'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Dr-Mamta-Goel-1.png" alt="" className='w-[80%]'/>
                 <h4 className='text-[20px] font-bold text-center p-3'>Dr. Mamta Goel</h4>

            </div>

            <div  className='bg-slate-100 mt-5 rounded-lg'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Dr-Gautam-Banga-2.png" alt="" className='img-fluid'/>
                 <h4 className='text-[20px] font-bold text-center p-3'>Dr. Gautam Banga</h4>

            </div>
            <div  className='bg-slate-100 mt-5 rounded-lg'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Dr-Vishal-Dutt-Gour-1.png" alt="" className='img-fluid'/>
                 <h4 className='text-[20px] font-bold text-center p-3'>Dr. Vishal Dutt Gour</h4>

            </div>

        </div>

       </section>

       <section className='w-[100%] mt-10 bg-slate-200 p-5'>
       <h1 className=' font-bold text-[30px] text-center p-3'>Advanced <span className='text-red-800 font-bold text-[30px]'>Treatments Available</span></h1>

        <div className='mt-5 mx-auto max-w-[1170px] grid grid-cols-[60%_auto] gap-5'>
            <div className='p-3'>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>The first centre in north India with Revolix 200W Thulium laser for Prostate surgery</p>

                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Advanced bariatric and laparoscopic (keyhole) surgeries with smallest 3mm incisions</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Centre of Excellence for reconstructive Urology</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Surgeons performing the highest number of urethroplasties in North India annually (50)</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>100 watt Holmium laser for kidney stone surgery and Laser Prostate surgery</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Men’s Health Clinic specialising in Male Infertility and Erectile Dysfunction</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Doing a large number of Penile Implant surgeries for Erectile Dysfunction (ED)</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Only NABH Accredited Hospital in Delhi offering Medical Examination of Sailors as Certified by DG Shipping, Govt of India.</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Offering latest cell-based Orthbiologics treatment to avoid joint replacement surgeries in Osteoarthritis</p>
                    
                </div>
            </div>
            <div className='p-3'>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Novel Shockwave Therapy for Erectile Dysfunction (ED)</p>

                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Among the first dedicated IVF centres in Delhi</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Successfully delivered over 5500 babies from over 55 countries</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Level III NICU has successfully discharged 100 babies born with birth weight under 800 gms safely</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Carl Zeiss Operating Microscope for Microsurgical Procedures</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Pioneer in Micro- TESE treatment – have successfully extracted viable sperms from many azoospermic individuals and achieving pregnancy and live birthsn</p>
                    
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-red-800 text-[30px]'><FaCheck /></p>
                    <p>Dedicated hearing clinic Offering Audiometry BERA, ISIS, ARB and speech Therapy under one roof.</p>
                    
                </div>
               
            </div>

        </div>

       </section>
       <section className='w-[100%] mt-10'>
        <div className='mt-5 mx-auto max-w-[1170px] grid grid-cols-2 gap-5'>
            <div>
               <Contact/>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.66131781261!2d77.23155537421928!3d28.549897987830693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8bbcfe79f%3A0x96728b689c533cc3!2sSCI%20International%20Hospital!5e0!3m2!1sen!2sin!4v1723979504033!5m2!1sen!2sin" width="600" height="745"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
       {/*  <div  className=' flex gap-2 bg-[#C0333D] p-2 text-white text-center fixed rounded bottom-[20px] left-[20px] z-50'>
                <p onClick={()=>setEmail(!getEmail)} className=' text-[20px]'><MdEmail /></p>
                <p>Online Consultation</p>
            </div> */}

       </section>
    </div>
  )
}
