
interface Skill {
  name: string;
  icon?: string;
}

interface SkillGroup {
  id: number;
  title: string;
  skills: Skill[];
  className?: string;
  aosDelay: string;
}

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: 'Frontend',
    aosDelay: '100',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    ],
  },
  {
    id: 2,
    title: 'Backend',
    aosDelay: '200',
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
  {
    id: 3,
    title: 'Soft Skills',
    className: 'soft-skills',
    aosDelay: '300',
    skills: [
      { name: 'Proatividade' },
      { name: 'Aprendizagem Contínua e Curiosidade' },
      { name: 'Resolução de Problemas' },
      { name: 'Pensamento Analítico' },
      { name: 'Adaptabilidade' },
      { name: 'Organização e Planejamento' },
    ],
  },
  {
    id: 4,
    title: 'Outros Conhecimentos',
    className: 'outros-conhecimentos',
    aosDelay: '400',
    skills: [
      { name: 'Metodologias Ágeis' },
      { name: 'Análise de Dados' },
      { name: 'Inteligência Artificial' },
      { name: 'Manutenção de Hardware' },
    ],
  },
];