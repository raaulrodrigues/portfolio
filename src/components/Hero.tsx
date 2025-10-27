import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'desenvolvedor Full-Stack',
        'estudante de Sistema de Informação',
        'entusiasta de Java e Python',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="container home-container">
        <div className="home-content-left" data-aos="fade-right">
          <h1>Raul Martins Rodrigues</h1>
          <p>Eu sou <span className="maquina-escrever" ref={el}></span></p>
          <div className="home-cta">
            <a href="#projetos" className="btn btn-primary">Meus Projetos</a>
            <a href="#contato" className="btn btn-secondary">Contato</a>
          </div>
        </div>
        <div className="home-content-right" data-aos="fade-left" data-aos-delay="200">
          <img src="/assets/images/perfil.webp" alt="Foto de Perfil" className="foto-perfil" />
        </div>
      </div>
    </section>
  );
};

export default Hero;