import React, { useRef } from 'react'
import { FaTimes } from "react-icons/fa";


export default function TheModal({showContact}) {
    const theRef= useRef()
    const SubmitForm=(e)=>{
        e.preventDefault()
        console.log('submitted')
    }
  return (
    <div className='fixed w-full z-[50] h-screen font-semibold bg-pink-600 opacity-90 top-0 -ml-0 md:-ml-6'>
        <FaTimes onClick={showContact} className='text-4xl text-slate-900 m-10 hover:text-5xl' />
     <form ref={theRef} onClick={SubmitForm} className='flex flex-col m-10 md:w-1/2 md:mx-auto my-10'  >
        <label htmlFor='name' className='text-white'>Name</label>
        <input type='text' name='name' id='name' className='bg-pink-300 text-white'/>
        <label htmlFor='email' className='text-white'>Email</label>
        <input type='email' name='email' id='email' className='bg-pink-300 text-white'/>
        <label htmlFor='message' className='text-white'>Message</label>
        <textarea name='message' id='message' cols='30' rows='10' className='bg-pink-300 text-white'></textarea>
        <button  type='submit' className='bg-pink-500 hover:bg-pink-900 my-10 p-2 text-white'>Submit</button>
     </form>

    </div>
  )
}
