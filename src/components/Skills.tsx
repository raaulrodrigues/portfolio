import { skillGroups } from '../data/skillsData'; 

const Skills = () => {
  return (
    <section id="habilidades" data-aos="fade-up">
      <div className="container">
        <h2>Habilidades</h2>

        {}
        {skillGroups.map((group) => (
          <div className={`habilidade-grupo ${group.className || ''}`} data-aos="fade-up" data-aos-delay={group.aosDelay} key={group.id}>
            <h3>{group.title}</h3>
            <div className="habilidades-grid">
              
              {}
              {group.skills.map((skill) => (
                <div className="habilidade-item" key={skill.name}>
                  {}
                  {skill.icon && <img src={skill.icon} alt={skill.name} />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;