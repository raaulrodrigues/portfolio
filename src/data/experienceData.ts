export interface Job {
  id: number;
  title: string;
  company: string;
  period: string;
  tasks: string[];
  aosDelay: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Auxiliar Administrativo',
    company: 'English For Life by Arnoldo - Rincão, SP',
    period: 'Fevereiro 2023 – Presente',
    tasks: [
      'Atendimento e suporte ao público (presencial e telefônico).',
      'Gestão de contratos e rotinas financeiras.',
      'Organização de documentos e materiais.',
    ],
    aosDelay: '100',
  },
  {
    id: 2,
    title: 'Recenseador',
    company: 'Instituto Brasileiro de Geografia e Estatística (IBGE) - Rincão, SP',
    period: 'Agosto 2022 – Dezembro 2022',
    tasks: ['Coleta e registro de informações necessárias para pesquisas nacionais.'],
    aosDelay: '200',
  },
];