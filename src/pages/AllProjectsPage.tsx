import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projectsData';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { useEffect } from 'react';
import AOS from 'aos';

const AllProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="all-projects" className="all-projects-page">
      <Helmet>
        <title>Projetos | Raul Martins Rodrigues</title>
        <meta name="description" content="Explore todos os projetos desenvolvidos por Raul Martins Rodrigues, incluindo aplicações web, ferramentas e mais." />
      </Helmet>

      <div className="container-wide">
        <button onClick={() => navigate('/')} className="btn-back">
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
                    <Link to={`/projeto/${project.id}`} className="btn-detalhes">
                      Detalhes <ArrowRight size={16}/>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;