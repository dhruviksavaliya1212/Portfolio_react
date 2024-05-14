import React, { useEffect, useState } from 'react'
import LightButton from '../assets/Dark/light-mode-button.png';
import DarkButton from '../assets/Dark/dark-mode-button.png';

const Dark = () => {

  const[theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");

  const e = document.documentElement;  //access to html element <!Doctype>

  // set theme to local storage and html elements
  useEffect(()=>{
    localStorage.setItem("theme",theme);
    if(theme == "dark"){
      e.classList.add("dark");
    }
    else{
      e.classList.remove("light");
      e.classList.remove("dark");
    }
  })

  function darkmode(){
    setTheme(theme == "dark"?"light":"dark");
  }

  return (
    <div className='relative w-16 shadow-md shadow-zinc-400 dark:shadow-zinc-500 rounded-full '>
      <img onClick={darkmode} src={LightButton} className={`w-16 absolute right-0 duration-200 cursor-pointer ${theme == "dark"? "opacity-0":"opacity-100"}`} alt="" />
      <img onClick={darkmode} src={DarkButton} className={`w-16 top-0 duration-200 cursor-pointer`} alt="" />
    </div>
  )
}

export default Dark