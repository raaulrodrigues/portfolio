import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'react-feather';

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
  activeSection: string;
}

const Navbar = ({ toggleTheme, currentTheme, activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <a href="#home" className="logo" onClick={handleLinkClick}>
          Raul Martins Rodrigues
        </a>
        
        <div className="nav-container">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={handleLinkClick}>
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''} onClick={handleLinkClick}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#experiencia" className={activeSection === 'experiencia' ? 'active' : ''} onClick={handleLinkClick}>
                Experiência
              </a>
            </li>
            <li>
              <a href="#habilidades" className={activeSection === 'habilidades' ? 'active' : ''} onClick={handleLinkClick}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#cursos" className={activeSection === 'cursos' ? 'active' : ''} onClick={handleLinkClick}>
                Cursos
              </a>
            </li>
            <li>
              <a href="#projetos" className={activeSection === 'projetos' ? 'active' : ''} onClick={handleLinkClick}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" className={activeSection === 'contato' ? 'active' : ''} onClick={handleLinkClick}>
                Contato
              </a>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Trocar tema"
          >
            {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;