import { useParams, useNavigate } from 'react-router-dom';
import type { Project } from '../data/projectsData';
import { projects } from '../data/projectsData';
import { GitHub, ExternalLink, ArrowLeft } from 'react-feather';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project: Project | undefined = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <section className="project-detail-page container-wide">
         <button onClick={() => navigate('/projetos')} className="btn-back">
          <ArrowLeft size={20} /> Voltar
        </button>
        <p>Projeto não encontrado.</p>
      </section>
    );
  }

  return (
    <section className="project-detail-page container-wide">
      <button onClick={() => navigate('/projetos')} className="btn-back">
        <ArrowLeft size={20} /> Voltar aos Projetos
      </button>

      <h1>{project.title}</h1>
      
      <div className="project-detail-image-container">
         <img src={project.imageUrl} alt={`Imagem ${project.title}`} />
      </div>

      <div className="project-detail-content">
        <h2>Descrição</h2>
        <p>{project.description}</p>

        <h2>Tecnologias Utilizadas</h2>
        <div className="tags-projeto detail-tags">
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>

        <h2>Links</h2>
        <div className="links-projeto detail-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={18} /> Ver Online
            </a>
          )}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <GitHub size={18} /> Ver no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;