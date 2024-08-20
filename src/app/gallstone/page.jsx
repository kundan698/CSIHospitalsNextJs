 'use client'
import React, { useState } from 'react'
import { questions } from '../FaqItem'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Login from '../PagesComponent/Login';
import { FaCheck } from "react-icons/fa";
import ReactFaq from '../Reactfaq';
import Carousel6 from '../Carousel Folder/Carousel6';
import Carousel7 from '../Carousel Folder/Carousel7';

export default function page() {
  let[get,set]=useState(questions[0].id)
  let faqItems= questions.map((item,index)=>{
    return(
      <div className='border relative m-5 rounded-lg cursor-pointer '>
      <h4 onClick={()=>set(item.id) } className=' p-3 text-white  bg-[#C0333D]'>{item.question}
         {item.id==get ? <CiCircleMinus  className='absolute right-[20px] top-[10px] text-[30px]'/> : <CiCirclePlus  className='absolute right-[20px] top-[10px] text-[30px]'/>}
      </h4>
      <div className={`show ${item.id==get ? 'showAns' : ''}`}>
        <p>{item.answer}</p>
      </div>

  </div>
    )
  })
  return (
    <div>
        
    <section className="max-w-[1170px] mx-auto">
      <div className="flex gap-3 bg-[#f9f8fd]  p-3 text-gray-400 italic text-[12px]  cursor-pointer">
        <p>Home/</p>
        <p>Our Specialist/</p>
        <p>Best Urology Hospitals in gurugao</p>
        <p></p>



      </div>
    </section>
    <section className="max-w-[1170px] mx-auto mt-10">
      <div className="">
        <h1 className="text-red-600  text-[40px] font-bold">Best Urology Hospital In Gurgaon</h1>



      </div>
    </section>
    <section className="max-w-[1170px] mx-auto mt-10">
      <div className="">
        <img src="https://scihospital.com/gurgaon/public/assets/images/urology-banner.webp"/>


      </div>
    </section>
    <section className="max-w-[1170px] mx-auto mt-10">
      <div className="">
        <p className="text-[14px] leading-7 font-[600]">Urology is the medical field concerned with male and female reproductive organs. The urinary tract is responsible for making, storing, and getting rid of Urine. The urethra, bladder, and ureters are all part of this system. When you urinate, you expel Urine, which is a byproduct of metabolism. When it comes to urology, SCI Hospital is the best urology hospital in Gurgaon, among the most trusted facilities in all of Gurgaon. The male and female reproductive systems are both covered by our team of best urologist in Gurgaon.</p>


      </div>
    </section>
    <section className=" max-w-[1170px] mx-auto my-10 grid grid-cols-[60%_auto] gap-4">
      <div className="p-2">
        <h5 className="text-red-600 text-[20px] font-bold">What Is Urology?</h5>
        <p>The part of healthcare known as "urology" focuses on treating conditions affecting the kidneys, ureters, bladder, and urethra of both sexes. Penis, testes, scrotum, prostate, etc., all refer to reproductive organs in men. Everyone should pay attention to their urologic health because problems with these areas are common.
          
        </p>
        <p className="mt-4">Urology is typically associated with the surgical field. The urologist deals with a diverse set of medical issues every day. Basically a urologist diagnoses and treats the conditions related to the ureter, kidneys, bladder, and urethra. In male, they treat problems related to the prostate gland and the male reproductive system. If you are also facing any problem related to urological conditions, then you can consult with our best urologist in Gurgaon to cure your disease at the right time.</p>

      </div>
      <div className="mt-4">
        <img src="https://scihospital.com/gurgaon/public/assets/images/urology-treatment.webp"/>
      </div>

    </section>
    <section className="max-w-[1170px] mx-auto my-10 grid grid-cols-[66%_auto] gap-4">
      <div className="mt-5 border-[2px] border-solid border-red-600 rounded-lg p-3">
      <h4 className="text-red-600 font-bold text-[20px]">Urologic Conditions</h4>
        <p className="mt-2">Many diseases and ailments affecting the urinary tract can strike people of any age or gender. The following are some of the most prevalent urologic conditions:</p>
        <p className="font-bold mt-5 mb-3">Urinary Tract Infections (UTIs):</p>
        <p>Common bacterial infections in the urinary system often causing painful urination.</p>
        
        <p className="">Kidney Stones: Hard mineral and salt deposits that form in the kidneys and can lead to severe pain when</p>
        <p className="font-bold mt-2">Kidney Stones:</p>
        <p>Common bacterial infections in the urinary system often causing painful urination.</p>
        <p className="">Many diseases and ailments affecting the urinary tract can strike people of any age or gender. The following are some of the most prevalent urologic conditions:</p>
        <p className="font-bold mt-2">Benign Prostatic Hyperplasia (BPH):</p>
        <p>Enlargement of the prostate gland in aging men, leading to urinary symptoms such as frequent urination and difficulty in starting and stopping the flow.</p>
        <p className="">Many diseases and ailments affecting the urinary tract can strike people of any age or gender. The following are some of the most prevalent urologic conditions:</p>
        <p className="font-bold mt-2">Urinary Tract Infections (UTIs):</p>
        <p>Common bacterial infections in the urinary system often causing painful urination.</p>
        <p className="">Many diseases and ailments affecting the urinary tract can strike people of any age or gender. The following are some of the most prevalent urologic conditions:</p>
        <p className="font-bold mt-2">Urinary Tract Infections (UTIs):</p>
        <p>Common bacterial infections in the urinary system often causing painful urination.</p>
        <p className="">Many diseases and ailments affecting the urinary tract can strike people of any age or gender. The following are some of the most prevalent urologic conditions:</p>
        <p className="font-bold mt-2">Urinary Tract Infections (UTIs):</p>
        <p>Common bacterial infections in the urinary system often causing painful urination.</p>
        <p className="">Many diseases and ailments affecting the urinary tract can strike people of any age or gender. The following are some of the most prevalent urologic conditions:</p>
        <p className="font-bold mt-2">Urinary Tract Infections (UTIs):</p>
        <p>Common bacterial infections in the urinary system often causing painful urination.</p>
        <p className="">Many diseases and ailments affecting the urinary tract can strike people of any age or gender. The following are some of the most prevalent urologic conditions:</p>
        <p className="font-bold mt-2">Urinary Tract Infections (UTIs):</p>
        <p>Common bacterial infections in the urinary system often causing painful urination.</p>
      </div>
      <div>
        <form action="" className='bord1 rounded shadow-lg mt-4'>
          <h3 className='text-red-800 font-bold text-[20px] text-center p-3'>Consult with Our 
            Expert</h3>
            <Login/>
        </form>
      </div>
    </section>
    <section className=''>
      <div className='max-w-[1170px] mx-auto my-10 grid grid-cols-[66%_auto] gap-4'>
        <div className='cls1'>

          <div>
            <h4 className='text-red-800 font-bold text-[25px] p-4'>Treatment And Diagnosis</h4>
            <p className='p-4'>If you are finding the best urologist in Gurgaon location, then SCI may help you to provide relief in your long term urologic problem.</p>
            <p className='p-4'>Urologic diseases are usually diagnosed and screened through urine and blood testing. Imaging procedures including pyelogram, cystography, kidney CT scan or ultrasound, prostate/rectal ultrasonography, and renal angiography examine blockages, tumors, and other abnormalities in the urinary tract. Cystometry and urine flow testing let doctors evaluate urinary function.</p>
            <p className='p-4'>We aim at improving patients health using various urology treatments in Gurgaon center that performed by our best urology doctor in Gurgaon hospital, such as:</p>
            <div className='flex '>
              <p className='text-[25px] font-bold text-red-800 mx-4'><FaCheck /></p>
              <p className=''>Cystectomy</p>
            </div>
            <div className='flex '>
              <p className='text-[25px] font-bold text-red-800 mx-4'><FaCheck /></p>
              <p className=''>Penile Prosthesis</p>
            </div>
            <div className='flex '>
              <p className='text-[25px] font-bold text-red-800 mx-4'><FaCheck /></p>
              <p className=''>Urethroplasty</p>
            </div>
            <div className='flex '>
              <p className='text-[25px] font-bold text-red-800 mx-4'><FaCheck /></p>
              <p className=''>Laparoscopic Urology</p>
            </div>
            <div className='flex '>
              <p className='text-[25px] font-bold text-red-800 mx-4'><FaCheck /></p>
              <p className=''>Robotic Urology</p>
            </div>
            <div className='flex '>
              <p className='text-[25px] font-bold text-red-800 mx-4'><FaCheck /></p>
              <p className=''>Prostate Surgery</p>
            </div>
            <div className='flex '>
              <p className='text-[25px] font-bold text-red-800 mx-4'><FaCheck /></p>
              <p className=''>Ureteroscopy</p>
            </div>

          </div>

        </div>
        <div>
          <h5 className='text-red-800 p-3 text-[30px] font-bold'>Our Services</h5>
          <ReactFaq/>
        </div>

      </div>

    </section>
    <section className='w-[100%]'>
      <div className='max-w-[1170px] mx-auto my-10 '>
        <div>
          <h3 className='text-red-800 text-[25px] font-bold p-3'>Advantage With The Best Urology Hospital In Gurgaon</h3>
          <p className='p-3'>SCI provides various advantages for its patients, and the primary advantage of considering the right healthcare hospital for patients is the best urologist in Gurgaon center. Here are a few more advantages of choosing SCI for your urologic conditions:</p>
          <p className='p-3'>Our medical center is proud of how reliable and thorough the care we provide to our patients. As soon as you walk into our clinic, it is clean, comfortable, and well-kept, making sure that you are safe and relaxed. We care a lot about being on time, so you won't have to wait too long. With a team of medical specialists and modern tools and technology, we ensure your health and happiness by giving you the best care and information possible. We care as much about how you feel and how well you heal after surgery as we do about the operation itself. Post-surgery care is just as important to us as the surgery itself, and we want you to feel good and fully heal.</p>

        </div>

      </div>

    </section>
    <section className='w-[100%]'>
    <h4 className='text-red-800 text-[25px] font-bold text-center p-4 '>Best Urologist In Gurgaon</h4>
      <div className='max-w-[1170px] mx-auto my-10 '>
       
       <Carousel6/>

      </div>
      <button className='mt-4 w-[200px] table mx-auto bg-[#C0333D] rounded-[30px] p-3 text-center text-white'>Consult Our Doctors</button>

      <div className='mt-5'>
        <h4 className='text-red-800 text-[25px] font-bold text-center p-4'>Image Gallery</h4>
      </div>

    </section>
    <section className='w-[100%]'>
      <div className='max-w-[1170px] mx-auto my-10'>
       <Carousel7/>

      </div>

    </section>

    <section className='max-w-[1170px] mx-auto mt-10 p-4'>
     {faqItems}

     

    </section>
    </div>
    
  )
}
