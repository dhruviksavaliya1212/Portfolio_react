import React from "react";
import '../src/App.css'
import { Route,Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Language from "./components/Language";
import Project from "./components/Project";
import Contact from "./components/Contact";
import LocomotiveScroll from "locomotive-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  });
  return (
    <div className='relative w-full h-fit main text-zinc-800 dark:text-zinc-200 font-["poetsen_one"] bg-zinc-200 dark:bg-zinc-950 '>


<div class="wrapper">
  <div class="box">
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
    <div className=" border-[6px] border-zinc-700  dark:border-zinc-200"></div>
  </div>
</div>
		
      
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/language" element={<Language />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
