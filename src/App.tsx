import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Courses />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;