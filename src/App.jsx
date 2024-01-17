import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Demos } from './components/Demos/Demos'
import { Projects } from './components/Projects/Projects'
import { Notebooks } from './components/Notebooks/Notebooks'
import { Contact } from './components/Contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



export const Home = () => {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience />
      <Demos />
      <Projects />
      <Notebooks />
      <Contact />
    </div>
  )
}

function App() {
  

  return (
  <BrowserRouter>
    <Routes>
        <Route path='/Portfolio' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
