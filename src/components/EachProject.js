import React from 'react'

export default function EachProject({src, name, className ,number, link}) {
  return (
    <div className={className}>
      <a href={link} target="_blank" rel='noreferrer'>
      <img src={src} alt={name} className="p-0 w-96 " />
      <h2 className='text-center text-3xl font-semibold'>{name} <button className='bg-pink-600 p-2 rounded text-white mt-2'>{number} </button> </h2>
    </a></div>
  )
}
