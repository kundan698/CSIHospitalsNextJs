'use client'
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function Modal7({getMenuItem,setMenuItem}) {
    let func1 = ()=>{
        setMenuItem(!getMenuItem)
    }
  return (
    <>
         <div className='bg-[rgba(0,0,0,0.5)]  h-screen fixed w-[100%] z-3000' onClick={func1}>

         </div>
        <div className='menubar'>
            <div className='grid grid-cols-4'>
                <div className='p-3 mt-5'>
                    <div className='flex justify-between bdrs text-[14px]'>
                    <Link href={'/gallstone'}>GallStone</Link>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between bdrs text-[14px'>
                    <Link href={'/surgery-and-treatment'}>Proctology</Link>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between bdrs '>
                    <p>Dental implants & Orthodontics</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between bdrs'>
                    <p>Cosmetic & Plastic Surgery</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between bdrs'>
                    <p>Regenerative Medicines & Stem</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                </div>
                <div className='p-3 mt-5'>
                    <div className='flex justify-between  bdrs'>
                    <p>Orthopaedics & Spine Surgery</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Cosmetic Gynecology</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Weight Loss Surgery</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Obstetrics & Gynecology</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Cohlear Implants</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                </div>
                <div className='p-3 mt-5'>
                    <div className='flex justify-between  bdrs'>
                    <p>Urology</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Andrology</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Reconstructive Urology</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Internal Medicine & Endocrinology</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>ENT (Ear,Nose & Throat)</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                </div>
                <div className='p-3 mt-5'>
                    <div className='flex justify-between  bdrs'>
                    <p>Health Checkup</p>
                    <p className='pt-1 text-red-800 font-bold '><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Opthalmology</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Mother & Child Care</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                    <div className='flex justify-between  bdrs'>
                    <p>Neonatology & Pediatrics</p>
                    <p className='pt-1 text-red-800 font-bold'><IoIosArrowForward /></p>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}
