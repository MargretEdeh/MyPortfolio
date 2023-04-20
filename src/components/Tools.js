import React from 'react'

export default function Tools({name, logo}) {
  return (
    <div className=' px-1 md:px-3 py-2 m-5 w-32  justify-between  md:w-36 mr-8 rounded-xl bg-slate-900 text-pink-700 flex items-center '>
      <h1 className='pr-0 md:pr-2 font-bold shadow flex justify-between w-14'>{name} </h1>
     <div className='w-10 h-10' > {logo} </div>
    </div>
  )
}
