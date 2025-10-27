import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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

const pageVariants = {
  initial: { opacity: 0, y: "100vh" },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: "-100vh" }
};

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
      .catch((err: any) => {
        console.error("Erro ao buscar detalhes do projeto:", err);
        setError("Erro ao carregar o projeto.");
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return <motion.section className={`${styles.page} container-wide`}><p>Carregando...</p></motion.section>;
  }

  if (error) {
    return (
      <motion.section 
         className={`${styles.page} container-wide`}
         initial="initial" animate="in" exit="out" variants={pageVariants} 
         transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
      >
        <Helmet>
            <title>Erro | Raul Martins Rodrigues</title>
        </Helmet>
        <button onClick={() => navigate('/projetos')} className={styles.btnBack}>
          <ArrowLeft size={20} /> Voltar
        </button>
        <p>{error}</p>
      </motion.section>
    );
  }

  if (!project) { 
    return <motion.section className={`${styles.page} container-wide`}><p>Projeto não encontrado.</p></motion.section>;
  }

  return (
    <motion.section 
      className={`${styles.page} container-wide`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
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
    </motion.section>
  );
};

export default ProjectDetailPage;