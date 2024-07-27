import React from "react";
import img from "../assets/contact.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className='h-screen overflow-hidden flex items-center justify-center w-full px-3 pb-8 pt-28 dark:bg-black/60 '>
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="relative w-full h-[5rem] flex items-center justify-center ">
            <h1 className="text-6xl font-black  tracking-wider uppercase opacity-15">
              Contact{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
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
            data-aos-delay="150"
            className=" h-fit mt-1 lg:-mt-0 flex flex-col-reverse lg:flex-row lg:w-[65rem] xl:w-[73rem] w-full sm:w-[90vw] md:w-[80vw] sm:mx-[7vw] md:mx-[10vw] lg:mx-0"
          >
            <div className="h-full w-full sm:px-10 pl-3 py-5">
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className=" w-full flex first-letter: justify-center items-center"
              >
                <h1 className="uppercase text-2xl ">Contact me</h1>
              </div>
              <div className="h-fit w-full  flex items-center flex-col justify-center ">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className=" text-xl my-1"
                >
                  Feel free to drop us a line below!
                </h1>
                <div className="h-full w-full sm:w-[28rem] rounded-xl flex flex-col justify-center items-center px-5 py-5  mb-2 lg:mb-0">
                  <form action="" method="post">
                    <input
                      data-aos="fade-up"
                      data-aos-delay="200"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter your name"
                      className="border border-zinc-600 dark:border-zinc-400 shadow-lg shadow-zinc-600 dark:shadow-zinc-600 text-lg px-3 placeholder:text-zinc-500 rounded-xl bg-transparent h-14 sm:w-[25rem] w-full "
                    />
                    <input
                      data-aos="fade-up"
                      data-aos-delay="250"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter your email"
                      className="border border-zinc-600 dark:border-zinc-400 shadow-lg shadow-zinc-600 dark:shadow-zinc-600 text-lg px-3 placeholder:text-zinc-500 rounded-xl bg-transparent h-14 sm:w-[25rem] w-full mt-3"
                    />
                    <textarea
                      data-aos="fade-up"
                      data-aos-delay="300"
                      placeholder="Type your message here"
                      className="border border-zinc-600 dark:border-zinc-400 shadow-lg shadow-zinc-600 dark:shadow-zinc-600 text-lg px-3 py-3 placeholder:text-zinc-500 rounded-xl bg-transparent sm:w-[25rem] w-full h-32 mt-3"
                    ></textarea>
                  </form>
                  <div
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
                data-aos-delay="300"
                className="h-fit w-full md:w-[40rem] lg:w-[25rem]  xl:w-[28rem]"
              >
                <img src={img} alt="" className="h-fit w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
