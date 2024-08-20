"use client"
import React from 'react'
import { Tab2 } from '../TabFolder/Tab2'

export default function page() {
  return (
    <div>
        <section className='bg-[#f9f8fd] p-5 mx-auto max-w-[1170px]'>
            <p className='text-gray-500'>Home/Our Galley</p>

        </section>
        <section className='text-center mt-10 p-4 '>
            <h3 className='text-[30px] font-bold'>Our Gallery</h3>
            <Tab2/>
        </section>
    </div>
  )
}
