import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Language = () => {
  return (
    <section id="language">
      <div className='h-fit overflow-hidden flex items-center justify-center w-full bg-[url("https://img.freepik.com/free-vector/gradient-white-monochrome-background_23-2149052421.jpg?t=st=1715603247~exp=1715606847~hmac=4467b09bcdeda26e7334f52647ede81da63ff674c993385a9e5492acb30afead&w=900")] dark:bg-[url("https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149159609.jpg?w=900&t=st=1715664384~exp=1715664984~hmac=c984c7a25a0309100af2a82cba2b64072562b33ec59b4a3591e7fe0eb1ed3845")] bg-cover bg-center px-3 pb-8'>
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="relative w-full h-[5rem] font-['hello'] flex items-center justify-center ">
            <h1 className="text-6xl font-black tracking-wider uppercase opacity-15">
              Languages{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
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
            data-aos-duration="300"
            className=" h-fit mt-1 lg:-mt-0 flex justify-center items-center flex-col lg:flex-row flex-wrap lg:w-[65rem] xl:w-[73rem] w-full sm:w-[90vw] md:w-[80vw] sm:mx-[7vw] md:mx-[10vw] lg:mx-0  dark:bg-black/30 bg-zinc-400/30 rounded-xl shadow-lg border-gray-500 dark:shadow-zinc-600 shadow-zinc-700 font-['hello'] sm:p-10"
          >
            <div
              data-aos="slide-up"
              data-aos-duration="350"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100 "
            >
              <div className="w-full flex justify-center text-lg">
                <h1>HTML</h1>
              </div>
              <ProgressBar
                completed={75}
                animateOnRender={true}
                bgColor="red"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="400"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>CSS</h1>
              </div>
              <ProgressBar
                completed={70}
                animateOnRender={true}
                bgColor="blue"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="450"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>JAVASCRIPT</h1>
              </div>
              <ProgressBar
                completed={65}
                animateOnRender={true}
                bgColor="orange"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="500"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>JAVA</h1>
              </div>
              <ProgressBar
                completed={60}
                animateOnRender={true}
                bgColor="green"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="550"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>REACT</h1>
              </div>
              <ProgressBar
                completed={70}
                animateOnRender={true}
                bgColor="purple"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="600"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>NODE</h1>
              </div>
              <ProgressBar
                completed={60}
                animateOnRender={true}
                bgColor="gray"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="650"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>MONGODB</h1>
              </div>
              <ProgressBar
                completed={50}
                animateOnRender={true}
                bgColor="brown"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="700"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>TAILWIND</h1>
              </div>
              <ProgressBar
                completed={80}
                animateOnRender={true}
                bgColor="crimson"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="750"
              className="sm:w-[20rem] w-[19rem] h-24 px-4 pb-5 pt-3 sm:mx-5 my-4 rounded-3xl shadow-inner shadow-zinc-900 dark:shadow-zinc-100"
            >
              <div className="w-full flex justify-center text-lg">
                <h1>EXPRESS</h1>
              </div>
              <ProgressBar
                completed={70}
                animateOnRender={true}
                bgColor="teal"
                height="30px"
                className="shadow-md shadow-zinc-600 rounded-2xl mt-2 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Language;
