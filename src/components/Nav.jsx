import React, { useState } from "react";
import Dark from "./Dark";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const[click,setClick] = useState(false);

  function handleClicked() {
    setClick(click==false?true:false);
  }
  return (
    <div className="relative">
      <div data-aos="fade-down" data-aos-duration="300" className=" lg:h-16 h-14 w-full fixed shadow-lg z-50 dark:bg-black/30 bg-zinc-400/30 shadow-zinc-400 dark:shadow-zinc-700">
        <div className="relative flex items-center justify-between  px-10 h-full w-full">
          <h1 data-aos="fade-down" data-aos-duration="400" className="text-3xl">Logo</h1>
          <div className={` lg:absolute lg:right-[20rem] xl:right-[25rem] lg:flex lg:h-full h-[40rem] mt-[46rem] lg:mt-0 justify-between gap-10 ${click == false?"hidden":"flex"} `}>
            <div className=" lg:h-full h-full bg-zinc-300 dark:bg-black lg:bg-transparent lg:dark:bg-transparent lg:w-[32rem] w-[70vw] sm:w-[25rem] flex lg:flex-row flex-col justify-center items-center gap-10 text-lg ">
              <a href="#" className="underline">Home</a>
              <a href="#about" className="underline">About Me</a>
              <a href="#language" className="underline">Skills</a>
              <a href="#project" className="underline">Project</a>
              <div data-aos="fade-down" data-aos-duration="500" className=" text-md shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full ">
                <a 
                  href="#contact"
                  className=" px-4 py-1 uppercase rounded-full bg-zinc-400 dark:bg-zinc-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="550" className=" absolute flex gap-10 items-center right-10">
            <div className=" ">
              <Dark />
            </div>
            <div className="lg:hidden">
              <FaBars onClick={handleClicked} className={`${click == false?"block":"hidden"} text-2xl`}/>
              <IoMdClose onClick={handleClicked} className={`${click == false?"hidden":"block"} text-2xl`}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
