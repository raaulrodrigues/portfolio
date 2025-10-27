import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Raul Martins Rodrigues | Desenvolvedor Full-Stack</title>
        <meta name="description" content="Portfólio de Raul Martins Rodrigues, estudante de Sistemas de Informação focado em desenvolvimento Full-Stack com Java, Python, React e mais." />
      </Helmet>
      
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