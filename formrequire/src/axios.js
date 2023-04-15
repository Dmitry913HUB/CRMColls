const axios = require('axios');

const requests = [
  "https://storage.yandexcloud.net/ccscenario/00e55ba2bc529823c73edca5935b2366.json",
  "https://storage.yandexcloud.net/ccscenario/0497128d3f276247bdd751ba34cf5d80.json",
  "https://storage.yandexcloud.net/ccscenario/0b8ab09975fbd4589879351a6a51021d.json"
];

const results = [];

async function fetchAll() {
  const promises = requests.map(request => axios.get(request));
  const responses = await Promise.all(promises);
  responses.forEach((response, index) => {
    results[index] = response.data;
  });
  console.log(results);
}

fetchAll();

console.log(results);