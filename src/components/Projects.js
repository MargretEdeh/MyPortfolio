import React, { useEffect } from "react";
// import DevArc from '../assets/DevArc.png'
import DecArc2 from "../assets/DecArc2.png";
import Todo from "../assets/Todo.png";
import CalPic from "../assets/CalPic.jpeg";
import EachProject from "./EachProject";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import port4 from "../assets/port4.png";
import port5 from "../assets/port5.png";
import port6 from "../assets/port6.png";
import port7 from "../assets/port7.png";
import port8 from "../assets/port8.png";
import {IoChevronForwardSharp} from 'react-icons/io5'
import {IoChevronBackSharp} from 'react-icons/io5'
import "aos/dist/aos.css";
import Aos from "aos";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.css';
// import 'swiped.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div id="project" data-aos="fade-right">
      <h1
        className=" text-4xl mx-4 md:text-6xl font-bold text-slate-900"
        id="#services"
        smooth
      >
        Latest Projects
      </h1>

      <div className="mt-20" >
      <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false
      }}
      pagination={{
        clickable: true
        
      }}
      navigation={true}
      className="swiper-container"

        >
          <SwiperSlide className="swiper-slide" >
            <img src={port1} alt='DevArc '/>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" >
            <img src={port2} alt='DevArc '/>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" >
            <img src={port3} alt='DevArc '/>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" >
            <img src={port4} alt='DevArc '/>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" >
            <img src={port5} alt='DevArc '/>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" >
            <img src={port6} alt='DevArc '/>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" >
            <img src={port7} alt='DevArc'/>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" >
            <img src={port8} alt='DevArc' />
          </SwiperSlide>
          
        </Swiper>
      </div>
      
      <div className="flex flex-col md:flex-row py-5 ">

        
        <EachProject
          src={DecArc2}
          name="Developer's Arc"
          link="https://my-exam-project-ruby.vercel.app/"
          number="1"
          className="w-80 mx-auto md:w-96 p-3 md:hover:p-5"
        />
        <EachProject
          src={Todo}
          name="Todo App"
          number="2"
          link="https://vue-d3nvpi.stackblitz.io"
          className="w-80 mx-auto mb-10 p-3 md:w-96 h-56 border border-slate-200 md:mt-20 md:hover:p-5 "
        />
        <EachProject
          src={CalPic}
          name="Theme Changing Cal"
          link="https://react-vgzpjq.stackblitz.io/"
          number="3"
          className="w-80 mx-auto md:w-96 p-3 md:mt-44 md:hover:p-5 "
        />
      </div>
        
    </div>
  );
}