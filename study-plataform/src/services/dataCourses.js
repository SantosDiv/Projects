const courses = [
  {
    id: 1,
    name: 'Introdução a Bash', // SectionTitle
    module: 1,
    points: 400,
    contents: [
      {
        title: 'Introdução', // chapterTitle
        subSections: [ // contentsSubChapter
          {
            id: 252,
            chapterTitle: 'Introdução', // SubChapterTitle
            videoSrc: 'https://player.vimeo.com/video/532889464?autoplayer=1',
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
            taskCompleted: false,
          },
          {
            id: 265,
            chapterTitle: 'O que é bash', // SubChapterTitle
            videoSrc: 'https://player.vimeo.com/video/535349619',
            content: `<p>
              Veja o que é bash
              </p>
              <p>
              GNU Bash ou simplesmente Bash é um interpretador de comandos, um entre os diversos tradutores entre o usuário e o sistema operacional conhecidos como shell.

              Acrônimo para "Bourne-Again SHell"[2], o Bash é uma evolução retro-compatível muito mais interativa do Bourne Shell (sh). Os shells Bourne permitem a execução de sequências de comandos inseridos diretamente na linha de comandos ("prompt") ou ainda lidos de arquivos de texto conhecidos como shell scripts. Neles se podem invocar comandos internos aos próprios shells (conhecidos como comandos "builtins") ou ainda arquivos binários ou scripts de terceiros arquivados nos dispositivos de armazenamento do sistema.
              (fonte - Wikpédia)
              </p>`,
            taskCompleted: false,
          },
          {
            id: 124,
            chapterTitle: 'Exemplos', // SubChapterTitle
            videoSrc: '',
            content: `<p>
              Você pode ter acesso aos exemplos aqui
              </p>
              <a href="https://www.w3schools.com/js/js_exercises.asp" target="_blanck" />
              <p>
                Entre e divirta-se! :D
              </p>`,
              taskCompleted: false,
          },
        ],
        chaptherCompleted: false,
        points: 400,
      },
      {
        title: 'Comando do terminal', // chapterTitle
        subSections: [ // contentsSubChapter
          {
            chapterTitle: 'Introdução',
            videoSrc: 'https://player.vimeo.com/video/532889464?autoplayer=1',
            content: `<p>
              O que é o comando:
              </p>
              <p>
                Acrônimo para "Bourne-Again SHell"[2], o Bash é uma evolução retro-compatível muito mais interativa do Bourne Shell (sh). Os shells Bourne permitem a execução de sequências de comandos inseridos diretamente na linha de comandos ("prompt") ou ainda lidos de arquivos de texto conhecidos como shell scripts. Neles se podem invocar comandos internos aos próprios shells (conhecidos como comandos "builtins") ou ainda arquivos binários ou scripts de terceiros arquivados nos dispositivos de armazenamento do sistema.
              </p>`,
            taskCompleted: false,
          },
          {
            chapterTitle: 'Cd, rm, mkdir',
            videoSrc: '',
            content: `<p>
              Faça aqui o seu cd
              </p>
              <p>
                Você pode criar pastas, deletar,
                percorrer por dentro do seu computador usando apenas o seu terminal.
                Isso não é lindo? :)
                Vamos ver alguns comando legais durante esse curso de introdução.
              </p>`,
            taskCompleted: false,
          },
        ],
        chaptherCompleted: false,
        points: 450,
      },
    ],
    active: true,
  },
  {
    id: 2,
    name: 'Internet',
    module: 1,
    points: 550,
    contents: [
      {
        title: 'Introdução',
        subSections: ['Introdução', 'O que é a internet'],
      },
      {
        title: 'Requisição HTTP',
        subSection: ['Introdução', 'Como é? H de onde?'],
      },
    ],
    active: true,
  },
  {
    id: 3,
    name: 'Lógica de Programação',
    module: 1,
    points: 620,
    contents: [
      {
        title: 'Introdução',
        subSections: ['Introdução', 'Como o computador entende?'],
      },
      {
        title: 'Variáveis',
        subSections: ['Introdução', 'Tipos de variáveis'],
      },
    ],
    active: true,
  },
  {
    id: 4,
    name: 'Introdução a JavaScript',
    module: 1,
    points: 500,
    contents: [
      {
        title: 'Introdução',
        subSections: ['Introdução', 'O poder do JS',  'Const, let e var'],
      },
      {
        title: 'Condicional',
        subSections: ['Introdução', 'Eu vou SE tu for', 'Senão, o que faço?'],
      },
      {
        title: 'Laço de repetição',
        subSections: ['Introdução', 'For', 'While'],
      },
    ],
    active: true,
  },
  {
    id: 5,
    name: 'JavaScript - Megulhando a fundo',
    module: 1,
    points: 600,
    contents: [
      {
        title: 'ES6',
        subSections: ['Introdução', 'ES6'],
      },
      {
        title: 'HOF',
        subSections: ['Introdução', 'Como usar?'],
      },
      {
        title: 'Objects',
        subSections: ['Introdução', 'Trablhando com Objects'],
      },
    ],
    active: true,
  },
  {
    id: 6,
    name: 'React - A beleza do Front',
    module: 2,
    points: 610,
    contents: [
      {
        title: 'React - Introdução',
        subSections: ['Introdução', 'Componentes'],
      },
      {
        title: 'States',
        subSections: ['Trabalhando com estados', 'Melhores pŕaticas'],
      },
      {
        title: 'Rotas',
        subSections: ['Onde que eu to?', 'Switch'],
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