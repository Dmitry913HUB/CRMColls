const express = require('express');
const https = require('https');

const app = express();

app.use(express.json());

app.post('/processLinks', async (req, res) => {
  const { links } = req.body;

  const results = await Promise.all(links.map(async link => {
    return new Promise((resolve, reject) => {
      https.get(link, response => {
        let data = '';
        response.on('data', chunk => {
          data += chunk;
        });
        response.on('end', () => {
          resolve(data);
        });
        response.on('error', reject);
      });
    });
  }));

  res.json(results);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});