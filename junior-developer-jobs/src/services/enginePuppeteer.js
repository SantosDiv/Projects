const puppeteer = require('puppeteer');
const fileSistem = require('fs'); // Lib do node para escrever aquivos - Estudar mais!

console.log('Bem vindo ao motor de busca do Diogenes :D ');

// Forma de escrever uma função e executar ao mesmo tempo. (IERM)
// (async () => {
  // })();
let dataPages = [];
async function robot() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const numPages = [1,2,3,4,5,6];
  for(let currentPage of numPages) {
    const url = `https://programathor.com.br/jobs/page/${currentPage}?expertise=J%C3%BAnior`;
    await page.goto(url);
    const listJobs = await page.evaluate(() => {
      // pegar todos os títulos que estão na tela
      const nodeListTitle = document.querySelectorAll('.cell-list h3');
      const nodeListLink = document.querySelectorAll('.cell-list a');

      // transformar nodoList em array
      const jobsTitle = [...nodeListTitle];

      // transformar os nodes em objeto JS
      const listJobs = jobsTitle.reduce((acc, crr, crrIndex) => {
        if(crr.innerText.includes('Front') && !crr.innerText.includes('Vencida')) {
          acc.push({
            title: crr.innerText,
            url: nodeListLink[crrIndex].href,
          });
        }
        return acc;
      }, []);
      return listJobs;
    });
    dataPages.push(...listJobs);
  }

  // Escrever os dados em um arquivo local
  fileSistem.writeFileSync(
    'jobsProgramaThor.json',
    JSON.stringify(dataPages, null, 2),
    err => {
      if(err) throw new Error('something went wrong');
      console.log('well done!');
  });
  await browser.close();
}

robot();