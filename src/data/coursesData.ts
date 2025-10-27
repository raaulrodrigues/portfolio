export interface Course {
  id: number;
  title: string;
  platform: string;
  details: string;
  aosDelay: string;
}

export const courses: Course[] = [
  { id: 1, title: 'Programa Desenvolve', platform: 'Grupo Boticário', details: 'Carga horária: 160 horas (Conclusão: 2024)', aosDelay: '100' },
  { id: 2, title: 'Java COMPLETO 2023 POO +Projetos', platform: 'Udemy (54.5 horas)', details: 'Conclusão: Outubro 2023', aosDelay: '200' },
  { id: 3, title: 'Fundamentos de Linguagem Python para Data Science', platform: 'Data Science Academy (72 horas)', details: 'Conclusão: Agosto 2025', aosDelay: '300' },
  { id: 4, title: 'Fundamentos de Data Science e Inteligência Artificial', platform: 'Data Science Academy (24 horas)', details: 'Conclusão: Agosto 2025', aosDelay: '400' },
  { id: 5, title: 'Python para Análise de Dados', platform: 'Udemy (12 horas)', details: 'Conclusão: Março 2024', aosDelay: '500' },
  { id: 6, title: 'Lógica de Programação Essencial', platform: 'DIO', details: 'Conclusão: 2022', aosDelay: '600' },
];