'use client'
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react'
export let ContextApi = createContext()

export default function Context({children}) {
    const token = Cookies.get('data');
    let [get,set] =useState(token ?? '')
    let [Count,setCount] = useState()

    let obj = {Count,setCount,get,set}
    useEffect(()=>{
        if(get!=='' && get!==undefined){
            Cookies.set('data',get)
        }
    },[get])
  return (
       <ContextApi.Provider value={obj}>
        {children}
       </ContextApi.Provider>
  )
}
