import React, { useEffect,useState } from 'react'
 import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
 import {RxDotFilled} from 'react-icons/rx'
 import 'aos/dist/aos.css'
  import Aos from 'aos'

export default function Repos() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  const [myPosts, setMyPosts] = useState([])
  const [display , setDisplay]=useState(1)
  const total = myPosts.length
  const perDisplay = 1
  const totalDisplay = Math.ceil(total/perDisplay)
  const skip = display * perDisplay - perDisplay
  const nextDisplay=()=>{
    if(display < totalDisplay){
      setDisplay(display + 1)
    }
    else{
      setDisplay(1)
        }
  
  }
  const prevDisplay=()=>{
    if(display > 1){
      setDisplay(display - 1)
    }
    else{
      setDisplay(totalDisplay)
    }
  }
  const ClickDot=(i)=>{
    setDisplay(i)
  }

  async function getPosts(){
    const response = await fetch('https://api.github.com/users/MargretEdeh/repos')
    const data = await response.json()
    setMyPosts(data)
  }
  useEffect(()=>{
    getPosts()
  },[])
  return (
    <div id='repos' data-aos="fade-right" className='flex flex-col w-full '>
     <div className='mx-auto'> <h1 className='md:text-4xl text-2xl font-semibold text-slate-900'> List of GitHub Repos </h1></div>
      <div className=' mx-auto relative my-10 '>
        {myPosts.slice(skip, skip + perDisplay ).map((post , i)=>{
          return(
            <div key={i} className='md:w-[500px] w-80 mx-4 h-72 shadow-2xl rounded-lg px-20 py-8 bg-pink-200'>
              <h1 className='text-3xl '>{post.name} </h1>
              <h1 className='text-xl mb-5'>{post.description}</h1>
              <a href={post.html_url} className=' bg-pink-600 py-3 px-1 rounded-lg font-semibold text-white'>Link to Repo</a>
            </div>
          )
        })}
        <div onClick={nextDisplay} className='top-[50%] opacity-40  absolute right-0 -translate-x-0 translate-y-[-50%]  '>
          <AiOutlineDoubleRight className='text-4xl text-pink-600 mx-4 cursor-pointer '/>
        </div>
        <div onClick={prevDisplay} className='absolute  top-[50%] -left-2 opacity-40 -translate-x-0 translate-y-[-50%] '>
          <AiOutlineDoubleLeft className='text-4xl text-pink-600 mx-4 cursor-pointer'/>
        </div>
      </div>
      <div className='flex mx-auto items-center'>
        {myPosts.map((post, i)=>{
          const active = i + 1 === display ? 'text-pink-600 ' : 'text-pink-200 text-lg'
          return(
            <div key={i} className='flex flex-row'>
              <RxDotFilled onClick={()=>ClickDot(i + 1 )} className={`text-2xl ${active}`} />

            </div>
          )
        })}
      </div>
        
    </div>
  )
}


// AiOutlineDoubleRight
// AiOutlineDoubleLeft