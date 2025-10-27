import { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';
import styles from './Courses.module.css';

interface SanityCourse {
    _id: string;
    title: string;
    platform: string;
    details?: string;
    order: number;
}

const Courses = () => {
    const [courses, setCourses] = useState<SanityCourse[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "course"] | order(order asc) {
            _id,
            title,
            platform,
            details,
            order
        }`;

        sanityClient.fetch(query)
            .then((data: SanityCourse[]) => {
                setCourses(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar cursos:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="cursos" data-aos="fade-up">
            <div className="container">
                <h2>Cursos Concluídos</h2>
                {loading ? (
                    <p>Carregando cursos...</p>
                ) : (
                    <div className={styles.container}>
                        {courses.map((course, index) => (
                            <div className={styles.item} data-aos="fade-up" data-aos-delay={`${index * 100}`} key={course._id}>
                                <h3>{course.title}</h3>
                                <h4>{course.platform}</h4>
                                {course.details && <p>{course.details}</p>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Courses;