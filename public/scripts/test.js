const fs = require('fs');

const data = fs.readFileSync('users.json');
const logins = JSON.parse(data);
console.log(logins);
fs.writeFileSync('users2.JSON', logins);


function signUp() {
    //reset all fields to blank 
    alert("Well, this did work by alerting the screen");
    var userName = document.getElementById("user_name").value;
    var passWord = document.getElementById("user_pass").value;
    alert(userName);
    alert(passWord);
    // const data = fs.readFileSync('users.json');
    // const logins = JSON.parse(data);
    // console.log(logins);
    // alert(logins);
}





// var userKey = document.getElementById("my-key").value;
// var userText = document.getElementById("plain-text").value;