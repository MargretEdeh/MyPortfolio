import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";

export default function AboutMe() {
    useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])
  return (
    <div id="about" className="flex flex-col md:flex-row  md:my-20 " data-aos="fade-down">
      <h1 className="md:pl-5 text-4xl mx-auto  md:w-3/4 md:text-7xl text-slate-600 font-bold">About Me</h1>
      <div className="w-1 h-96 bg-slate-400 rounded-md hidden md:flex " ></div>
      <h1 className=" text-xl mx-auto italic text-center py-10 md:w-2/3 md:px-20 text-slate-600 ">
        {" "}
        I am a front-end developer with experience in building pixel-perfect web
        applications, slick and efficient in HTML5, CSS, Tailwind CSS, React js,
        Vue js, javascript and various front-end technologies. Experience in git
        version control and agile methodology. 
        <br/>
        <br/>
        Ability to multitask and work
        with teams to build an efficient website. skilled in understanding a
        task, bringing out the best solutions and a good technical writer. I am
        also passionate about open sourcing, I also have a thing for aesthetic
        design.{" "}
      </h1>
    </div>
  );
}
