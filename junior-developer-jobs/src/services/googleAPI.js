const { google } = require('googleapis');
const fetch = require('node-fetch');
const googleSearch = require('./credentials/googleSearch.json');

const costumer = google.customsearch('v1');

const search = async () => {
  const response = await costumer.cse.list({
    auth: googleSearch['api-key'],
    cx: googleSearch.searchEngineId,
    q: 'remoto',
    exactTerms: 'front-end junior',
    filter: 'vaga',
    g1: 'br',
  });
  console.dir(response.data.items);
}

search();
// console.log(vagas);







// const API_KEY = 'AIzaSyB7zmyHK4aG2MV1NnordW1WCeCpOZrEr-Q';
// const url = 'https://blogger.googleapis.com/v3/blogs/3213900/posts';
// const blogger = google.blogger({
//   version: 'v3',
//   auth: API_KEY,
// });

// const params = {
//   blogId: '2399953',
//   postId: '5310628572012276714',
// };

// async function searchRobot(params) {
//   // const res = await blogger.blogs.get({
//   //   blogId: params.blogId
//   // });


//   const posts = await blogger.posts.get({
//     blogId: params.blogId,
//     postId: params.postId
//   })
//   // const response = await fetch(res.data.posts.selfLink);
//   // const posts = await response.json();
//   console.dir(posts);
//   // console.dir(res.data.posts.selfLink);
// }

// searchRobot(params);

// export default searchRobot;