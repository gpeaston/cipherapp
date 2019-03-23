const express = require('express');
const chalk = require('chalk'); // allows me to define colours on my errors etc
const debug = require('debug')('CipherApp');
const morgan = require('morgan'); // allows logging of web traffic
const path = require('path'); // means it doesn't care about / or \ in my code for filepaths for HTML serving

const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('tiny')); // combined,tiny
app.use(express.static(path.join(__dirname, '/public/'))); // this express.static line instructs node to use the public directory for it's CSS and JS files.
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index');
});
app.get('/caesar', (req, res) => {
  res.render('caesar');
  // res.sendFile(path.join(__dirname, 'views', 'index2.html'));
  // res.render('index', { list: ['a', 'b', 'c'], title: "Gaz's wee Plural Library" });
});

app.get('/reverse', (req, res) => {
res.render('reverse');
});

app.get('/cdn', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cdnindex.html'));
});

app.get('/gary', (req, res) => {
  res.send('This should be the Gary Route');
});

// const port = port;
app.listen(port, () => {
  // console.log('listening on port ' + chalk.green('port')); // standard boring message
  // console.log(`listening on port ${chalk.green('port')}`); // string templates in message
  debug(`listening on port ${chalk.green(port)}`); // string templates in message
});
