const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server runner at: http://localhost:${PORT}/`);
});


