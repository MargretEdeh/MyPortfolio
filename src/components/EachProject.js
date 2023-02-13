import React from 'react'

export default function EachProject({src, name, className ,number, link}) {
  return (
    <div className={className}>
      <a href={link} target="_blank" rel='noreferrer'>
      <img src={src} alt={name} className="p-0 my-7 w-96 " />
      <h2 className='text-center text-3xl  font-semibold'>{name} <button className='bg-pink-600 py-0 w-10 h-10 rounded-full text-white '>{number} </button> </h2>
    </a></div>
  )
}
