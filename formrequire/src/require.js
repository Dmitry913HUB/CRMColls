const https = require('https');

const requests = [
  "https://storage.yandexcloud.net/ccscenario/00e55ba2bc529823c73edca5935b2366.json",
  "https://storage.yandexcloud.net/ccscenario/0497128d3f276247bdd751ba34cf5d80.json",
  "https://storage.yandexcloud.net/ccscenario/0b8ab09975fbd4589879351a6a51021d.json"
];

const results = [];

function processRequest(requestIndex) {
  https.get(requests[requestIndex], response => {
    let data = '';
    response.on('data', chunk => {
      data += chunk;
    });
    response.on('end', () => {
      results[requestIndex] = data;
      if (requestIndex < requests.length - 1) {
        processRequest(requestIndex + 1);
      } else {
        console.log(results);
      }
    });
  });
}

processRequest(0);


