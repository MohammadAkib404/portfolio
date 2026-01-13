import React, { useEffect, useState } from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Section/Home'
import About from './Section/About'
import Projects from './Section/Projects'
import Contact from './Section/Contact'

const sections = ["home", "about", "projects", "contact"]

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
      <main className='bg-bg'>
        <Home />
        <About />
        <Projects />
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
