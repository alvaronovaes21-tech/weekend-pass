import type { IconName } from '../components/Icon'

/** Informações da oferta. Se algo mudar, altere somente aqui. */
export const offer = {
  name: 'Weekend Pass',
  fullName: 'Weekend Pass — A.T. na Prática + Estudo de Caso: Manejo de Crise',
  dates: '28 e 29 de novembro de 2026',
  modality: 'On-line e ao vivo',
  comboPrice: 'R$ 217,00',
  separatePrice: 'R$ 303,60',
  savings: 'R$ 86,60',
  discount: '28,5%',
  instructor: 'Tâmara San’Galo',
  instructorRole: 'Psicóloga e analista do comportamento',
  crp: 'CRP-03/15888',
}

export const navLinks = [
  { label: 'Programação', href: '#programacao' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Instrutora', href: '#instrutora' },
  { label: 'Perguntas Frequentes', href: '#faq' },
]

export const painPoints: { icon: IconName; text: string }[] = [
  { icon: 'puzzle', text: 'Dificuldade para transformar conceitos teóricos em estratégias de intervenção.' },
  { icon: 'eye', text: 'Dúvidas sobre como observar e registrar comportamentos.' },
  { icon: 'route', text: 'Necessidade de compreender antecedentes, comportamentos e consequências.' },
  { icon: 'target', text: 'Interesse em desenvolver estratégias preventivas e intervenções mais individualizadas.' },
  { icon: 'home', text: 'Desejo de conectar o trabalho do A.T. às necessidades da criança e aos contextos familiar e escolar.' },
]

export const courses = {
  at: {
    tag: 'Sábado · 28/11/2026',
    title: 'A.T. na Prática: Intervenção Real na Neurodiversidade',
    price: 'R$ 147,00',
    schedule: ['08h às 12h', '13h30 às 17h'],
    dateLabel: 'Sábado, 28 de novembro de 2026',
    topics: [
      'Fundamentos e identidade profissional do Acompanhante Terapêutico.',
      'Intervenção em ambientes naturais.',
      'Princípios da Análise do Comportamento Aplicada (ABA).',
      'Comunicação funcional e autorregulação.',
      'Observação e análise do comportamento.',
      'Estratégias práticas de intervenção.',
      'Articulação entre família, escola e equipe terapêutica.',
    ],
    cta: 'QUERO O MEU A.T. NA PRÁTICA',
  },
  crise: {
    tag: 'Domingo · 29/11/2026',
    title: 'Estudo de Caso — Manejo de Crise: da Análise ABC à Intervenção Preventiva',
    price: 'R$ 156,60',
    schedule: ['08h às 12h'],
    dateLabel: 'Domingo, 29 de novembro de 2026',
    topics: [
      'Análise ABC: antecedente, comportamento e consequência.',
      'Identificação de possíveis gatilhos e variáveis relacionadas ao comportamento.',
      'Discussão de estudos de caso.',
      'Elaboração de estratégias preventivas.',
      'Intervenções individualizadas e compatíveis com as necessidades da criança.',
      'Corregulação e manejo ético.',
      'Considerações sobre segurança e responsabilidade profissional.',
    ],
    cta: 'QUERO O MEU ESTUDO DE CASO',
  },
}

export const journey: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'eye',
    title: 'Observar',
    text: 'Aprender a olhar para o comportamento e o contexto com atenção, descrevendo o que acontece de forma objetiva.',
  },
  {
    icon: 'search',
    title: 'Analisar',
    text: 'Relacionar antecedentes, comportamentos e consequências para compreender possíveis funções e gatilhos.',
  },
  {
    icon: 'clipboard',
    title: 'Planejar',
    text: 'Pensar estratégias preventivas e individualizadas, compatíveis com as necessidades de cada criança.',
  },
  {
    icon: 'target',
    title: 'Intervir',
    text: 'Aproximar o planejamento da prática, com responsabilidade, ética e articulação com família, escola e equipe.',
  },
]

export const audience: { icon: IconName; title: string }[] = [
  { icon: 'graduation', title: 'Estudantes de Psicologia' },
  { icon: 'book', title: 'Estudantes de Pedagogia' },
  { icon: 'puzzle', title: 'Estudantes de Psicopedagogia' },
  { icon: 'heart', title: 'Psicólogos e profissionais da saúde' },
  { icon: 'users', title: 'Pedagogos, psicopedagogos e profissionais da educação' },
  { icon: 'sparkles', title: 'Acompanhantes Terapêuticos e profissionais que atuam com crianças neurodivergentes' },
]

export const schedule = [
  {
    day: 'Sábado',
    date: '28/11/2026',
    slots: [
      { time: '08h às 12h', title: 'A.T. na Prática' },
      { time: '13h30 às 17h', title: 'Continuação do A.T. na Prática' },
    ],
  },
  {
    day: 'Domingo',
    date: '29/11/2026',
    slots: [{ time: '08h às 12h', title: 'Estudo de Caso: Manejo de Crise' }],
  },
]

export const offerIncludes = [
  'Curso A.T. na Prática, em 28/11/2026.',
  'Estudo de Caso — Manejo de Crise, em 29/11/2026.',
  'Participação nos dois encontros on-line e ao vivo.',
]

export const faq = [
  {
    q: 'O evento será presencial ou on-line?',
    a: 'Os dois cursos serão realizados on-line e ao vivo.',
  },
  {
    q: 'Posso adquirir somente um dos cursos por esta página?',
    a: 'Esta página é destinada à oferta do combo com os dois cursos. A compra é realizada no checkout da Hotmart.',
  },
  {
    q: 'Quanto custa o combo?',
    a: 'O valor anunciado é R$ 217,00 pelos dois cursos, com economia de R$ 86,60 em relação à soma dos valores individuais.',
  },
  {
    q: 'Em quais datas acontecerá?',
    a: '28 e 29 de novembro de 2026, conforme os horários apresentados na programação.',
  },
  {
    q: 'Para quem é indicado?',
    a: 'Para estudantes e profissionais das áreas de saúde e educação interessados em Acompanhamento Terapêutico, Análise do Comportamento e manejo preventivo de crises.',
  },
  {
    q: 'Como faço minha inscrição?',
    a: 'Clique em qualquer botão de compra e conclua o pagamento no checkout oficial da Hotmart.',
  },
  {
    q: 'O pagamento é feito pelo site?',
    a: 'A página apresenta o evento e direciona o usuário ao checkout da Hotmart. Os dados de pagamento são informados diretamente nesse ambiente.',
  },
  {
    q: 'O curso substitui supervisão profissional?',
    a: 'Não. O curso tem finalidade educacional e não substitui supervisão, avaliação individualizada ou treinamento específico necessário para procedimentos de segurança.',
  },
]
