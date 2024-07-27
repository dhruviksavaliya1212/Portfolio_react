import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img from "../assets/img1.png";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Dhruvik Savaliya"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 50,
  });
  return (
    <div className=' relative min-h-screen max-h-full overflow-hidden flex pt-24 pb-10 lg:pt-16 items-center justify-center w-full dark:bg-black/60 '>
      <div
        data-aos="zoom-in"
        data-aos-duration="300"
        className="lg:h-[30rem] h-[50rem] sm:h-[50rem] flex flex-col-reverse lg:flex-row lg:w-[60rem] xl:w-[70rem] w-full mx-3 sm:mx-[7vw] md:mx-[10vw] lg:mx-0 my-9  "
      >
        <div className="h-fit  lg:w-[40rem] w-full sm:px-10 -mb-10 sm:mb-0">
          <div className="flex items-center justify-center flex-col lg:gap-10 gap-7">
            <h1
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-2xl lg:mt-16 mt-10 "
            >
              Hello Everyone!
            </h1>
            <h1
              data-aos="fade-down"
              data-aos-delay="250"
              className="sm:text-4xl text-[28px] font-['Verdana']  font-bold"
            >
              I'm{" "}
              <span className="typer dark:text-zinc-400 text-gray-600 font-['poetsen_one'] font-light">
                {text}
              </span>{" "}
              <span>
                <Cursor />
              </span>
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="300"
              className=" text-lg sm:mx-10 mx-[5vw] md:mx-[8vw] lg:mx-1 leading-normal text-justify"
            >
              Results-driven and enthusiastic full stack developer with
              a strong foundation in frontend and backend development. Proficient in HTML, CSS,
              JS, and various frameworks such as React-js, Next-js, Node-js, Express-js etc.
              Possess excellent problem-solving skills, with a keen eye for
              detail and a passion for learning and growth. Seeking a dynamic
              and collaborative environment where I can apply my skills and
              knowledge to deliver highquality solutions.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-delay="400"
          className="lg:h-full h-[25rem] flex items-center justify-center lg:w-[30rem] w-full  mt-7 lg:mt-0"
        >
          <div
            className={`lg:h-[25rem] lg:w-[20rem] h-[22rem] w-[17rem] rounded-xl shadow-lg shadow-zinc-700 dark:shadow-zinc-600  mt-5`}
          >
            <img
              src={img}
              alt=""
              srcset=""
              className=" photo h-full w-full rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
