import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'; 
import AllProjectsPage from './pages/AllProjectsPage'; 
import ProjectDetailPage from './pages/ProjectDetailPage'; 
import ScrollToTop from './components/ScrollToTop'; 

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!isMainPage) return;

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
  }, [isMainPage]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

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

      <ScrollToTop />
      
      <Navbar
        toggleTheme={toggleTheme}
        currentTheme={theme}
        activeSection={activeSection}
        showInternalLinks={isMainPage}
      />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projetos" element={<AllProjectsPage />} />
        <Route path="/projeto/:id" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;