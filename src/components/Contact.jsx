import React from "react";
import img from "../assets/contact.png";
import {
  FaLinkedin,
  FaFacebookMessenger,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <div className='h-fit overflow-hidden flex items-center justify-center w-full bg-[url("https://img.freepik.com/free-vector/gradient-white-monochrome-background_23-2149052421.jpg?t=st=1715603247~exp=1715606847~hmac=4467b09bcdeda26e7334f52647ede81da63ff674c993385a9e5492acb30afead&w=900")] dark:bg-[url("https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149159609.jpg?w=900&t=st=1715664384~exp=1715664984~hmac=c984c7a25a0309100af2a82cba2b64072562b33ec59b4a3591e7fe0eb1ed3845")] bg-cover bg-center px-3 pb-8'>
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="relative w-full h-[5rem] font-['hello'] flex items-center justify-center ">
            <h1 className="text-6xl font-black  tracking-wider uppercase opacity-15">
              Contact{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="uppercase text-4xl w-full absolute flex items-center justify-center"
            >
              <span className="">
                Get in{" "}
                <span className="dark:text-gray-400 text-gray-600">Touch</span>
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="lg:h-[30rem] h-fit mt-1 lg:-mt-0 flex flex-col-reverse lg:flex-row lg:w-[65rem] xl:w-[73rem] w-full sm:w-[90vw] md:w-[80vw] sm:mx-[7vw] md:mx-[10vw] lg:mx-0  dark:bg-black/30 bg-zinc-400/30 rounded-xl shadow-lg border-gray-500 dark:shadow-zinc-600 shadow-zinc-700 font-['hello']"
          >
            <div className="h-full w-full sm:px-10 pl-3 py-5 font-['hello']">
              <div
                data-aos="fade-right"
                data-aos-duration="400"
                className=" w-full flex first-letter: justify-center items-center"
              >
                <h1 className="uppercase text-2xl ">Contact me</h1>
              </div>
              <div className="h-fit w-full  flex items-center flex-col justify-center ">
                <h1
                  data-aos="fade-left"
                  data-aos-duration="400"
                  className=" text-xl my-1"
                >
                  Feel free to drop us a line below!
                </h1>
                <div className="h-full w-full sm:w-[28rem] rounded-xl flex flex-col justify-center items-center px-5 py-5 shadow-inner mt-3 dark:shadow-zinc-100 shadow-zinc-700 mb-2 lg:mb-0">
                  <form action="" method="post">
                    <input
                      data-aos="fade-up"
                      data-aos-duration="500"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter your name"
                      className="border border-zinc-600 dark:border-zinc-400 shadow-lg shadow-zinc-600 dark:shadow-zinc-600 text-lg px-3 placeholder:text-zinc-500 rounded-xl bg-transparent h-14 sm:w-[25rem] w-full "
                    />
                    <input
                      data-aos="fade-up"
                      data-aos-duration="500"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter your email"
                      className="border border-zinc-600 dark:border-zinc-400 shadow-lg shadow-zinc-600 dark:shadow-zinc-600 text-lg px-3 placeholder:text-zinc-500 rounded-xl bg-transparent h-14 sm:w-[25rem] w-full mt-3"
                    />
                    <textarea
                      data-aos="fade-up"
                      data-aos-duration="550"
                      placeholder="Type your message here"
                      className="border border-zinc-600 dark:border-zinc-400 shadow-lg shadow-zinc-600 dark:shadow-zinc-600 text-lg px-3 py-3 placeholder:text-zinc-500 rounded-xl bg-transparent sm:w-[25rem] w-full h-32 mt-3"
                    ></textarea>
                  </form>
                  <div
                    data-aos="fade-down"
                    data-aos-duration="500"
                    className="w-full flex justify-center"
                  >
                    <button
                      type="button"
                      className="uppercase  px-10 py-2 mt-2 mx-4  dark:bg-zinc-700 shadow-md dark:shadow-zinc-500 shadow-zinc-800 bg-zinc-500 text-lg rounded-full"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  h-full flex items-center justify-center">
              <div
                data-aos="zoom-out"
                data-aos-duration="600"
                className="h-fit w-full md:w-[40rem] lg:w-[25rem]  xl:w-[28rem]"
              >
                <img src={img} alt="" className="h-fit w-full" />
              </div>
            </div>
          </div>
          <div className="w-full h-20 flex gap-5 justify-center items-center">
            <a href="https://www.linkedin.com/in/dhruvik-savaliya-0520642b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <FaLinkedin  className="text-4xl cursor-pointer text-blue-700" />
            </a>
            <a href="https://github.com/dhruviksavaliya1212" target="_blank">
            <FaSquareGithub className="text-4xl cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100080691679248&mibextid=ZbWKwL" target="_blank">
            <FaFacebookMessenger className="text-4xl cursor-pointer text-blue-700" />
            </a>
            <a href="https://www.instagram.com/mr_savaliya_2412?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" >
            <AiFillInstagram className="text-4xl cursor-pointer text-[#D22A3E] " />
            </a>
            <a href="https://www.fiverr.com/savaliyadhruvik?up_rollout=true" target="_blank">
            <TbBrandFiverr className="text-4xl cursor-pointer text-green-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
