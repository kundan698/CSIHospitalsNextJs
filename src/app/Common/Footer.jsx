import React from 'react'
import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Modal6 from '../ModalFolder/Modal6';



export default function Footer() {
  return (
    <div>
        <section className='bg-slate-100 p-4 my-10'>
            <div className='grid grid-cols-4 max-w-[1170px] mx-auto p-2 cursor-pointer'>
                <div>
                    <img src="https://scihospital.com/gurgaon/public/assets/images/sci%20logo.webp" alt="" />
                    <h5 className='mt-3 font-bold'>SCI International Hospital</h5>
                    <div className='mt-4'>
                    <p className='flex text-[14px] gap-2'><ImLocation  className='text-[18px] text-red-800'/>Plot No. 7, Golf Course Rd, Sector 43,</p>
                    <p className='mx-6 mt-2 text-[14px]'>Gurugram, Haryana 122002</p>
                    </div>
                    <div className='mt-4'>
                    <p className='flex text-[14px] gap-2'><ImLocation  className='text-[18px] text-red-800'/>M 4, Near M Block, Greater Kailash-</p>
                    <p className='mx-6 mt-2 text-[14px]'>1, New Delhi 110048</p>
                    </div>
                    <div className='mt-4'>
                    <p className='flex text-[14px] gap-2'><MdCall  className='text-[18px] text-red-800'/>+91 9999446622 (For Appointment) </p>
                    <p className='mx-6 mt-2 text-[14px]'>011 4167 5555 (For General Queries)</p>
                    </div>
                </div>
                <div>
                    <h5 className='font-bold text-[20px] '>About Us</h5>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1 '><IoIosArrowForward /></p>
                        <p className='hover:underline'>Blogs</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Vision & Mission</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Doctor's Team</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Contact Us</p>
                    </div>
                </div>
                <div>
                    <h5 className='font-bold text-[20px] '>PAITENTS CARES</h5>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Book an Appointment</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Insurance & TPA</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Internationals Paitents</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Contact Us</p>
                    </div>
                </div>
                <div>
                    <h5 className='font-bold text-[20px] '>PANELS</h5>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Careers</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Services</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Media Gallery</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <p className='mt-1'><IoIosArrowForward /></p>
                        <p className='hover:underline'>Contact Us</p>
                    </div>

                    <div className='flex gap-6 text-red-800 mt-5 text-[20px] cursor-pointer'>
                        <p><IoLogoTwitter /></p>
                   <p> <GrFacebookOption /></p>
                   <p> <TfiYoutube /></p>
                   <p><FaLinkedinIn /></p>
                   <p><FaInstagram /></p>

                    </div>
                    <div className='mt-7 cursor-pointer'>
                        <img src="https://scihospital.com/gurgaon/public/assets/images/Google%20Reviews.png" alt="" />
                    </div>
                </div>


               

            </div>


        </section>
        
        <div className='bg-[] w-[100%]'>
                <div className='max-w-[1170px] mx-auto p-2 text-white flex justify-between'>
                    <p className='text-[12px] font-[300px]'>Copyright © 2023 SCI International Hospital. All rights reserved.</p>
                   <div className='flex gap-2'>
                    <p><MdCall /> </p>
                   <p  className='text-[12px]'> 

                   For emergency cases   01141675555</p>
                   </div>
                </div>

            </div>
            <div className='text-center p-4'>
                <p className='text-[12px] p-5'>Carefully Crafted by DigeeMed.</p>
            </div>
                
           
           
           
    </div>
  )
}
