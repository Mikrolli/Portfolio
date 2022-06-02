import React, { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ParticlesBackground from './components/particlesBackground/ParticlesBackground';

const App = () => {
  /* const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner')
  if (spinner) {
    setTimeout(() => {
      spinner.style.display='none';
      setLoading(false)
    }, 5000)
  }
  !loading && () */
  return (
      <>
    <ParticlesBackground />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
};

export default App;