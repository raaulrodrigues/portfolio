import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const MainPage = () => {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
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
    </motion.main>
  );
};

export default MainPage;