import { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';
import styles from './Skills.module.css';

interface SanitySkill {
    name: string;
    icon?: string;
}

interface SanitySkillGroup {
    _id: string;
    title: string;
    skills: SanitySkill[];
    className?: string;
    order: number;
}

const Skills = () => {
    const [skillGroups, setSkillGroups] = useState<SanitySkillGroup[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "skillGroup"] | order(order asc) {
            _id,
            title,
            skills[]{ name, icon },
            className,
            order
        }`;

        sanityClient.fetch(query)
            .then((data: SanitySkillGroup[]) => {
                setSkillGroups(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar grupos de habilidades:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="habilidades" data-aos="fade-up">
            <div className="container">
                <h2>Habilidades</h2>

                {loading ? (
                    <p>Carregando habilidades...</p>
                ) : (
                    skillGroups.map((group, groupIndex) => (
                        <div
                            className={`${styles.grupo} ${group.className && styles[group.className] ? styles[group.className] : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={`${groupIndex * 100}`}
                            key={group._id}
                        >
                            <h3>{group.title}</h3>
                            <div className={styles.grid}>
                                {group.skills?.map((skill) => (
                                    <div className={styles.item} key={skill.name}>
                                        {skill.icon && <img src={skill.icon} alt={skill.name} />}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Skills;