import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Navbar = ({ toggleTheme, currentTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="#home" className="logo">Raul Martins Rodrigues</a>
        <nav>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Trocar tema"
          >
            {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;