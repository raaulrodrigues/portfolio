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
  const [theme, setTheme] = useState<string>(() => {
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
    if (!isMainPage) {
        setActiveSection('');
        return;
    }

    if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection('home');
    }

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        let currentSection = 'home';
        const viewportTriggerPoint = window.innerHeight / 3;

        if (window.scrollY < viewportTriggerPoint) {
            currentSection = 'home';
        } else {
            let minDistance = Infinity;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const distanceToTrigger = Math.abs(rect.top - viewportTriggerPoint);

                if (rect.top <= viewportTriggerPoint && distanceToTrigger < minDistance) {
                    minDistance = distanceToTrigger;
                    currentSection = section.id;
                }
            });

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
               const lastSection = sections[sections.length - 1];
               if(lastSection) currentSection = lastSection.id;
            }
        }

        console.log('Seção detectada:', currentSection, 'Scroll Y:', window.scrollY, 'Trigger Point:', viewportTriggerPoint);

        const validSections = ['home', 'sobre', 'experiencia', 'habilidades', 'cursos', 'projetos', 'contato'];
        if (validSections.includes(currentSection) && currentSection !== activeSection) {
            setActiveSection(currentSection);
        }
    };

    let scrollTimeout: number | undefined;
    const debouncedScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScroll);
    return () => {
        clearTimeout(scrollTimeout);
        window.removeEventListener('scroll', debouncedScroll);
    };
  }, [isMainPage, location.pathname, activeSection]);


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'dark' ? 'light' : 'dark'));
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