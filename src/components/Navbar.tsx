import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'react-feather';
import styles from './Navbar.module.css';

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
  activeSection: string; 
  showInternalLinks: boolean;
}

const Navbar = ({ toggleTheme, currentTheme, activeSection, showInternalLinks }: NavbarProps) => { 
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

  const headerClasses = `${styles.navbar} ${isScrolled ? styles.scrolled : ''}`;

  const getLinkClass = (sectionId: string) => {
    return activeSection === sectionId ? styles.active : '';
  };

  return (
    <header className={headerClasses}>
      <div className={styles.navInnerContainer}> 
        <Link 
          to="/" 
          className={styles.logo}
          onClick={() => setIsOpen(false)}
          aria-label="Raul Martins Rodrigues - Voltar para a página inicial"
        >
          Raul Martins Rodrigues
        </Link>
        
        <div className={styles.navContainer}>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClass('home')}> 
                Início
              </Link>
            </li>
            {showInternalLinks && (
              <>
                <li>
                  <a href="#sobre" onClick={() => setIsOpen(false)} className={getLinkClass('sobre')}>
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#experiencia" onClick={() => setIsOpen(false)} className={getLinkClass('experiencia')}>
                    Experiência
                  </a>
                </li>
                <li>
                  <a href="#habilidades" onClick={() => setIsOpen(false)} className={getLinkClass('habilidades')}>
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#cursos" onClick={() => setIsOpen(false)} className={getLinkClass('cursos')}>
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#projetos" onClick={() => setIsOpen(false)} className={getLinkClass('projetos')}>
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" onClick={() => setIsOpen(false)} className={getLinkClass('contato')}>
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
            className={styles.themeToggleBtn}
            aria-label="Trocar tema"
          >
            {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className={styles.menuToggle}
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