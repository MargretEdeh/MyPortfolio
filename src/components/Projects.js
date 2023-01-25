  import React, { useEffect } from 'react'
  // import DevArc from '../assets/DevArc.png'
  import DecArc2 from '../assets/DecArc2.png'
  import Todo from '../assets/Todo.png'
  import CalPic from '../assets/CalPic.jpeg'
  import EachProject from './EachProject'
  import 'aos/dist/aos.css';
import Aos from "aos"

  export default function Projects() {
    useEffect(()=>{
      Aos.init({duration:2000})
    })
    return (
      <div  id='project' data-aos="fade-right"> 
          <h1 className=' text-4xl mx-4 md:text-6xl font-bold text-slate-900' id='#services' smooth >Latest Projects</h1>
          <div className='flex flex-col md:flex-row py-20 '>
          <EachProject src={DecArc2} name="Developer's Arc" link="https://my-exam-project-ruby.vercel.app/" number="1" className="w-96 p-3 md:hover:p-5" />
          <EachProject src={Todo} name="Todo App" number="2" link="https://vue-d3nvpi.stackblitz.io" className="w-96 mb-10 p-3 h-56 border border-slate-200 md:mt-20 md:hover:p-5 " />
          <EachProject src={CalPic} name="Theme Changing Cal" link="https://react-vgzpjq.stackblitz.io/" number="3" className="w-96 p-3 md:mt-44 md:hover:p-5 " />
          </div>
        
      </div>
    )
  }









  // <div>
  //             <div className='flex flex-col  md:flex-row my-10 md:items-center md:justify-center '>
  //                 <div className='w-full  flex flex-col items-center md:w-1/2 '>
  //                     <h1 className='text-2xl flex items-center mb-2 md:text-4xl font-bold text-slate-900'>Developer's Arc  <button className='bg-pink-600 w-10 h-10 ml-3 rounded-full  text-center '>1</button> </h1>
  //                     <img src={DecArc2} alt='DevArc' className= ' object-cover max-w-full h-auto w-80'/>                    
  //                     </div>
  //                     <div className='w-full  flex flex-col md:w-3/4  rounded-xl items-center  mt-10  md:mt-56   '>
  //                     <h1 className='text-2xl  
  //                     md:text-4xl font-bold text-slate-900 flex items-center mr-4'>Project Todo App  <button className='bg-pink-600 w-10 h-10 ml-3 rounded-full  text-center  '>2</button>  </h1>
  //                     <img src={Todo} alt='Todo' className= ' object-cover  max-w-full h-auto w-96'/>
                      
  //                     </div>
  //                     <div className='w-full  flex flex-col items-center mt-0 md:w-1/2'>
  //                     <h1 className='text-2xl  mb-2  
  //                     md:text-4xl font-bold text-slate-900 flex items-center mr-4'>Theme changing Cal <button className='bg-pink-600 w-10 h-10 ml-3 rounded-full  text-center '>3</button>  </h1>
  //                     <img src={CalPic} alt='Todo' className= ' object-cover max-w-full h-auto w-96'/>
                      
  //                     </div>

  //                 </div>
  //         </div>