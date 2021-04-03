const courses = [
  {
    id: 1,
    name: 'Introdução a Bash', // SectionTitle
    module: 1,
    contents: [
      {
        title: 'Introdução', // subSectionTitle
        sections: [ // contentsSubSection
          {
            chapterTitle: 'Introdução',
            content: `<p>
              Para acessar o bash no linux tecle:
              </p>
              <code> Ctrl + alt + T </code>
              <p>
                  Você pode criar pastas, deletar,
                  percorrer por dentro do seu computador usando apenas o seu terminal.
                  Isso não é lindo? :)
                  Vamos ver alguns comando legais durante esse curso de introdução.
                  Vamos lá, avançar!
              </p>`,
          },
          {
            chapterTitle: 'O que é bash',
            content: `<p>
              Veja o que é bash
              </p>
              <code> Ctrl + alt + T </code>
              <p>
                 Bash é isso!
              </p>`,
          },
        ],
      },
      {
        title: 'Comando do terminal',
        sections: [
          {
            chapterTitle: 'Introdução',
            content: `<p>
              O que é o comando:
              </p>
              <p>
                  Faça o comando aqui
              </p>`,
          },
          {
            chapterTitle: 'Cd, rm, mkdir',
            content: `<p>
              Faça aqui o seu cd
              </p>
              <p>
                Você pode criar pastas, deletar,
                percorrer por dentro do seu computador usando apenas o seu terminal.
                Isso não é lindo? :)
                Vamos ver alguns comando legais durante esse curso de introdução.
              </p>`,
          },
        ],
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
  {
    id: 6,
    name: 'React - A beleza do Front',
    module: 2,
    contents: [
      {
        title: 'React - Introdução',
        sections: ['Introdução', 'Componentes'],
      },
      {
        title: 'States',
        sections: ['Trabalhando com estados', 'Melhores pŕaticas'],
      },
      {
        title: 'Rotas',
        sections: ['Onde que eu to?', 'Switch'],
      },
    ],
    active: true,
  },
];

export const modules = [
  {
    number: 1,
    loked: false,
  },
  {
    number: 2,
    loked: false,
  },
  {
    number: 3,
    loked: false,
  },
  {
    number: 4,
    loked: true,
  },
  {
    number: 5,
    loked: true,
  },
  {
    number: 6,
    loked: true,
  },
]

export async function coursesStudy() {
  return new Promise((resolve) => resolve(courses));
}