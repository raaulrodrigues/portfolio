import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import sanityClient from '../sanityClient';
import { GitHub, ExternalLink, ArrowLeft } from 'react-feather';
import styles from './ProjectDetailPage.module.css';

interface SanityProjectFull {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  const [project, setProject] = useState<SanityProjectFull | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID do projeto não encontrado na URL.");
      setLoading(false);
      return;
    }

    const query = `*[_type == "project" && _id == $id][0] {
      _id,
      title,
      description,
      shortDescription,
      imageUrl,
      tags,
      liveUrl,
      repoUrl
    }`;
    const params = { id }; 

    sanityClient.fetch(query, params)
      .then((data: SanityProjectFull) => {
        if (data) {
          setProject(data);
        } else {
          setError("Projeto não encontrado.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar detalhes do projeto:", err);
        setError("Erro ao carregar o projeto.");
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return <section className={`${styles.page} container-wide`}><p>Carregando...</p></section>;
  }

  if (error) {
    return (
      <section className={`${styles.page} container-wide`}>
         <Helmet>
            <title>Erro | Raul Martins Rodrigues</title>
         </Helmet>
         <button onClick={() => navigate('/projetos')} className={styles.btnBack}>
          <ArrowLeft size={20} /> Voltar
        </button>
        <p>{error}</p>
      </section>
    );
  }

  if (!project) { 
     return <section className={`${styles.page} container-wide`}><p>Projeto não encontrado.</p></section>;
  }

  return (
    <section className={`${styles.page} container-wide`}>
      <Helmet>
        <title>{project.title} | Raul Martins Rodrigues</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <button onClick={() => navigate('/projetos')} className={styles.btnBack}>
        <ArrowLeft size={20} /> Voltar aos Projetos
      </button>

      <h1>{project.title}</h1>
      
      <div className={styles.imageContainer}>
         <img src={project.imageUrl} alt={`Imagem ${project.title}`} />
      </div>

      <div className={styles.content}>
        <h2>Descrição</h2>
        <p>{project.description}</p>

        <h2>Tecnologias Utilizadas</h2>
        <div className={styles.detailTags}>
          {project.tags?.map(tag => <span key={tag}>{tag}</span>) ?? <p>Nenhuma tag informada.</p>}
        </div>

        <h2>Links</h2>
        <div className={styles.detailLinks}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={18} /> Ver Online
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <GitHub size={18} /> Ver no GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;