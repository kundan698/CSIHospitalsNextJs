 "use client"
import Image from "next/image";

import Slider1 from "./Carousel Folder/Carousel1";
import Carousel2 from "./Carousel Folder/Carousel2";
import Modal1 from "./ModalFolder/Modal1";
import { useState } from "react";
import Modal2 from "./ModalFolder/Modal2";
import Modal3 from "./ModalFolder/Modal3";
import Modal4 from "./ModalFolder/Modal4";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import Carousel3 from "./Carousel Folder/Carousel3";
import Carousel4 from "./Carousel Folder/Carousel4";
import { FaCheck } from "react-icons/fa";
import Carousel5 from "./Carousel Folder/Carousel5";
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel6 from "./Carousel6";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Modal5 from "./ModalFolder/Modal5";
import { FaMessage } from "react-icons/fa6";

import Modal6 from "./ModalFolder/Modal6";

export default function Home() {
  let[change,set]=useState(false)
  let [change1,set1] = useState(false)
  let[change2,set2]= useState(false)
  let[change3,set3] = useState(false)
  let[change4,set4] = useState(false)
 
  let sms = ()=>{
    set4(!change4)
  }

  return (
    <>
    
     {change ?  <Modal1 change={change} set={set}/> : ''}
     {change1 ? <Modal2 change1= {change1} set1={set1}/> : ''}
    {change2 ? <Modal3  change2= {change2} set2={set2}/> : ''}
    {change3 ? <Modal4  change3= {change3} set3={set3}/> : ''}
   {change4 ?  <Modal5 change4={change4} set4={set4}/> : '' }

    <div className=" bg-green-800 pns">
       <p className=" font-bold text-[30px]   z-40 fixed text-white  top-[208px] right-[0px] whats"><FaWhatsapp /></p>
       <div className=" icon">WhatsApp</div>
       
    </div>
     <div className=" bg-green-800 pns1">
       <p className=" font-bold text-[30px] bg-slate-500 top-[268px] bg1 right-0 z-40 fixed text-white   whats1"><MdCall /></p>
       <div className=" icon1">Phone</div>
       
    </div> 
            <div onClick={sms} className='bg-[#C0333D] rounded-[50%] p-4 fixed bottom-[10px] right-[10px] cursor-pointer'>
                <p className='text-white text-[30px]'><FaMessage /></p>

            </div>

          

   
    
       <section className="max-w-[1170px] mx-auto">
      <Slider1/>
       </section>
       <section className=" bg-[#C0333D] grid grid-cols-[75%_auto] text-white">
       <div>
      <h3 className="p-4">One Call Away To Help You</h3>

       </div>
       <div className="text-whit bg-[#AC2E37] p-4">
        <p>+91-3445899999993</p>
       </div>
       

       </section>
       <section className="max-w-[1170px] mx-auto  grid grid-cols-[40%_auto] gap-3">
       <div>
        <h3  className="mx-4 mt-5 font-bold text-[40px] text-center">Our Achievements</h3>
        <Carousel2/>
       </div>
       <div>
        <h5 className="mx-4 mt-5 font-bold text-[40px] text-center">Book an Appointment</h5>
        

   <form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" class="text-white bg-[#C0333D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Now</button>
</form>

       </div>
       

       </section>
       <section className="bg-slate-300 p-2 mt-10 ">
        <div className="max-w-[1170px] mx-auto grid-cols-4">
        <h1 className="text-center text-white text-[60px] font-bold">Our Services</h1>
        <div className="flex justify-between  mt-5 flex-wrap">
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer ">
            <img src="https://scihospital.com/gurgaon/public/assets/images/urology.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">ADVANCED UROLOGY & <br/> ANDROLOGY</h5>
            <a  className="underline" onClick={()=>set(!change)}>Read More</a>

          </div>
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer ">
            <img src="https://scihospital.com/gurgaon/public/assets/images/prostate-surgeries.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">LASER STONE AND<br/> PROSTATE SURGERIES</h5>
            <a  className="underline" onClick={()=> set1(!change1)}>Read More</a>

          </div>
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer ">
            <img src="https://scihospital.com/gurgaon/public/assets/images/IVF-infertility.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">IVF AND INFERTILITY <br></br> TREATMENTS</h5>
            <a onClick={()=>set2(!change2)} className="underline" >Read More</a>

          </div>
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer ">
            <img src="https://scihospital.com/gurgaon/public/assets/images/laparoscopy-Laser.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">ADVANCED LAPAROSCOPY & <br></br> LASER PROCEDURES</h5>
            <a  className="underline" onClick={()=>set3(!change3)}>Read More</a>

          </div>
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer mt-5">
            <img src="https://scihospital.com/gurgaon/public/assets/images/ortho.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">ORTHOPEDICS & SPORTS <br></br> INJURY</h5>
            <a  className="underline">Read More</a>

          </div>
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer mt-5">
            <img src="https://scihospital.com/gurgaon/public/assets/images/Ent.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">ENT - COCHLEAR IMPLANT,<br></br> HEAD & NECK SURGERY</h5>
            <a  className="underline">Read More</a>

          </div>
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer mt-5">
            <img src="https://scihospital.com/gurgaon/public/assets/images/bariatic%20&%20weightloss.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">BARIATRIC SURGERY & <br></br> WEIGHT LOSS PROCEDURES</h5>
            <a  className="underline" onClick={()=>set3(!change3)}>Read More</a>

          </div>
          <div className="bg-white p-8 rounded-lg  text-center uro cursor-pointer mt-5">
            <img src="https://scihospital.com/gurgaon/public/assets/images/Dermatology&cosmetology.png" className="mx-12 bg-white p-3 rounded-lg" />
            <h5 className="text-[14px] font-bold mt-4">DERMATOLOGY & <br></br> COSMETOLOGY</h5>
            <a  className="underline" onClick={()=>set3(!change3)}>Read More</a>

          </div>

        </div>
        </div>
       
         
       </section>
       <section className="w-[100%]">
         <h2 className="text-center text-[30px] p-3 font-bold mt-5">Our Specialist
         </h2>
         <div className="max-w-[1170px] mx-auto grid grid-cols-4">
          <div className="text-center p-3">
            <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Dr-Shivani-Sachdev-Gour.png" className="img-fluid"/>
             <h5 className="font-bold text-[20px] mt-5">Dr.Shivani Sachdev Gaur</h5>
             <p className="text-red-800 font-bold">Senior Consultant</p>
             <p className="mb-5">IVF & Surrogacy Specialist</p>
             <Link href={'/sivanisachdev-gaur'} className="bg-[#C0333D] p-2 rounded-[20px] text-white  font-[600] hover:bg-[#6060dc] duration-75  mt-5">View Profile </Link>
          </div>


         </div>
       </section>
       <section className="max-w-[1170px] mx-auto">
         <h3 className="text-center p-4 text-[40px] font-bold">Breakthrough cases</h3>
         <div className="flex gap-[150px] mt-10">
        
          <div className="text-center">
            <img src="https://scihospital.com/gurgaon/public/assets/images/ser2.webp" className="mx-10"/>
            <h5 className="text-[20px] font-bold text-center mt-5">Successfully treated Deafness of 2 <br></br> Years Child</h5>
            <button className="bg-[#C0333D] mx-[6%] rounded-[20px] text-white text-center p-2 mt-10 w-[220px]">By.Dr. Shomsvar Singh</button>
          </div>
          <div className="text-center">
            <img src="https://scihospital.com/gurgaon/public/assets/images/premature-baby-calming-nicunarrow.webp" className="mx-10 w-[240px]"/>
            <h5 className="text-[20px] font-bold text-center mt-5">Immature baby of 25 weeks treated & <br></br> discharged healthy.</h5>
            <button className="bg-[#C0333D] mx-[6%] rounded-[20px] text-white text-center p-2 mt-10 w-[200px]">Dr.Ashiwini Singh</button>
          </div>
         

         </div>
        
        
        
       </section>
       <section className="grid grid-cols-2 max-w-[1170px] mx-auto gap-10 mt-10 text-[italic]">
        <div className="text-right mt-10">
          <p className="text-right text-[18px] font-[600]">Patient Testimonials</p>
          <p className="text-[30px] font-bold">What Our Patients Are <br></br> Saying</p>
          <Carousel3/>
        </div>
       
        <div>
        <Carousel4/>
        <button className="mt-10 w-[200px] p-3 bg-[#C0333D] rounded-[30px] text-white text-center table mx-auto">View more</button>
        </div>

       </section>
       <section className="zig ">
        <div className="grid grid-cols-2 gap-7 max-w-[1170px] mx-auto ">
          <div>
            <img src="https://scihospital.com/gurgaon/public/assets/images/building.webp" className="w-[500px]"/>
          </div>
          <div>
            <h2 className="font-bold text-[30px]">OUR STORY - SURGICAL CENTRE OF <br></br> <span className="text-[#C0333D] font-bold text-[30px]">INDIA</span></h2>
            <p>SCI Hospital was established in 2014 with an aim to develop a super speciality surgical centre with the latest equipment and facilities focused on Urology, Gynaecology & Obstetrics, Neonatology, Advanced Laparoscopic & General Surgery along with Joint and Spine, ENT and Cosmetic Surgeries.

           </p>
           <p className="mt-5">All surgeries & treatments are carried out by highly motivated and internationally trained doctors.</p>
           <button className="mt-10 w-[200px] p-3 bg-[#C0333D] rounded-[30px] text-white text-center table mx-auto">View more</button>
           <div className="flex gap-4">
           <p> <FaCheck  className="text-[#C0333D] text-[30px]"/></p>
           <p className="mt-1">Clinic Tour</p>
           </div>
           <div className="flex gap-4">
           <p> <FaCheck  className="text-[#C0333D] text-[30px]"/></p>
           <p className="mt-1">Insurance / TPA</p>
           </div>
           <div className="flex gap-4">
           <p> <FaCheck  className="text-[#C0333D] text-[30px]"/></p>
           <p className="mt-1">EMI option</p>
           </div>
          </div>

        </div>

        
       </section>
       <section className="mt-[10%] max-w-[1170px] mx-auto ">
        <div className="text-center p-4">
        <p className="text-red-800">Gallery</p>
        <h5 className="font-bold text-[30px]">Image & Gallery</h5>
        </div>
        <Carousel5/>

      <Link href={'/view-more'} className="bg-[#C0333D] text-white text-center table mx-auto mt-10 p-2 ">View More</Link>

       </section>
       <section className="mt-10  max-w-[1170px] mx-auto  gap-4">
        <h3 className="text-center font-bold text-[40px] p-3">Doctors Talks</h3>
        <Carousel6/>
       <div>
       <Link href={'/view-more'} className="bg-[#C0333D] text-white text-center table mx-auto my-10 p-3 ">View More</Link>

       </div>
       

       </section>
       <section className="max-w-[1170px] mx-auto grid grid-cols-[60%_auto]">
        <div className="w-[100%] shadow-[0px_0px_10px_2px_#ccc] p-5 rounded-lg ">
          <div className="text-center p-3 my-7">
            <h3 className="text-[30px] font-bold">Make an <span className="text-red-800 text-[30px] font-bold ">Appointment</span></h3>
            <p className="text-[14px] font-[700] p-3">Early diagnosis and proper treatment can help with quick recovery. Consult the experts</p>
            <h5 >TODAY!</h5>
          </div>
          

<form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" class="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#C0333D]  ">Book Now</button>
</form>



        </div>

        <div >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFloPFr2N8LacjfKuX4LztsxWLcgPPQmJ73w&s" className="w-[500px] rounded-lg h-[700px]"/>
        </div>

       </section>
      
    </>
  );
}
