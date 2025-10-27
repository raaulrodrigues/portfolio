import { projects } from '../data/projectsData';
import { ArrowLeft, ArrowRight } from 'react-feather';

interface AllProjectsProps {
  onGoBack: () => void;
  onShowDetail: (projectId: number) => void;
}

const AllProjects = ({ onGoBack, onShowDetail }: AllProjectsProps) => {
  return (
    <section id="all-projects" className="all-projects-page">
      <div className="container-wide">
        <button onClick={onGoBack} className="btn-back">
          <ArrowLeft size={20} /> Voltar
        </button>
        <h2>Todos os Projetos</h2>
        <div className="all-projects-grid">
          {projects.map((project, index) => (
            <div className="project-card-simple" key={project.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <div className="project-card-simple-image">
                 <img src={project.imageUrl} alt={`Imagem do Projeto ${project.title}`} loading="lazy" />
              </div>
              <div className="project-card-simple-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="links-projeto">
                    <button onClick={() => onShowDetail(project.id)} className="btn-detalhes">
                      Detalhes <ArrowRight size={16}/>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;