const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const router = require('./route/bookroute');
app.use('/books', router);

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});