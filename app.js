const express = require('express');
const chalk = require('chalk'); // allows me to define colours on my errors etc
const debug = require('debug')('CipherApp');
const morgan = require('morgan'); // allows logging of web traffic
const path = require('path'); // means it doesn't care about / or \ in my code for filepaths for HTML serving
const fs = require('fs');

// const data = fs.readFileSync('users.json');
// const logins = JSON.parse(data);
// console.log(logins);
// fs.writeFileSync('users2.JSON', logins);


const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('tiny')); // combined,tiny
app.use(express.static(path.join(__dirname, '/public/'))); // this express.static line instructs node to use the public directory for it's CSS and JS files.
app.set('views', './views');
app.set('view engine', 'pug');

const cipherRouter = require('./routes/routes');
app.use('/', cipherRouter);

module.exports = app;

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`); // string templates in message
});
  
// function signUp() {
//   alert("Well, this did work by alerting the screen");
//   var userName = document.getElementById("user_name").value;
//   var passWord = document.getElementById("user_pass").value;
//   alert(userName);
//   alert(passWord);
//   console.log(userName);
//   console.log(passWord);
//   fs.writeFile('temp.txt', userName)

// }