const espress = require('express');
const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server runner at: http://localhost:${PORT}/`);
});
