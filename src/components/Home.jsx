import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img from '../assets/img1.png'
import './Home.css'

const Home = () => {
  const [ text ] = useTypewriter({
    words: ["Web Developer", "Dhruvik Savaliya"],
    loop: {},
    typeSpeed:200,
    deleteSpeed:50
  });
  return (
    <div className='h-fit overflow-hidden flex pt-10 lg:pt-16 items-center justify-center w-full bg-[url("https://img.freepik.com/free-vector/gradient-white-monochrome-background_23-2149052421.jpg?t=st=1715603247~exp=1715606847~hmac=4467b09bcdeda26e7334f52647ede81da63ff674c993385a9e5492acb30afead&w=900")] dark:bg-[url("https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149159609.jpg?w=900&t=st=1715664384~exp=1715664984~hmac=c984c7a25a0309100af2a82cba2b64072562b33ec59b4a3591e7fe0eb1ed3845")] bg-cover bg-center'>
      <div data-aos="zoom-in" data-aos-duration="300" className="lg:h-[30rem] h-[52rem] sm:h-[50rem] flex flex-col-reverse lg:flex-row lg:w-[60rem] xl:w-[70rem] w-full mx-3 sm:mx-[7vw] md:mx-[10vw] lg:mx-0 my-9  dark:bg-black/30 bg-zinc-400/30 rounded-xl shadow-lg border-gray-500 dark:shadow-zinc-600 shadow-zinc-700 ">
        <div className="h-full  lg:w-[40rem] w-full sm:px-10">
          <div className="flex items-center justify-center flex-col lg:gap-10 gap-7">
            <h1 data-aos="fade-down" data-aos-duration="400" className="text-2xl lg:mt-16 mt-10 ">Hello Everyone!</h1>
            <h1 data-aos="fade-down" data-aos-duration="450" className="sm:text-4xl text-[28px] font-['Verdana']  font-bold">
              I'm <span className="typer dark:text-zinc-400 text-gray-600 font-['hello'] font-light">{text}</span>{" "}
              <span>
                <Cursor />
              </span>
            </h1>
            <p data-aos="fade-down" data-aos-duration="500" className="text-lg sm:mx-10 mx-[10vw] md:mx-[10vw] lg:mx-10 leading-normal">
              A web-developer who provides services for website designing or
              developing and also provide services for front-end and back-end.
            </p>
            <div data-aos="fade-down" data-aos-duration="550" className=" lg:w-[25rem] sm:w-[21rem] w-[18rem] border shadow-md shadow-zinc-500 border-zinc-500 h-14 rounded-xl">
              <form action="" method="post">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Type your email address"
                  className="h-14 w-full bg-transparent rounded-xl italic px-3 placeholder:text-slate-600 "
                />
                <div className="flex justify-center">
                  <button
                  type="button"
                  className="uppercase  px-4 py-2 my-4  dark:bg-zinc-700 shadow-md dark:shadow-zinc-500 shadow-zinc-800 bg-zinc-500 text-lg rounded-full"
                >
                  Subscribe
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out" data-aos-duration="500" className="lg:h-full h-[25rem] flex items-center justify-center lg:w-[30rem] w-full  mt-4 lg:mt-0">
          <div className={`lg:h-[25rem] lg:w-[20rem] h-[22rem] w-[17rem] rounded-xl shadow-lg shadow-zinc-700 dark:shadow-zinc-600  `} >
            <img src={img} alt="" srcset="" className=" photo h-full w-full rounded-xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
