const express = require('express');
const cipherRouter = express.Router();
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