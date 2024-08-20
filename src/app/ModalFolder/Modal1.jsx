"use client"
import React from 'react'

export default function Modal1({change,set}) {
  return (
    <div>
        <div className='bg-white fixed h-[400px] w-[400px] shadow-[0px_0px_10px_2px_#ccc] p-3 rounded-lg z-30 bottom-[30px] left-10' onClick={()=>set(!change)}>
            <span className='fixed cursor-pointer left-[370px] hover:text-[red]' title='Cancel'>Cancel</span>

            <div className='p-3 text-center'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/urology.png" alt="" className='mx-[40%] w-[100px] overflow-scroll' />
                <h5 className='p-3 text-[#C0333D] text-center'>What Is Urology?</h5>
                <p>The part of healthcare known as "urology" focuses on treating conditions affecting the kidneys, ureters, bladder, and urethra of both sexes. Penis, testes, scrotum, prostate, etc., all refer to reproductive organs in men. Everyone should pay attention to their urologic health because problems with these areas are common.</p>
            </div>

        </div>
    </div>
  )
}
