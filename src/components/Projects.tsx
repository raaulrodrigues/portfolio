import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { ArrowRight } from 'react-feather';
import styles from './Projects.module.css';

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projetos" className={styles.section}>
      <div className="container-wide">
        <div className={styles.header}>
          <h2>Projetos em Destaque</h2>
          <p>Estes são alguns dos projetos que mais me orgulho, demonstrando minhas habilidades e paixão por desenvolvimento.</p>
        </div>

        <div className={styles.stack}>
          {featuredProjects.map((project, index) => (
            <div
              className={styles.card}
              key={project.id}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              <div className={styles.content}>
                <div className={styles.texto}>
                  <h3>{project.title}</h3>
                  <p className={styles.descricao}>{project.description}</p>
                  <div className={styles.links}>
                     <Link to={`/projeto/${project.id}`} className={`btn btn-primary ${styles.btnSaibaMais}`}>
                       Saiba mais <ArrowRight size={16}/>
                     </Link>
                  </div>
                </div>
                <div className={styles.imagemContainer}>
                  <img src={project.imageUrl} alt={`Imagem do Projeto ${project.title}`} loading="lazy"/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.verMaisContainer}>
          <Link to="/projetos" className={`btn btn-primary ${styles.verMaisBtn}`}>
            Veja mais
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;