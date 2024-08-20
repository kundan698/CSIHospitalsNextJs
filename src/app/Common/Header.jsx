'use client'
import Link from 'next/link'
import React, { useContext }  from 'react'
import Modal6 from '../ModalFolder/Modal6'
import { useState } from 'react'
import { MdEmail } from "react-icons/md";
import Modal7 from '../ModalFolder/Modal7'
import { MdCall } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";
import { ContextApi } from '../Context/Context'




export default function Header() {
  let{get,set}=useContext(ContextApi)
  let [getEmail,setEmail] = useState(false)
  let [getMenuItem,setMenuItem] = useState(false)
  let ClickFunc = ()=>{
    setMenuItem(!getMenuItem)
  }
 
  return (
    <>
    
    <div className='w-[100%] bg-[#C0333D]'>
        <div className='flex justify-between max-w-[1170px] mx-auto'>
          <div className='flex gap-2 text-white p-2 '>
            <p className=' text-[20px] font-bold'><MdCall /></p>
           <p className='text-[14px] hover:underline cursor-pointer'>For General Queries-103446578</p>
           <p>|</p>
           <div className='flex gap-3'>
            <p className='text-[14px]'>Delhi</p>
            <p className='p-1'><MdCall /></p>
            <p className='text-[14px]'>-0122345609</p>
           </div>
           <div className='flex gap-3'>
            <p>|</p>
            <p className='text-[14px]'>Gurugao</p>
            <p className='p-1'><MdCall /></p>
            <p className='text-[14px]'>-001134256789</p>
           </div>
          </div>
          <div className='flex justify-between text-white gap-3'>
          <p className='pt-3'><TiSocialTwitter /></p>
          <p  className='pt-3'><TfiYoutube /></p>
          <p  className='pt-3'><FaFacebookF /></p>
          <p  className='pt-3'><FaLinkedinIn /></p>
          <p  className='pt-3'><FaInstagram /></p>

        </div>

          

        </div>
       
    </div>
      

<nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 ">
{getEmail ? <Modal6 getEmail={getEmail} setEmail={setEmail}/> : ''}
 {getMenuItem ? <Modal7 getMenuItem ={getMenuItem} setMenuItem={setMenuItem}/> : ''}
  
 
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 " id='menu'>
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://scihospital.com/gurgaon/public/assets/images/sci%20logo.webp" className=" w-[200px]" alt="Flowbite Logo"  />
       {/*  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href={'/'} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent uppercase md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link href={'/about-us'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase"> About Us</Link>
        </li>
       {/*  <li>
          <Link href={'/gurugao'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">Gurogao</Link>
        </li> */}
        <li className='relative'>
          <a onClick={ClickFunc} href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">Specialists <IoMdArrowDropdown  className='absolute right-[-20px] top-[5px] text-[18px]'/>
           
          </a>
          

        </li>
        
         
           <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase" >Appontment Done</a>
        </li>
         
        
        
          <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">Book Appointment</a>
        </li>
         
        
       
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">International paitents</a>
        </li>
        <li>
          <Link href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">Blog</Link>
        </li>
      </ul>
    </div>
   
  </div>

</nav>
              <div  className=' flex gap-2 bg-[#C0333D] p-2 text-white text-center fixed rounded bottom-[20px] left-[20px] z-50 cursor-pointer'>
                <p onClick={()=>setEmail(!getEmail)} className=' text-[20px]'><MdEmail /></p>
                <p>Online Consultation</p>
            </div> 

           

    </>
  )
}
