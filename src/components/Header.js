import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// import FiMenu from "./FiMenu";
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';



export default function Header() {
    const [show, setShow] = React.useState(false);
    const menu = <FiMenu className="md:hidden text-3xl mr-3 text-pink-700"/>;
    const close = <FaTimes className="md:hidden text-3xl mr-3 text-pink-700"/>;
  return (
    <div className=" py-3 flex flex-col-reverse  md:flex md:flex-row md:items-center  md:justify-around">
      <div>
        <ul className={`md:flex md:items-center bg-pink-600 z-[-1] absolute md:static md:z-auto w-full md:bg-white  left-0 transition-all ease-in duration-300 ${show? 'left-[800px]':'right-0' }  `}>
          <li className="py-2 px-5 md:my-0 my-4">
            <Link className="duration-500" to="/">
              Home
            </Link>
          </li>
          <li className="py-2 px-5 md:my-0 my-4">
            <Link className="duration-500" to="/#about">
              About Me
            </Link>
          </li>
          <li className="py-2 px-5 md:my-0 my-4">
            <Link className="duration-500" to="/#services">
              Projects
            </Link>
          </li>
          <li>
          <button className="p-4 bg-gradient-to-r from-pink-600 to-pink-900 rounded-xl text-white font-semibold md:hidden ">
          Contact Me
        </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between" >
      <div className="bg-gradient-to-r from-white to-slate-300 w-32 h-20 p-4 rounded-tr-2xl">
        <h1 className="p-1 w-24 italic text-2xl flex  ml-4 font-semibold text-pink-700 ">
          Empress <span className="ml-1 not-italic font-bold">MG</span>
        </h1>
        
      </div>
      <span>
        <button onClick={() => setShow(!show)} className="md:hidden">{show? menu : close} </button>
        </span>
        </div>
      <div>
      <button className=" hidden md:flex p-4 bg-gradient-to-r from-pink-600 to-pink-900 rounded-xl text-white font-semibold  ">
          Contact Me
        </button>
      </div>
    </div>
  );
}
