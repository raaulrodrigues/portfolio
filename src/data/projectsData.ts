export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  imageUrl: string;
  aosDelay: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bookshelf App',
    description: 'Uma aplicação web full-stack desenvolvida com Next.js para o frontend e Node.js com Prisma para o backend, utilizando PostgreSQL (Supabase) como banco de dados. Permite aos usuários organizar, avaliar e gerenciar sua coleção pessoal de livros. Inclui um dashboard interativo com funcionalidades de filtragem dinâmica por gênero, autor e status de leitura, proporcionando uma experiência de usuário rica e eficiente.',
    shortDescription: 'App full-stack (Next.js, Node, Prisma, PostgreSQL) para organizar e avaliar uma coleção de livros com dashboard interativo.',
    tags: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
    liveUrl: 'https://bookshelf-app-final-yox6.vercel.app',
    repoUrl: 'https://github.com/raaulrodrigues/bookshelf-app-final',
    imageUrl: '/assets/images/Bookshelf.png',
    aosDelay: '100',
    featured: true,
  },
   {
    id: 3,
    title: 'Pokédex',
    description: 'Uma interface interativa que simula a Pokédex, consumindo dados da PokeAPI via requisições assíncronas (fetch API) em JavaScript puro. Exibe informações detalhadas, tipos, habilidades e sprites animados de mais de 600 Pokémon. O projeto focou na manipulação eficiente do DOM para renderizar dinamicamente o conteúdo e na criação de uma experiência de usuário responsiva e visualmente agradável.',
    shortDescription: 'Pokédex interativa com JavaScript puro, consumindo a PokeAPI para exibir dados e sprites animados de Pokémon.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    repoUrl: 'https://github.com/raaulrodrigues/Pokedex',
    imageUrl: '/assets/images/Pokedex.png',
    aosDelay: '300',
    featured: true,
  },
  {
    id: 2,
    title: 'Sistema de Xadrez',
    description: 'Implementação completa de um jogo de xadrez utilizando Java e os princípios da Programação Orientada a Objetos. O sistema inclui uma interface gráfica básica (console) e toda a lógica de movimentação das peças, regras de captura, xeque, xeque-mate e outras condições especiais do jogo, demonstrando forte compreensão de algoritmos e estruturas de dados.',
    shortDescription: 'Jogo de xadrez em Java com lógica completa de movimentação, regras especiais e interface de console.',
    tags: ['Java', 'OOP'],
    repoUrl: 'https://github.com/raaulrodrigues/Xadrez.git',
    imageUrl: '/assets/images/Xadrez.png',
    aosDelay: '200',
    featured: false,
  },
];