import { courses } from '../data/coursesData'; 

const Courses = () => {
  return (
    <section id="cursos" data-aos="fade-up">
      <div className="container">
        <h2>Cursos Concluídos</h2>
        <div className="cursos-container">
          {}
          {courses.map((course) => (
            <div className="curso-item" data-aos="fade-up" data-aos-delay={course.aosDelay} key={course.id}>
              <h3>{course.title}</h3>
              <h4>{course.platform}</h4>
              <p>{course.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;