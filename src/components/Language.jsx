import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { skills } from "../assets/Api/languages";

const Language = () => {
  return (
    <section id="language">
      <div className="min-h-screen overflow-hidden flex items-center justify-center w-full px-3 pb-8 pt-16 dark:bg-black/60 ">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="relative w-full h-[5rem]  flex items-center justify-center ">
            <h1 className="text-6xl font-black tracking-wider uppercase opacity-15">
              Languages{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="uppercase text-4xl w-full absolute flex items-center justify-center"
            >
              <span className="">
                My{" "}
                <span className="dark:text-gray-400 text-gray-600">Skills</span>
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className=" h-fit w-full lg:-mt-10 flex flex-wrap justify-center gap-x-12 sm:p-10"
          >
            {skills.map((item, index) => {
              return (
                <div
                  data-aos={item.dataAos}
                  data-aos-delay={item.dataAosDelay}
                  key={index}
                  className=" w-[300px] h-fit rounded my-2 p-3 shadow-md shadow-zinc-800 dark:shadow-zinc-500"
                >
                  <div className="w-full flex flex-col  gap-2 justify-center items-center">
                    <h1>{item.name}</h1>

                    <div className=" w-full border-2 border-zinc-600 rounded-full ">
                      <ProgressBar
                        completed={item.complete}
                        bgColor={item.color}
                        animateOnRender={true}
                      />
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

export default Language;
