import { GitHub, ExternalLink } from 'react-feather';
import { projects } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projetos">
      <div className="container-wide sticky-container">
        <div className="projetos-header" data-aos="fade-in">
          <h2>Meus Projetos</h2>
          <p className="projetos-descricao">Aqui estão alguns dos meus projetos mais recentes. Cada um deles reflete meu foco em soluções centradas no usuário e meu compromisso com a excelência.</p>
        </div>
        <div className="projetos-cards-wrapper">
          <div className="projetos-container">
            
            {}
            {projects.map((project) => (
              <div className="projeto-card-novo" data-aos="fade-up" data-aos-delay={project.aosDelay} key={project.id}>
                <div className="texto-projeto">
                  <h3>{project.title}</h3>
                  <p className="descricao-projeto">{project.description}</p>
                  <div className="tags-projeto">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="links-projeto">
                    {}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-projeto">
                        Ver Projeto Online <ExternalLink size={16} />
                      </a>
                    )}
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-projeto">
                      Ver no GitHub <GitHub size={16} />
                    </a>
                  </div>
                </div>
                <div className="imagem-container-projeto">
                  {}
                  <img src={project.imageUrl} alt={`Imagem do Projeto ${project.title}`} />
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;