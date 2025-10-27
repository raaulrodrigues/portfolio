import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './Hero.module.css';

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
    <section id="home" className={styles.heroSection}>
      <div className={`container ${styles.homeContainer}`}>
        <div className={styles.contentLeft} data-aos="fade-right">
          <h1>Raul Martins Rodrigues</h1>
          <p>Eu sou <span className={styles.maquinaEscrever} ref={el}></span></p>
          <div className={styles.cta}>
            <a href="#projetos" className="btn btn-primary">Meus Projetos</a>
            <a href="#contato" className="btn btn-secondary">Contato</a>
          </div>
        </div>
        <div className={styles.contentRight} data-aos="fade-left" data-aos-delay="200">
          <img src="/assets/images/perfil.webp" alt="Foto de Perfil" className={styles.fotoPerfil} />
        </div>
      </div>
    </section>
  );
};

export default Hero;