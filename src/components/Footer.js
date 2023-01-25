import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-pink-700 max-w-auto px-10 md:w-screen h-20 flex -ml-7 items-center justify-between '>
      <div className='flex'>
     <a  href="https://web.facebook.com/sagacious.edeh" target="_blank" rel="noreferrer" className="text-blue-500 px-1 hover:text-blue-700">
      <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="facebook" className='md:w-10 md:h-10' />
     </a>
     <a href="https://www.instagram.com/margretedeh/" target="_blank" rel="noreferrer" className="text-blue-500 px-1 hover:text-blue-700">
      <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="instagram" className='md:w-10 md:h-10'/></a>
      <a href="https://github.com/MargretEdeh" target="_blank" rel="noreferrer" className="text-blue-500 px-1 hover:text-blue-700">
      <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github" className='md:w-10 md:h-10'/>
      </a>
      <a href='https://twitter.com/EdehMargret' target="_blank" rel="noreferrer" className="text-blue-500 px-1 hover:text-blue-700">
        <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="twitter" className='md:w-10 md:h-10' />
      </a>
      </div>
      <div className='flex pl-10 font-semibold'>
        <h1>© 2023 Maggie. All Rights Reserved.</h1>
      </div>
    </div>
  )
}
