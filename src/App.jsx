import React, { useEffect, useState } from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Section/Home'
import About from './Section/About'
import Projects from './Section/Projects'

const sections = ["home", "about", "projects"]

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) setActive(entry.target.id);
      });
    }, {threshold : 0.6})

    sections.forEach(id => {
      const el = document.getElementById(id);
      if(el) observer.observe(el);
    })

    return () => observer.disconnect();
  }, [])

  return (
    <>
      <Header active={active} />
      <div className='max-w-6xl mx-auto bg-bg-light px-4 sm:px-8 lg:px-12'>
        <Home />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
