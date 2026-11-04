const express = require('express');
const haikus = require('./haikus.json');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { haikus });
});

module.exports = app;
