'use client'
import React, { useContext, useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const provider = new GoogleAuthProvider();



import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { app } from '../FireBaseConfig/FireBase';
import { ContextApi } from '../Context/Context';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



export default function Modal6({getEmail,setEmail}) {
  let{get,set}= useContext(ContextApi)
  const auth = getAuth(app);
  let route=useRouter();  
 
  let myfunc =() =>{
   
   
   
    signInWithPopup(auth, provider)

  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    set(token)
      
  route.push("/") 
    toast.success('Login Successfully')
 
   
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
   
   
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    toast.error('Login Failed')
    // ...
  });
  //  useEffect(()=>{
  //   if(get!=='' && get!==undefined){
  //      route.push("/")
  
  //  }
  //  },[get])
  
  }

  return (
    <>
        <div className='bg-[rgba(0,0,0,0.5)] h-[100%] w-[100%] fixed  z-99' onClick={()=>setEmail(!getEmail)}>

        </div>
        <div className='bg-white h-[430px] w-[350px] fixed top-[60%] left-[50%] translate-x-[-50%]  translate-y-[-50%] shadow-lg z-9999 rounded-lg'>
           <p onClick={()=>setEmail(!getEmail)} className='p-2 cursor-pointer'><MdOutlineCancel  className='absolute right-[10px] top-[10px]  hover: bg-[#C0333D] text-white duration-75 rounded-[50%] text-[20px]  ' title='Remove'/></p>
           <div class="flex justify-center  min-h-screen">
  <div class=" shadow-md rounded px-8 mb-1    max-w-md">
    <h2 class="text-3xl font-bold mb-6 text-center text-white">
      <span class="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
       Contact Form
      </span>
    </h2>
    <form>
      <div class="mb-2">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
          <i class="fas fa-envelope mr-2"></i>Email
        </label>
        <div>
          <input id="email" type="email" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"/>
        </div>
      </div>
      <div class="mb-2">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
          <i class="fas fa-lock mr-2"></i>Password
        </label>
        <div>
          <input id="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password"/>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button type="" class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
        Ask Now
        </button>
      </div>
      <ToastContainer />
      <div class="text-center mt-2">
        <a href="#" class="text-gray-600 hover:underline">Forgot password?</a>
      </div>
    </form>
    <p class="text-center text-gray-600 mt-2">Don't have an account? <a href="#" class="text-blue-500 hover:underline">Sign up</a></p>
    <div class="mt-2">
      <p class="text-center text-gray-600">Or log in with:</p>
      <div class="flex justify-center mt-2">
        <button onClick={myfunc}  class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
        <FaGoogle/>
        </button>
        <a href="#" class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
        <FaTwitter />
        </a>
        <a href="#" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
        <FaFacebookF />
        </a>
      </div>
    </div>
  </div>
 
</div>
         


        </div>
    </>
  )
}
