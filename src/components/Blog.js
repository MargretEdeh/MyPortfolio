import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Blog() {
    useEffect(()=>{
        Aos.init({duration: 2000})
    })
    const [myBlog, setMyBlog] = useState([])
    const query = `
    query {
        user(username:"margretedeh"){
          publication{
            posts(page:0){
              title
              brief
              slug
              coverImage
            }
          }
        }
        
      }
    `
    useEffect(()=>{
       FetchPosts()
    },[])

    const FetchPosts=async()=>{
        const res= await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query}),
        })
        const data = await res.json()
        setMyBlog(data.data.user.publication.posts)
    }
  return (
    <div data-aos="fade-right" id='blog' >
        <h1 className='text-5xl font-bold text-center text-slate-900 '>My Blog</h1>
        <div className='mx-auto flex flex-col md:flex-row' >
            {myBlog.map((post, i )=>{
                return(
                    <div className='md:w-[500px] w-96 my-10 md:my-20 mx-auto bg-pink-200 shadow-2xl px-10 py-10' key={i}>
                        <img className='w-96 max-w-full h-auto' src={post.coverImage} alt=""/>
                        <h1 className='text-2xl font-semibold text-slate-800' >{post.title}</h1>
                        <p className='text-lg py-4'>{post.brief}</p>
                        <a href={`https://margretedeh.hashnode.dev/${post.slug}`} className='bg-pink-600 py-3 px-2 rounded-lg font-semibold text-white'>Read More</a>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}
