import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import sanityClient from '../sanityClient';
import { ArrowLeft, ArrowRight } from 'react-feather';
import AOS from 'aos';
import styles from './AllProjectsPage.module.css';

interface SanityProjectShallow {
  _id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  order: number;
}

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" }
};

const AllProjectsPage = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<SanityProjectShallow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.refresh(); 

    const query = `*[_type == "project"] | order(order asc) {
      _id,
      title,
      shortDescription,
      imageUrl,
      order
    }`;

    sanityClient.fetch(query)
      .then((data: SanityProjectShallow[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Erro ao buscar todos os projetos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <motion.section
      id="all-projects"
      className={styles.page}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <Helmet>
        <title>Projetos | Raul Martins Rodrigues</title>
        <meta name="description" content="Explore todos os projetos desenvolvidos por Raul Martins Rodrigues, incluindo aplicações web, ferramentas e mais." />
      </Helmet>

      <div className="container-wide">
        <button onClick={() => navigate('/')} className={styles.btnBack}>
          <ArrowLeft size={20} /> Voltar
        </button>
        <h2>Todos os Projetos</h2>

        {loading ? (
          <p>Carregando projetos...</p>
        ) : (
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div className={styles.card} key={project._id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className={styles.image}>
                  <img src={project.imageUrl} alt={`Imagem do Projeto ${project.title}`} loading="lazy" />
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <div className={styles.links}>
                      <Link to={`/projeto/${project._id}`} className={styles.btnDetalhes}>
                        Detalhes <ArrowRight size={16}/>
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default AllProjectsPage;