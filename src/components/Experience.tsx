import { jobs } from '../data/experienceData';

const Experience = () => {
  return (
    <section id="experiencia" data-aos="fade-up">
      <div className="container">
        <h2>Experiência</h2>
        <div className="experiencia-container">
          {}
          {jobs.map((job) => (
            <div className="experiencia-item" data-aos="fade-up" data-aos-delay={job.aosDelay} key={job.id}>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p className="periodo">{job.period}</p>
              <ul>
                {}
                {job.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;