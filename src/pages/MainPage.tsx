import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const MainPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Courses />
      <Projects />
      <Contact />
    </main>
  );
};

export default MainPage;