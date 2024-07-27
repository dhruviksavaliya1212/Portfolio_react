import React from "react";
import resume from "../assets/CV/resumefullstack.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="relative min-h-screen max-h-fit overflow-hidden flex items-center justify-center w-ful px-3 pb-8 pt-16 dark:bg-black/60 ">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="relative w-full h-[5rem] flex items-center justify-center ">
            <h1 className="text-6xl font-black  tracking-wider uppercase opacity-15">
              Resume{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="uppercase text-4xl w-full absolute flex items-center justify-center"
            >
              <span className="">
                About{" "}
                <span className="dark:text-gray-400 text-gray-600">Me</span>
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="lg:h-[25rem] h-fit mt-1 lg:-mt-0 flex flex-col-reverse lg:flex-row lg:w-[65rem] xl:w-[73rem] w-full sm:w-[90vw] md:w-[80vw] sm:mx-[7vw] md:mx-[10vw] lg:mx-0 "
          >
            <div className="h-full w-full sm:pl-10 pl-3 py-5">
              <div className=" w-full flex justify-center items-center">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="uppercase text-2xl lg:mt-5 "
                >
                  Personal infos
                </h1>
              </div>
              <div className="h-fit w-full lg:mt-5 mt-3 flex justify-center items-center">
                <div
                  data-aos="flip-left"
                  data-aos-delay="200"
                  className="h-full w-[15rem] hidden sm:block "
                >
                  <h1 className=" text-[17px] font-thin my-5 dark:text-zinc-400 text-gray-600">
                    First Name :{" "}
                    <span className=" dark:text-zinc-100 text-black">
                      Dhruvik
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    City :{" "}
                    <span className=" dark:text-zinc-100 text-black">
                      Surat
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Age :{" "}
                    <span className=" dark:text-zinc-100 text-black">
                      19 Years
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Phone :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      +917778031972
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Freelance :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      Available
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Linkdin :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      Dhruvik Savaliya
                    </span>
                  </h1>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-delay="200"
                  className="h-full w-[20rem] hidden sm:block"
                >
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Last Name :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      Savaliya
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Date of Birth :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      12/12/2004
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Nationality :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      India
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Email :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      savaliyadhruvik61@gmail.com
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Languages :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      English,Hindi,Gujarati
                    </span>
                  </h1>
                  <h1 className=" text-[17px] my-5 dark:text-zinc-400 text-gray-600">
                    Hobbies :{" "}
                    <span className=" dark:text-zinc-200 text-black">
                      Travel,Explore,Read
                    </span>
                  </h1>
                </div>
                <div className="h-full w-full sm:hidden flex items-center justify-center">
                  <div className="h-full w-fit  ">
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] font-thin my-3 dark:text-zinc-400 text-gray-600"
                    >
                      First Name :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        Dhruvik
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Last Name :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        Savaliya
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Nationality :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        India
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      City :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        Surat
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Age :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        19 Years
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Phone :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        +917778031972
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Email :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        savaliyadhruvik61@gmail.com
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Freelance :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        Available
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Languages :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        English,Hindi,Gujarati
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Hobbies :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        Travel,Explore,Read
                      </span>
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="300"
                      className=" text-[17px] mb-3 dark:text-zinc-400 text-gray-600"
                    >
                      Linkdin :{" "}
                      <span className=" dark:text-zinc-200 text-black">
                        Dhruvik Savaliya
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className=" text-md  rounded-full mt-5 ">
                  <a
                    href={resume}
                    download="Resume"
                    target="_blank"
                    className=" px-4 py-2 shadow-md shadow-zinc-500 dark:shadow-zinc-400 text-lg uppercase rounded-full bg-zinc-400 dark:bg-zinc-800"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 pt-5 pl-[8vw] lg:pl-20 mb-10">
              <div className=" w-full ml-10">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="uppercase text-2xl lg:mt-5 ml-10 "
                >
                  Education
                </h1>
              </div>
              <div data-aos="flip-up" data-aos-delay="200" className=" text-lg ml-5 dark:text-gray-300 flex flex-col gap-1 mt-3">
                <h1>2021 - 2022</h1>
                <p>Nutan Public School, Surat</p>
                <p className=" ml-5">
                  {" "}
                  <span>•</span> 12th (GBSE){" "}
                </p>
                <p className=" ml-5">
                  {" "}
                  <span>•</span> PR : 97.16
                </p>
              </div>
              <div data-aos="flip-up" data-aos-delay="200" className=" text-lg ml-5 dark:text-gray-300 flex flex-col gap-1 ">
                <h1>2022 - Present(5th sem)</h1>
                <p>Sutex bank college of computer application, Surat</p>
                <p className=" ml-5">
                  {" "}
                  <span>•</span> Bachleor's of computer application (BCA){" "}
                </p>
                <p className=" ml-5">
                  {" "}
                  <span>•</span> 4th sem SGPA : 8.22/10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
