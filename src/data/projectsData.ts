
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  imageUrl: string;
  aosDelay: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bookshelf App',
    description: 'Aplicação full-stack com Next.js, Node.js, Prisma e PostgreSQL (Supabase) para organizar e gerenciar uma coleção de livros, com dashboard para filtragem dinâmica.',
    tags: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://bookshelf-app-final-yox6.vercel.app',
    repoUrl: 'https://github.com/raaulrodrigues/bookshelf-app-final',
    imageUrl: '/assets/images/Bookshelf.png', 
    aosDelay: '100',
  },
  {
    id: 2,
    title: 'Sistema de Xadrez',
    description: 'Um jogo de xadrez completo construído em Java com interface gráfica, focado na lógica e nas regras do jogo.',
    tags: ['Java', 'OOP'],
    repoUrl: 'https://github.com/raaulrodrigues/Xadrez.git',
    imageUrl: '/assets/images/Xadrez.png',
    aosDelay: '200',
  },
  {
    id: 3,
    title: 'Pokédex',
    description: 'Uma Pokédex interativa que consome a PokeAPI para exibir informações, sprites animados e dados de mais de 600 Pokémon. Desenvolvida com foco em manipulação do DOM e requisições assíncronas em JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/raaulrodrigues/Pokedex',
    imageUrl: '/assets/images/Pokedex.png',
    aosDelay: '300',
  },
];