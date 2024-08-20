import React from 'react'

export default function Modal2({change1,set1}) {
  return (
    <div>
         <div className='bg-white fixed h-[400px] w-[400px] shadow-[0px_0px_10px_2px_#ccc] p-3 rounded-lg z-30 bottom-[30px] left-10' >
            <span onClick={()=>set1(!change1)} className='fixed cursor-pointer left-[370px] hover:text-[red]' title='Cancel'>Cancel</span>

            <div className='p-3 text-center'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/prostate-surgeries.png" alt="" className='mx-[40%] w-[100px] overflow-scroll' />
                <h5 className='p-3 text-[#C0333D] text-center'>What is Laser Stone?</h5>
                <p>In our daily lives, human hands play a crucial role in carrying out demanding tasks, from experiencing sensations to lifting heavy weights. These hands are indispensable for performing all kinds of work. However, unfortunate incidents or accidents can lead to severe injuries, leaving significant wounds on these essential body parts.</p>
            </div>

        </div>
    </div>
  )
}
