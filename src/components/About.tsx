import styles from './About.module.css';

const About = () => {
  return (
    <section id="sobre" data-aos="fade-up" className={styles.aboutSection}>
      <div className="container">
        <h2>Sobre Mim</h2>
        <p>Olá! Sou Raul Martins Rodrigues, um estudante de Sistemas de Informação apaixonado por tecnologia e programação. Tenho focado meus estudos no desenvolvimento back-end com Java e Python, mas também tenho conhecimento em C#, React, Spring e desenvolvimento web. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor.</p>
      </div>
    </section>
  );
};

export default About;