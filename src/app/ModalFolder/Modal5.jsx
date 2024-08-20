import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { MdOutlineLiveHelp } from "react-icons/md";

export default function Modal5() {
    const notify = () => toast.success("Sent Successfully...");
  return (
    <div>
        <div className='bg-white shadow-2xl fixed right-[40px] bottom-[80px] h-[400px] w-[400px] z-[9999]'>
            <div className='bg-[#C0333D] sms p-3 text-white flex gap-3 '>
               <div className='relative'>
               <img src="https://scihospital.com/gurgaon/public/assets/images/sci%20logo.webp" alt="" className='w-[50px] h-[50px] z-10 bg-white  rounded-[50%]'/>
                <div className='bg-green-600 rounded-[50%] h-[15px] w-[15px]  absolute fixs bottom-[5px] right-[-2px]'></div>
               </div>
                <p className='pt-3 text-[18px]'>CSI Hospitals</p>

               

            </div>
            <div>
            <div className='flex mt-3'>
                <img src="https://scihospital.com/gurgaon/public/assets/images/sci%20logo.webp" alt="" className='w-[50px] h-[50px] z-10000 bg-white  rounded-[50%] mt-3 mx-3'/>
                <div className='bg-slate-200 mt-10 rounded-lg p-2 w-[300px]'>
                    <p className='text-[12px]'>Welcome to SCI Hospitals. We are live and ready to chat with you now. Say something to start a live chat.</p>
                    <div className=''>
                    <p className='text-[12px] m-2'>Before we get started, Please tell your name</p>

                   
                    </div>
                    

                </div>
                </div>
               <div className='mt-[50px] sms1'>
               <div class="relative z-0 w-[95%] mb-5 group p-2 mt-4 ">
               <p onClick={notify} className='absolute right-0 text-gray-400 text-[20px] cursor-pointer'><RiSendPlaneFill /></p>
      <input type="text" name="floating_text" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mx-3">Write a Message</label>

      <div className='mt-3 flex gap-2'>
        <p><MdOutlineLiveHelp  className='text-[18px] text-orange-700 cursor-pointer'/></p>
        <p className='text-[12px]'><span className='text-orange-700 cursor-pointer text-[12px] underline font-bold'> Add live chat</span> connected with visitors free.</p>
      </div>
     
  </div>

               </div>
            </div>
               
               

        </div>
        <ToastContainer />
    </div>
  )
}
