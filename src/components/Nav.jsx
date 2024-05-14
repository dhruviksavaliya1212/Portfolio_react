import React, { useState } from "react";
import Dark from "./Dark";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const[click,setClick] = useState(false);

  function handleClicked() {
    setClick(click==false?true:false);
    console.log("click"+click);
  }
  return (
    <div className="">
      <div className=" lg:h-16 h-14 w-full fixed shadow-lg dark:bg-black/40 bg-zinc-400/30 shadow-zinc-400 dark:shadow-zinc-700">
        <div className="relative flex items-center justify-between px-10 h-full w-full">
          <h1 className="text-3xl font-bold">Logo</h1>
          <div className={` lg:absolute lg:right-[20rem] xl:right-[25rem] lg:flex lg:h-full h-[25rem] mt-[30rem] lg:mt-0 justify-between gap-10 ${click == false?"hidden":"flex"} `}>
            <div className=" lg:h-full h-full bg-zinc-300 dark:bg-black/80 lg:bg-transparent lg:dark:bg-transparent lg:w-[32rem] w-[15rem] flex lg:flex-row flex-col justify-center items-center gap-10 text-lg font-semibold ">
              {/* <a href="">Home</a>
              <a href="">About Me</a>
              <a href="">Skills</a>
              <a href="">Project</a> */}
              {["Home", "About Me", "Skills", "Project"].map((item, index) => (
                <a href="" key={index}>
                  {item}
                </a>
              ))}

              <div className=" text-md font-semibold shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full ">
                <a
                  href=""
                  className=" px-4 py-1 uppercase rounded-full bg-zinc-400 dark:bg-zinc-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className=" absolute flex gap-10 items-center right-10">
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