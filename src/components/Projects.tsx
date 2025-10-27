import { projects } from '../data/projectsData';
import { ArrowRight } from 'react-feather';

interface ProjectsProps {
  onShowAll: () => void;
  onShowDetail: (projectId: number) => void;
}

const Projects = ({ onShowAll, onShowDetail }: ProjectsProps) => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projetos" className="projects-stacked-section">
      <div className="container-wide">
        <div className="projetos-header">
          <h2>Projetos em Destaque</h2>
          <p className="projetos-descricao">Estes são alguns dos projetos que mais me orgulho, demonstrando minhas habilidades e paixão por desenvolvimento.</p>
        </div>

        <div className="projects-stack">
          {featuredProjects.map((project, index) => (
            <div
              className="project-card-stacked"
              key={project.id}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              <div className="project-card-stacked-content">
                <div className="texto-projeto">
                  <h3>{project.title}</h3>
                  <p className="descricao-projeto">{project.description}</p>
                  <div className="links-projeto">
                     <button onClick={() => onShowDetail(project.id)} className="btn btn-secondary btn-saiba-mais">
                       Saiba mais <ArrowRight size={16}/>
                     </button>
                  </div>
                </div>
                <div className="imagem-container-projeto imagem-container-stacked">
                  <img src={project.imageUrl} alt={`Imagem do Projeto ${project.title}`} loading="lazy"/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ver-mais-container">
          <button onClick={onShowAll} className="btn btn-secondary ver-mais-btn">
            Veja mais
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;