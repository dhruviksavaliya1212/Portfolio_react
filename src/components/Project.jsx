import React from "react";
import img1 from '../assets/Project/Project-1.webp'
import img2 from '../assets/Project/Project2.jpeg'
import img3 from '../assets/Project/project3.jpeg'
import { useState } from "react";

const Project = () => {
  const [hover,setHover]= useState(false);
  const [hover1,setHover1]= useState(false);
  const [hover2,setHover2]= useState(false);

  function handleHover(){
    setHover (hover == false?true:false);
  }
  function handleHover1(){
    setHover1 (hover1 == false?true:false);
  }
  function handleHover2(){
    setHover2 (hover2 == false?true:false);
  }
  return (
    <section id="project">
      <div className='h-fit overflow-hidden flex items-center justify-center w-full bg-[url("https://img.freepik.com/free-vector/gradient-white-monochrome-background_23-2149052421.jpg?t=st=1715603247~exp=1715606847~hmac=4467b09bcdeda26e7334f52647ede81da63ff674c993385a9e5492acb30afead&w=900")] dark:bg-[url("https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149159609.jpg?w=900&t=st=1715664384~exp=1715664984~hmac=c984c7a25a0309100af2a82cba2b64072562b33ec59b4a3591e7fe0eb1ed3845")] bg-cover bg-center px-3 pb-8'>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="relative w-full h-[5rem] font-['hello'] flex items-center justify-center ">
          <h1 className="text-6xl font-black tracking-[0.4em] uppercase opacity-15">
            Works{" "}
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="uppercase text-4xl w-full absolute flex items-center justify-center"
          >
            <span className="">
              My{" "}
              <span className="dark:text-gray-400 text-gray-600">
                Portfolio
              </span>
            </span>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className=" h-fit mt-1 lg:-mt-0 flex justify-center items-center flex-col lg:flex-row flex-wrap lg:w-[65rem] xl:w-[73rem] w-full sm:w-[90vw] md:w-[80vw] sm:mx-[7vw] md:mx-[10vw] lg:mx-0  dark:bg-black/30 bg-zinc-400/30 rounded-xl shadow-lg border-gray-500 dark:shadow-zinc-600 shadow-zinc-700 font-['hello'] sm:px-10 py-5"
        >
          <div className="w-[20rem] h-fit rounded-md sm:mx-4 my-2 p-2 shadow-inner shadow-zinc-800 dark:shadow-zinc-100">
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`relative w-full h-fit rounded-lg `}>
              <img src={img1} alt=""  className={`h-fit rounded-lg cursor-pointer transition-all duration-400 ${hover == false ? "scale-100":"scale-95"} ${hover == false ? "blur-none":"blur-sm"}`}/>
              <div className={`absolute top-1/2 left-1/4 text-md shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full ${ hover == false ? "hidden": "flex"}`}>
                <a 
                  href="https://react-shopping-1.netlify.app/" target="_blank"
                  className=" px-4 py-1 text-lg uppercase rounded-full bg-zinc-400 dark:bg-zinc-700"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-xl dark:text-zinc-400 text-gray-700 my-2 "> E-Commerce website </h1>
              <p className="text-center">
                {" "}
                Responsive animated website with add to cart functionality and
                light-dark theme using React js and Tailwind css
              </p>
            </div>
          </div>
          <div className="w-[20rem] h-fit min-h-[21rem] rounded-md sm:mx-4 my-2 p-2 shadow-inner shadow-zinc-800 dark:shadow-zinc-100">
            <div onMouseEnter={handleHover1} onMouseLeave={handleHover1} className={`relative w-full h-fit rounded-lg `}>
              <img src={img2} alt=""  className={`h-fit rounded-lg cursor-pointer transition-all duration-400 ${hover1 == false ? "scale-100":"scale-95"} ${hover1 == false ? "blur-none":"blur-sm"}`}/>
              <div className={`absolute top-1/2 left-1/4 text-md shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full ${ hover1 == false ? "hidden": "flex"}`}>
                <a 
                  href="https://ochireact.netlify.app/" target="_blank"
                  className=" px-4 py-1 text-lg uppercase rounded-full bg-zinc-400 dark:bg-zinc-700"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-xl dark:text-zinc-400 text-gray-700 my-2 "> Ochi website clone </h1>
              <p className="text-center">
                {" "}
                Responsive animated ochi clone website using React js and Tailwind css
              </p>
            </div>
          </div>
          <div className="w-[20rem] h-fit rounded-md sm:mx-4 my-2 p-2 shadow-inner shadow-zinc-800 dark:shadow-zinc-100">
            <div onMouseEnter={handleHover2} onMouseLeave={handleHover2} className={`relative w-full h-fit rounded-lg `}>
              <img src={img3} alt=""  className={`h-fit rounded-lg cursor-pointer transition-all duration-400 ${hover2 == false ? "scale-100":"scale-95"} ${hover2 == false ? "blur-none":"blur-sm"}`}/>
              <div className={`absolute top-1/2 left-1/4 text-md shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full ${ hover2 == false ? "hidden": "flex"}`}>
                <a 
                  href="https://github.com/dhruviksavaliya1212/Printerest_clone" target="_blank"
                  className=" px-4 py-1 text-lg uppercase rounded-full bg-zinc-400 dark:bg-zinc-700"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-xl dark:text-zinc-400 text-gray-700  my-2 "> Printerest clone website </h1>
              <p className="text-center">
                {" "}
                Responsive animated website with login and register with add image functionality using Node,Express,Mongodb and Tailwind css
              </p>
            </div>
          </div>
          {/* <div className="w-[20rem] h-fit rounded-md sm:mx-4 my-2 p-2 shadow-inner shadow-zinc-800 dark:shadow-zinc-100">
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`relative w-full h-fit rounded-lg `}>
              <img src={img1} alt=""  className={`h-fit rounded-lg cursor-pointer transition-all duration-400 ${hover == false ? "scale-100":"scale-95"} ${hover == false ? "blur-none":"blur-sm"}`}/>
              <div className={`absolute top-1/2 left-1/4 text-md shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full ${ hover == false ? "hidden": "flex"}`}>
                <a 
                  href=""
                  className=" px-4 py-1 text-lg uppercase rounded-full bg-zinc-400 dark:bg-zinc-700"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-lg my-2 "> E-Commerce website </h1>
              <p className="text-center">
                {" "}
                Responsive animated website with add to cart functionality and
                light-dark theme using React js and Tailwind css
              </p>
            </div>
          </div>
          <div className="w-[20rem] h-fit rounded-md sm:mx-4 my-2 p-2 shadow-inner shadow-zinc-800 dark:shadow-zinc-100">
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`relative w-full h-fit rounded-lg `}>
              <img src={img1} alt=""  className={`h-fit rounded-lg cursor-pointer transition-all duration-400 ${hover == false ? "scale-100":"scale-95"} ${hover == false ? "blur-none":"blur-sm"}`}/>
              <div className={`absolute top-1/2 left-1/4 text-md shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full ${ hover == false ? "hidden": "flex"}`}>
                <a 
                  href=""
                  className=" px-4 py-1 text-lg uppercase rounded-full bg-zinc-400 dark:bg-zinc-700"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-lg my-2 "> E-Commerce website </h1>
              <p className="text-center">
                {" "}
                Responsive animated website with add to cart functionality and
                light-dark theme using React js and Tailwind css
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Project;
