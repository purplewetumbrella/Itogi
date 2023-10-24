import('node-fetch').then(fetch => {
  const express = require('express');
  const app = express();
  app.get('/weather', async (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const url = `https://api.weather.yandex.ru/v2/informers?lat=${lat}&lon=${lon}`;
    const options = {
      headers: {
        'X-Yandex-API-Key': '049543d6-8a7e-4cdc-adf9-52ecb11092ce',
      },
    };
    try {
      const response = await fetch.default(url, options);
      const data = await response.json();
      console.log(data);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
}).catch(err => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});
