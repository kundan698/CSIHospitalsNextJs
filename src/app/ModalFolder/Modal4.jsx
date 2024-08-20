"use client"
import React from 'react'

export default function Modal4({set3,change3}) {
  return (
    <div>
         <div className='bg-white fixed overflow-y-scroll h-[400px] w-[400px] shadow-[0px_0px_10px_2px_#ccc] p-3 rounded-lg z-30 bottom-[30px] left-10' >
            <span  className='fixed cursor-pointer left-[370px] hover:text-[red]' title='Cancel' onClick={()=>set3(!change3)}>Cancel</span>

            <div className='p-3 text-center'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/laparoscopy-Laser.png" alt="" className='mx-[40%] w-[100px] ' />
                <h5 className='p-3 text-[#C0333D] text-center'>ADVANCED LAPAROSCOPY &
                LASER PROCEDURESS?</h5>
                <p>Kidney stones are hard collections of minerals and salts that form in the kidneys. Kidney stones can be caused by many things, like the food you eat, being overweight, some medical conditions, and some vitamins and medicines. Your kidneys, bladder, or any other part of your urine system can be hurt by kidney stones. Stones generally form when urine gets too concentrated and lets minerals crystallize and stick together.</p>
            </div>

        </div>
    </div>
  )
}
