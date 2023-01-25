import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import FiMenu from "./FiMenu";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import 'aos/dist/aos.css';
import Aos from "aos"
import TheModal from "./TheModal";

export default function Header() {
  const [showContact, setShowContact] = React.useState(false);
  const toogleContact = () => {
    setShowContact(!showContact);
  }
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  const [show, setShow] = React.useState(false);
  const toogle = () => {
    setShow(!show);
  }
  const menu = <FiMenu className="md:hidden text-3xl mr-3 text-pink-700" />;
  const close = <FaTimes className="md:hidden text-3xl mr-3 text-pink-700" />;
  return (
    <div data-aos="fade-down" className=" py-3 flex flex-col-reverse  md:flex md:flex-row md:items-center  md:justify-between">
      <div>
        <ul
          className={`md:flex font-medium md:items-center bg-white absolute md:static  md:z-auto w-full md:bg-white  left-0 transition-all ease-in duration-300 opacity-90 ${
            show ? "top-24" : "top-[-300px] "
          }  `}
        >
          <li className="py-2 px-5 md:my-0 my-4 hidden">
            <Link className="duration-500" to="/">
              Home
            </Link>
          </li>
          <li className="py-2 px-5 md:my-0 my-4 hover:bg-pink-300 md:rounded-xl ">
            <Link className="duration-500" to="#about"  onClick={toogle} >
              About Me
            </Link>
          </li>
          <li className="py-2 px-5 md:my-0 my-4  hover:bg-pink-300 md:rounded-xl ">
            <Link className="duration-500" to="#project"  onClick={toogle}>
              Projects
            </Link>
          </li>
          <li className="py-2 px-5 md:my-0 my-4  hover:bg-pink-300 md:rounded-xl ">
            <Link className="duration-500" to="#blog"  onClick={toogle}>
              Blog
            </Link>
          </li>
          <li className="py-2 px-5 md:my-0 my-4  hover:bg-pink-300 md:rounded-xl ">
            <Link className="duration-500" to="#repos"  onClick={toogle}>
              Repos
            </Link>
          </li>
          <li>
            <button onClick={toogleContact} className="p-4 mx-3 mb-5 bg-gradient-to-r from-pink-600 to-pink-900 rounded-xl text-white font-semibold md:hidden ">
              Contact Me
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between ">
        <div className="  md:items-start md:w-72">
          <h1 className="p-1 w-24 italic text-2xl flex   ml-1 font-semibold text-pink-700 ">
            Empress <span className=" not-italic font-bold">MG</span>
          </h1>
        </div>
        <span>
          <button onClick={() => setShow(!show)} className="md:hidden">
            {show ? close : menu}{" "}
          </button>
        </span>
      </div>
      <div>
        <button onClick={toogleContact} className=" hidden md:flex p-4 bg-gradient-to-r from-pink-600 to-pink-900 rounded-xl text-white font-semibold  ">
          Contact Me
        </button>
      </div>
      { showContact && 
        <TheModal showContact={toogleContact} />
      

      }
    </div>
  );
}
