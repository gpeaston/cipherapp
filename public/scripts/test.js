// import { writeFile } from 'fs';
const fs = require('fs');

function signUp() {
    // alert("Well, this did work by alerting the screen");
    var userName = document.getElementById("user_name").value;
    var passWord = document.getElementById("user_pass").value;
    alert(userName);
    alert(passWord);
    console.log(userName);
    console.log(passWord);
    var dataread = fs.readFileSync('temp.txt', 'UTF-8', function(err, data) {
        console.log(dataread);

    });

    // var dataread = fs.readFileSync("temp.txt", "UTF-8");
    // console.log(dataread);
    // fs.writeFile('temp.txt', userName)

}

    





// var userKey = document.getElementById("my-key").value;
// var userText = document.getElementById("plain-text").value;