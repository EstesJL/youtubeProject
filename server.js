const express = require('express');
const path = require('path');

const port = 8000;

const app = express();
app.use(express.static(path.join(__dirname, 'index.html')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log(`Listening on ${port}`);
