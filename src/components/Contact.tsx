import { Mail, Linkedin, Phone, GitHub } from 'react-feather';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contato" data-aos="fade-up" className={styles.contactSection}>
      <div className="container">
        <h2>Entre em Contato</h2>
        <p>Estou aberto a novas oportunidades e colaborações. Vamos conversar!</p>
        <div className={styles.wrapper}>
          
          <a href="mailto:rm.rodrigues0307@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link} data-aos="fade-up" data-aos-delay="100">
            <Mail size={22} /> <span>E-mail</span>
          </a>
          
          <a href="https://www.linkedin.com/in/raaul-rodriguees/" target="_blank" rel="noopener noreferrer" className={styles.link} data-aos="fade-up" data-aos-delay="200">
            <Linkedin size={22} /> <span>LinkedIn</span>
          </a>
          
          <a href="https://wa.me/5516997542792" target="_blank" rel="noopener noreferrer" className={styles.link} data-aos="fade-up" data-aos-delay="300">
            <Phone size={22} /> <span>Telefone</span>
          </a>
          
          <a href="https://github.com/raaulrodrigues" target="_blank" rel="noopener noreferrer" className={styles.link} data-aos="fade-up" data-aos-delay="400">
            <GitHub size={22} /> <span>GitHub</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;