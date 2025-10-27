import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'react-feather';

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
  showInternalLinks: boolean;
}

const Navbar = ({ toggleTheme, currentTheme, showInternalLinks }: NavbarProps) => {
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

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <Link 
          to="/" 
          className="logo" 
          onClick={() => setIsOpen(false)}
          aria-label="Raul Martins Rodrigues - Voltar para a página inicial"
        >
          Raul Martins Rodrigues
        </Link>
        
        <div className="nav-container">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Início
              </Link>
            </li>
            {showInternalLinks && (
              <>
                <li>
                  <a href="#sobre" onClick={() => setIsOpen(false)}>
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#experiencia" onClick={() => setIsOpen(false)}>
                    Experiência
                  </a>
                </li>
                <li>
                  <a href="#habilidades" onClick={() => setIsOpen(false)}>
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#cursos" onClick={() => setIsOpen(false)}>
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#projetos" onClick={() => setIsOpen(false)}>
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" onClick={() => setIsOpen(false)}>
                    Contato
                  </a>
                </li>
              </>
            )}
            {!showInternalLinks && (
                 <li>
                   <Link to="/" onClick={() => setIsOpen(false)}>Voltar para Home</Link>
                 </li>
            )}
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