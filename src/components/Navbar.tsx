import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'react-feather';

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
  activeSection: string;
  showInternalLinks: boolean;
  onLogoClick: () => void;
}

const Navbar = ({ toggleTheme, currentTheme, activeSection, showInternalLinks, onLogoClick }: NavbarProps) => {
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

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    setIsOpen(false);
    if (!showInternalLinks || targetId === '#home') {
        event.preventDefault();
        onLogoClick();
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="logo" onClick={(e) => handleLinkClick(e as any)} style={{ cursor: 'pointer' }}>
          Raul Martins Rodrigues
        </div>
        
        <div className="nav-container">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" className={showInternalLinks && activeSection === 'home' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#home')}>
                Início
              </a>
            </li>
            {showInternalLinks && (
              <>
                <li>
                  <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#sobre')}>
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#experiencia" className={activeSection === 'experiencia' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#experiencia')}>
                    Experiência
                  </a>
                </li>
                <li>
                  <a href="#habilidades" className={activeSection === 'habilidades' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#habilidades')}>
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#cursos" className={activeSection === 'cursos' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#cursos')}>
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#projetos" className={activeSection === 'projetos' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#projetos')}>
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" className={activeSection === 'contato' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#contato')}>
                    Contato
                  </a>
                </li>
              </>
            )}
            {!showInternalLinks && (
                 <li>
                   <a href="#home" onClick={(e) => handleLinkClick(e)}>Voltar para Home</a>
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