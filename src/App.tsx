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
import AllProjects from './components/AllProjects';
import ProjectDetail from './components/ProjectDetail';
import { projects } from './data/projectsData';

import AOS from 'aos';
import 'aos/dist/aos.css';

type Page = 'main' | 'allProjects' | 'projectDetail';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    window.scrollTo(0, 0);
  }, [theme, currentPage]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage !== 'main') return;

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let currentSection = 'home';

      if (window.scrollY < 300) {
        currentSection = 'home';
      } else {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = section.id;
          }
        });
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, [currentPage]);

  const showAllProjects = () => {
      setSelectedProjectId(null);
      setCurrentPage('allProjects');
  }
  const showMainPage = () => {
      setSelectedProjectId(null);
      setCurrentPage('main');
  }
  const showProjectDetail = (projectId: number) => {
      setSelectedProjectId(projectId);
      setCurrentPage('projectDetail');
  }

  const selectedProjectData = projects.find(p => p.id === selectedProjectId) || null;

  return (
    <>
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>

      <Navbar
        toggleTheme={toggleTheme}
        currentTheme={theme}
        activeSection={activeSection}
        showInternalLinks={currentPage === 'main'}
        onLogoClick={showMainPage}
      />

      {currentPage === 'main' && (
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Courses />
          <Projects onShowAll={showAllProjects} onShowDetail={showProjectDetail} />
          <Contact />
        </main>
      )}
      {currentPage === 'allProjects' && (
        <AllProjects onGoBack={showMainPage} onShowDetail={showProjectDetail} />
      )}
       {currentPage === 'projectDetail' && (
        <ProjectDetail project={selectedProjectData} onGoBack={showMainPage} />
      )}

      <Footer />
    </>
  );
}

export default App;