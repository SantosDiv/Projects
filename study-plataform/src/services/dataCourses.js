const courses = [
  {
    id: 1,
    name: 'Introdução a Bash',
    module: 1,
    contents: [
      {
        title: 'Introdução',
        sections: ['Introdução', 'O que é bash'],
      },
      {
        title: 'Comando do terminal',
        sections: ['Introdução', 'Cd, rm, mkdir'],
      },
    ],
    active: true,
  },
  {
    id: 2,
    name: 'Internet',
    module: 1,
    contents: [
      {
        title: 'Introdução',
        sections: ['Introdução', 'O que é a internet'],
      },
      {
        title: 'Requisição HTTP',
        sections: ['Introdução', 'Como é? H de onde?'],
      },
    ],
    active: true,
  },
  {
    id: 3,
    name: 'Lógica de Programação',
    module: 1,
    contents: [
      {
        title: 'Introdução',
        sections: ['Introdução', 'Como o computador entende?'],
      },
      {
        title: 'Variáveis',
        sections: ['Introdução', 'Tipos de variáveis'],
      },
    ],
    active: true,
  },
  {
    id: 4,
    name: 'Introdução a JavaScript',
    module: 1,
    contents: [
      {
        title: 'Introdução',
        sections: ['Introdução', 'O poder do JS',  'Const, let e var'],
      },
      {
        title: 'Condicional',
        sections: ['Introdução', 'Eu vou SE tu for', 'Senão, o que faço?'],
      },
      {
        title: 'Laço de repetição',
        sections: ['Introdução', 'For', 'While'],
      },
    ],
    active: true,
  },
  {
    id: 5,
    name: 'JavaScript - Megulhando a fundo',
    module: 1,
    contents: [
      {
        title: 'ES6',
        sections: ['Introdução', 'ES6'],
      },
      {
        title: 'HOF',
        sections: ['Introdução', 'Como usar?'],
      },
      {
        title: 'Objects',
        sections: ['Introdução', 'Trablhando com Objects'],
      },
    ],
    active: true,
  },
];

export async function coursesStudy() {
  return new Promise((resolve) => resolve(courses));
}