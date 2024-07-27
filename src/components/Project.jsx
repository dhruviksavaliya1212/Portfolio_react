import React from "react";
import { projects } from "../assets/Api/languages";

const Project = () => {

  return (
    <section id="project">
      <div className="min-h-screen max-h-full overflow-hidden flex items-center justify-center w-full px-3 pb-8 pt-16 dark:bg-black/60 ">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="relative w-full h-[5rem] flex items-center justify-center ">
            <h1 className="text-6xl font-black tracking-[0.4em] uppercase opacity-15">
              Works{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
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
            className="  h-fit w-full lg:-mt-10 flex flex-wrap justify-center gap-x-12 sm:p-10"
          >
            {projects.map((item, index) => {
              return (
               <div key={index}
              data-aos="flip-up"
              data-aos-delay="400"
              className="w-[20rem] rounded sm:mx-4 my-2 p-3 shadow-md shadow-zinc-800 dark:shadow-zinc-500"
            >
              <div
                data-aos="zoom-out"
                data-aos-delay="500"
                className={`relative w-full h-fit rounded-lg `}
              >
                <img
                  src={item.img}
                  alt=""
                  className={`h-fit rounded-lg cursor-pointer transition-all duration-400`}
                />
                <div
                  className={`absolute top-[45%] left-[20%] text-md shadow-md shadow-zinc-500 dark:shadow-zinc-500 rounded-full `}
                >
                  
                </div>
              </div>
              <div className="w-full flex flex-col ">
                <div className=" w-full flex justify-center items-center">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="text-xl dark:text-zinc-400 text-gray-700 my-3 "
                >{item.name}</h1>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="650"
                  className="text-justify"
                >{item.desc}
                </p>
                <p data-aos="fade-down"
                  data-aos-delay="700" className=" mt-2 ">Technologies Used : </p>
                <div data-aos="fade-down"
                  data-aos-delay="750" className=" flex justify-evenly">
                <p className=" ml-2"><span>•</span> {item.technologies[0]}</p>
                <p className=""><span>•</span> {item.technologies[1]}</p>
                </div>
                <div data-aos="fade-down"
                  data-aos-delay="750" className=" flex justify-evenly">

                <p className={`${item.technologies[2]? "block ml-2":"hidden"  }`}><span>•</span> {item.technologies[2]}</p>
                <p className={`${item.technologies[3]? "block ml-2":"hidden"  }`}><span>•</span> {item.technologies[3]}</p>
                </div>
                <div className=" flex justify-evenly">
                <p className={`${item.technologies[4]? "block ":"hidden"  }`}><span>•</span> {item.technologies[4]}</p>
                <p className={`${item.technologies[5]? " opacity-100 ":" opacity-0"  }`}><span>•</span> {item.technologies[5]}</p>
                </div>
                
              <div className=" flex w-full justify-center items-center my-2">
              <a
                    href={item.url}
                    target="_blank"
                    className=" px-3 py-1 text-lg uppercase rounded-full bg-zinc-400 dark:bg-zinc-700 shadow-md shadow-zinc-500"
                  >
                    View Live Project
                  </a>
              </div>
              </div>
            </div> 
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
