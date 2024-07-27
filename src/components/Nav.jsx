import React, { useState } from "react";
import Dark from "./Dark";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaSquareGithub } from "react-icons/fa6";

const Nav = () => {
  const [click, setClick] = useState(false);

  function handleClicked() {
    setClick(click==false ? true : false);
  }
  return (
    <div className="relative">
      <div
        data-aos="fade-down"
        data-aos-duration="300"
        className=" lg:h-16 h-14 w-full fixed shadow-lg z-50 dark:bg-black/30 bg-zinc-400/30 shadow-zinc-400 dark:shadow-zinc-700 backdrop-blur-sm"
      >
        <div className="relative flex items-center justify-between  px-10 h-full w-full">
          <h1 data-aos="fade-down" data-aos-duration="400" className="text-3xl">
            Portfolio
          </h1>
          <div
            className={`relative lg:absolute lg:right-[20rem] xl:right-[25rem] lg:flex lg:h-full h-[40rem] mt-[45rem] lg:mt-0 justify-between gap-10 ${
              click == false ? "hidden" : "flex"
            } `}
          >
            <div className=" absolute -right-6 lg:h-full h-full bg-zinc-300/90 dark:bg-zinc-900/90 lg:bg-transparent lg:dark:bg-transparent lg:w-[32rem] w-[18rem] sm:w-[25rem] flex lg:flex-row flex-col justify-center items-center gap-5 text-lg ">
              <Link to="/" className="underline">
                Home
              </Link>
              <Link to="/about" className="underline">
                About Me
              </Link>
              <Link to="/language" className="underline">
                Skills
              </Link>
              <Link to="/project" className="underline">
                Project
              </Link>
              <Link to="/contact" className="underline">
                Contact
              </Link>
              <div className="flex flex-col lg:flex-row gap-5 ml-2 ">
              <a href="https://github.com/dhruviksavaliya1212" target="_blank">
                <FaSquareGithub className="text-4xl cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/dhruvik-savaliya-0520642b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <FaLinkedin  className="text-4xl cursor-pointer text-blue-700" />
            </a>
            </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="550"
            className=" absolute flex gap-10 items-center right-10"
          >
            
            <div className=" ">
              <Dark />
            </div>
            <div className="lg:hidden">
              <FaBars
                onClick={handleClicked}
                className={`${click == false ? "block" : "hidden"} text-2xl`}
              />
              <IoMdClose
                onClick={handleClicked}
                className={`${click == false ? "hidden" : "block"} text-2xl`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
