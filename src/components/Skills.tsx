import { skillGroups } from '../data/skillsData'; 
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="habilidades" data-aos="fade-up">
      <div className="container">
        <h2>Habilidades</h2>
        
        {skillGroups.map((group) => ( 
          <div 
            className={`${styles.grupo} ${group.className && styles[group.className] ? styles[group.className] : ''}`} 
            data-aos="fade-up" 
            data-aos-delay={group.aosDelay} 
            key={group.id} 
          >
            <h3>{group.title}</h3>
            <div className={styles.grid}> 
              {group.skills.map((skill) => ( 
                <div className={styles.item} key={skill.name}> 
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