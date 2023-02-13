import React, { useEffect } from "react";
import Tools from "./Tools";
import 'aos/dist/aos.css';
import Aos from "aos"
// import { FaReact } from 'react-icons/fa';
// import { FaNodeJs } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';
// import { FaCss3Alt } from 'react-icons/fa';
// import { FaJsSquare } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import { FaGitAlt } from 'react-icons/fa';
// import { FaNpm } from 'react-icons/fa';

export default function Home() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div className="px-5 pt-10 flex flex-col lg:flex-row-reverse  md:justify-between overflow-hidden">
      <div
        className='w-44  md:w-96 md:h-80  md:mr-32 mx-auto lg:ml-5 md:mt-20 md:transform hover:scale-125 hover:-rotate-12
            hover:bg-pink-700 transition 
            ease-out duration-500"  bg-pink-600 h-44 rounded-xl md:rotate-12 shadow-xl'
      >
        <img
          className="max-w-full h-auto w-32 md:w-60 md:my-10  mx-auto my-6 "
          src="https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/320575675_492531326372097_9024695664506183370_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFJbETO1saewsRpYNQzSrJiz4kilq6qGoXPiSKWrqoahSvopRXBvHfodIG6I3-Wv4wVaV3wj48a2UyEgwdLtSpJ&_nc_ohc=hgCKe-x9XZgAX-WS6RJ&tn=rnyLt2z1nWI-t-dl&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AfDrwAu4KvBJaCc3imgEmAj1BL0evDJ-RqJVp4cVLxk3BQ&oe=63EEDDB1"
          alt="Margret Edeh"
        />
      </div>
      <div className="my-14 md:my-20 flex flex-col" data-aos="fade-right">
        <h1 className="text-5xl md:text-7xl font-semibold ">
          Hello!! I Am <br />{" "}
          <span className="text-5xl text-pink-600 md:text-8xl">Margret Edeh </span>
        </h1>
        <p className="py-4">
          I am a FrontEnd Developer and a Technical Writer with over 12 months
          of experience{" "}
        </p>
        <button  className="bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl w-40 mb-10  hover:animate-bounce duration-100 text-white font-semibold p-4">
          Hire Me
        </button>
        <div className="  grid-cols-2 inline-grid md:grid-cols-3 mt-1" >
        <Tools name="React" logo={<img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react"/>}/>
      <Tools name="HTML5" logo={<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html5"/>}/>
      <Tools name="CSS3" logo={<img src="https://img.icons8.com/color/48/000000/css3.png" alt="css3"/>}/>
      <Tools name="JS" logo={<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="javascript"/>}/>
      <Tools name="Git" logo={<img src="https://img.icons8.com/color/48/000000/git.png" alt="git"/>}/>
      <Tools name="Vue" logo={<img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="vue"/>}/>
      </div>
      </div>
    </div>
  );
}
