"use client"
import React from 'react'
import { MdCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Tab1 from '../TabFolder/Tab1';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoDocumentOutline } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function page() {
  return (
    <div>
        <section className='max-w-[1170px] mx-auto p-3 shadow-[0px_0px_10px_2px_#ccc] rounded-lg  mt-10 grid grid-cols-[80%_auto]'>
            <div className='flex gap-20 '>
              <div>
              <img src="https://scihospital.com/gurgaon/public/assets/images/doctors/Dr-Shivani-Sachdev-Gour.png" alt="" className='w-[250px] '/>
              </div>
               <div>
               <p className='text-red-800 font-bold text-[40px] '>Dr. Shivani Sachdev Gour</p>
               <p className=''>MBBS, DNB, MD</p>
               <p><IoLocationSharp  className='text-red-800 font-bold text-[20px]'/>Plot No. 7, Golf Course Rd, Sector 43, Gurugram, Haryana 122002</p>
               <p> <MdCall  className='text-red-800 font-bold text-[20px]'/>Mobile: +91-9354471022</p>
               <p><MdEmail  className='text-red-800 font-bold text-[20px]'/>Email: info@scihospital.com</p>
               </div>

              
            </div>
            <div  className=' mt-[10%] text-center'>
            <MdCall  className='text-[80px] mx-[70px] text-white bg-[#C0333D] p-4 text-center rounded-[50%] h-[50px]w-[50px]'/>
            <p className='mt-5 font-bold'>For Appointment, call us on</p>
            <p className='mt-5 hover:underline hover:text-[#C0333D] cursor-pointer'>+91-4534678943</p>
            </div>
           
            

        </section>
        <section className='mt-10 max-w-[1170px] mx-auto'>
        <Func/>
        </section>
    </div>
  )
}
export let Func= () => (
    <div className='bdr '>
        <Tabs>
      <TabList>
       
        <Tab>
            <div className='text-[#C0333D] font-bold'>
            <IoDocumentOutline  className='mx-4'/>
           <p className='uppercase text-[14px]'> About</p>
            </div>
        </Tab>
        <Tab>
        <div className='text-[#C0333D] font-bold'>
        <IoSchoolSharp className='mx-10' />
          <p className='uppercase text-[14px]'> Education</p>
            </div>
        </Tab>
        <Tab>
        <div className='text-[#C0333D] font-bold'>
        <GiTrophyCup  className='mx-12'/>
          <p className='uppercase text-[14px]'> Achievments</p>
            </div>
        </Tab>
        <Tab>
        <div className='text-[#C0333D] font-bold '>
        <HiOutlineUserGroup  className='mx-12'/>
            <p className='uppercase text-[14px]'>Life Member Of</p>
            </div>
        </Tab>
       
      </TabList>
  
      <TabPanel>
       <p className='mt-5'>Dr. Shivani Sachdev Gour is the founder and director of SCI Healthcare and Multispecialty Centre and consultant fertility specialist. Dr. Shivani Sachdev Gour has practiced as an obstetrician and gynaecologist, and infertility specialist for the past ten years. She has completed her medical and obstetrical qualifications in Mumbai in 2000 and was involved with treating the first cases of legal surrogacy in India. Dr. Shivani Sachdev Gour spent four years in the United Kingdom as an IVF clinical research fellow at the prestigious Hammersmith Hospital, and practiced as a gynecologist and obstetrician at Royal Infirmary of Edinburgh. She gained membership of the Royal College of Obstetricians and Gynaecologists (UK) in May, 2005. In 2007 Dr. Shivani Sachdev Gour returned to Delhi to consult as an IVF specialist with Delhi’s premier infertility treatment centres. She now leads the SCI Healthcare and IVF programs. Dr. Shivani Sachdev Gour’s distinguished work has brought local and international attention to SCI Healthcare’s IVF programs. Through her medical expertise and dedication to excellence, hundreds of couples from around the world are now parents.</p>
      </TabPanel>
      <TabPanel>
       <p className='mt-5'>MBBS,DNB,MD</p>
      </TabPanel>
      <TabPanel>
        <p className='mt-5'>Secretary Delhi State Chapter of ISAR, Secretary Delhi State Chapter of ISPAT, General Secretary INSTAR, Vice President Delhi Gynae Forum South, Assistant Secretary IMA South Delhi</p>
      </TabPanel>
      <TabPanel>
        <p className='mt-4'>Member of Editorial Board of International Journal of Reproduction, Contraception, Obstetrics and Gynaecology (IJRCOG). | Dr. Shivani Sachdev Gour has been awarded with Rashtra Gaurav Samman-2015 from Dr. GVG Krishnamurthy, former Election Commissioner of India in a meeting organised by an NGO- Jansanskriti. | Dr. Shivani’s name has been accomplished in Limca Book of records for participating in surrogacy walk organised by Indian Society for Third Party Assisted Reproduction. | Dr. Shivani Sachdev Gour has been awarded with Healthcare Achievers Award- 2015 in a meeting organised by an NGO- Jansanskriti. | Dr. Shivani Sachdev Gour has been selected as the member of Advisory Board of several media portals and Scientific journals and has presented & published articles in National & International Conferences & Journals. | Widely Quoted in National & International Media</p>
      </TabPanel>
    </Tabs>
    </div>
  );
