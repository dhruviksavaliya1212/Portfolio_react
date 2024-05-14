import React from "react";
import img from "../assets/personal.png";

const About = () => {
  return (
    <div className='h-fit overflow-hidden flex items-center justify-center w-full bg-[url("https://img.freepik.com/free-vector/gradient-white-monochrome-background_23-2149052421.jpg?t=st=1715603247~exp=1715606847~hmac=4467b09bcdeda26e7334f52647ede81da63ff674c993385a9e5492acb30afead&w=900")] dark:bg-[url("https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149159609.jpg?w=900&t=st=1715664384~exp=1715664984~hmac=c984c7a25a0309100af2a82cba2b64072562b33ec59b4a3591e7fe0eb1ed3845")] bg-cover bg-center px-3'>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="relative w-full h-[5rem] font-['hello'] flex items-center justify-center ">
          <h1 className="text-6xl font-black  tracking-wider uppercase opacity-15">
            Resume{" "}
          </h1>
          <div className="uppercase text-4xl w-full absolute flex items-center justify-center">
            <span className="">
              About <span className="dark:text-gray-400 text-gray-600">Me</span>
            </span>
          </div>
        </div>
        <div className="lg:h-[30rem] h-fit mt-1 lg:-mt-0 flex flex-col-reverse lg:flex-row lg:w-[65rem] xl:w-[73rem] w-full sm:w-[90vw] md:w-[80vw] sm:mx-[7vw] md:mx-[10vw] lg:mx-0  dark:bg-black/30 bg-zinc-400/30 rounded-xl shadow-lg border-gray-500 dark:shadow-zinc-600 shadow-zinc-700 font-['hello2']">
          <div className="h-full w-full sm:pl-10 pl-3 py-5 font-['hello']">
            <div className=" w-full flex justify-center items-center">
              <h1 className="uppercase text-2xl lg:mt-5 ">Personal infos</h1>
            </div>
            <div className="h-fit w-full lg:mt-5 mt-3 flex justify-center items-center">
              <div className="h-full w-[15rem] hidden sm:block ">
                <h1 className=" text-[17px] font-thin my-5 dark:text-zinc-400 text-gray-600">
                  First Name :{" "}
                  <span className=" dark:text-white text-black">Dhruvik</span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  City :{" "}
                  <span className=" dark:text-white text-black">Surat</span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Age :{" "}
                  <span className=" dark:text-white text-black">19 Years</span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Phone :{" "}
                  <span className=" dark:text-white text-black">
                    +917778031972
                  </span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Freelance :{" "}
                  <span className=" dark:text-white text-black">Available</span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Linkdin :{" "}
                  <span className=" dark:text-white text-black">
                    Dhruvik Savaliya
                  </span>
                </h1>
              </div>
              <div className="h-full w-[20rem] hidden sm:block">
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Last Name :{" "}
                  <span className=" dark:text-white text-black">Savaliya</span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Date of Birth :{" "}
                  <span className=" dark:text-white text-black">
                    12/12/2004
                  </span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Nationality :{" "}
                  <span className=" dark:text-white text-black">India</span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Email :{" "}
                  <span className=" dark:text-white text-black">
                    savaliyadhruvik61@gmail.com
                  </span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Languages :{" "}
                  <span className=" dark:text-white text-black">
                    English,Hindi,Gujarati
                  </span>
                </h1>
                <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                  Hobbies :{" "}
                  <span className=" dark:text-white text-black">
                    Travel,Explore,Read
                  </span>
                </h1>
              </div>
              <div className="h-full w-full bg-red-500 sm:hidden flex items-center justify-center">
                <div className="h-full w-fit  ">
                  <h1 className=" text-[17px] font-thin my-3 dark:text-zinc-400 text-gray-600">
                    First Name :{" "}
                    <span className=" dark:text-white text-black">Dhruvik</span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Last Name :{" "}
                    <span className=" dark:text-white text-black">
                      Savaliya
                    </span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Nationality :{" "}
                    <span className=" dark:text-white text-black">India</span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    City :{" "}
                    <span className=" dark:text-white text-black">Surat</span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Age :{" "}
                    <span className=" dark:text-white text-black">
                      19 Years
                    </span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Phone :{" "}
                    <span className=" dark:text-white text-black">
                      +917778031972
                    </span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Email :{" "}
                    <span className=" dark:text-white text-black">
                      savaliyadhruvik61@gmail.com
                    </span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Freelance :{" "}
                    <span className=" dark:text-white text-black">
                      Available
                    </span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Languages :{" "}
                    <span className=" dark:text-white text-black">
                      English,Hindi,Gujarati
                    </span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Hobbies :{" "}
                    <span className=" dark:text-white text-black">
                      Travel,Explore,Read
                    </span>
                  </h1>
                  <h1 className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600">
                    Linkdin :{" "}
                    <span className=" dark:text-white text-black">
                      Dhruvik Savaliya
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
            <button
              type="button"
              className="uppercase  px-4 py-2 my-4 mx-4  dark:bg-zinc-700 shadow-md dark:shadow-zinc-500 shadow-zinc-800 bg-zinc-500 text-lg rounded-full"
            >
              Download CV
            </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
          <div className="h-fit w-full md:w-[40rem] lg:w-[25rem] xl:w-[28rem]">
            <img src={img} alt="" className="h-full w-full" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
