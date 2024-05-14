import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'


const App = () => {
  return (
    <div className='main bg-zinc-200 dark:bg-zinc-800 h-screen dark:text-white'>
      <Nav/>
      <Home/>
    </div>
  )
}

export default App