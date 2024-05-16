import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Language from './components/Language'
import Project from './components/Project'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll';
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
    <div className='main bg-zinc-200 dark:bg-zinc-800 h-screen text-zinc-800 dark:text-zinc-200 font-["hello"]'>
      <Nav/>
      <Home/>
      <About/>
      <Language/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App