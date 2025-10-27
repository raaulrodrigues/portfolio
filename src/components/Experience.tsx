import { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';
import styles from './Experience.module.css';

interface SanityExperience {
    _id: string;
    title: string;
    company: string;
    period: string;
    tasks: string[];
    order: number;
}

const Experience = () => {
    const [experiences, setExperiences] = useState<SanityExperience[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "experience"] | order(order asc) {
            _id,
            title,
            company,
            period,
            tasks,
            order
        }`;

        sanityClient.fetch(query)
            .then((data: SanityExperience[]) => {
                setExperiences(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar experiências:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="experiencia" data-aos="fade-up">
            <div className="container">
                <h2>Experiência</h2>
                {loading ? (
                    <p>Carregando experiências...</p>
                ) : (
                    <div className={styles.container}>
                        {experiences.map((job, index) => (
                            <div className={styles.item} data-aos="fade-up" data-aos-delay={`${index * 100}`} key={job._id}>
                                <h3>{job.title}</h3>
                                <h4>{job.company}</h4>
                                <p className={styles.periodo}>{job.period}</p>
                                <ul>
                                    {job.tasks?.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;