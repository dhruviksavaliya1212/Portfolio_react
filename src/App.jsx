import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'


const App = () => {
  return (
    <div className='main bg-zinc-200 dark:bg-zinc-800 h-screen text-zinc-800 dark:text-zinc-200 font-["hello"]'>
      <Nav/>
      <Home/>
      <About/>
    </div>
  )
}

export default App