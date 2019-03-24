const express = require('express');
const cipherRouter = express.Router();
const path = require('path');
// const app = express();

cipherRouter.route('/')
  .get((req, res) => {
    res.render('index');
  });

cipherRouter.route('/caesar')
  .get((req, res) => {
    res.render('caesar');
    // res.send('Yo Cesare');
  });

cipherRouter.route('/reverse')
  .get((req, res) => {
    res.render('reverse');
  });

cipherRouter.route('/login')
  .get((req, res) => {
    res.render('login');
  });

cipherRouter.route('/signup')
  .get((req, res) => {
    res.render('signup');
  });
  cipherRouter.route('/signuphtm')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'signuphtm.html'));
  });

module.exports = cipherRouter;

// app.get('/', (req, res) => {
//   // res.sendFile(path.join(__dirname, 'views', 'index.html'));
//   res.render('index');
// });

// app.get('/caesar', (req, res) => {
//   res.render('caesar');
// });

// app.get('/reverse', (req, res) => {
//   res.render('reverse');
// });