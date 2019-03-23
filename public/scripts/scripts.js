function resetCaesar() {

    //reset all fields to blank
    //    alert("gime something");
    document.getElementById("plain-text").value = "";
    document.getElementById("my-key").value = "";
    document.getElementById("my-key1").value = "";
    document.getElementById("cipher-text").value = "";
    document.getElementById("original-text").value = "";
}

function resetRev() {
    //reset all fields to blank 
    document.getElementById("inputString").value = "";
    document.getElementById("reversedString").value = "";
    document.getElementById("reverse").value = "";
    document.getElementById("normal").value = "";
}

function codec(){
var i = document.getElementById("container1");
var j = document.getElementById("container2");
if (i.style.display === "block"){
i.style.display = "none";
j.style.display = "block";}
else {
i.style.display = "block";
j.style.display = "none";
}
}


function randomInt() { //used w3 schools to get correct syntax https://www.w3schools.com/js/js_random.asp
    var min = 1;
    var max = 25;
    var random = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("my-key").value = random;
}

function isLetter(str) { //https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
    return str.length === 1 && str.match(/[a-z]/i);
}

function encrypt() {

    // Empty Original Text
    document.getElementById("original-text").value = "";

    var userKey = document.getElementById("my-key").value;
    var userText = document.getElementById("plain-text").value;
    
    if (!(userKey >= 1 && userKey < 26)) { //if not greater than 1, less than 26 or left empty send  alert
        alert("WARNING! Key must be between 1 and 25");
        return;
    }
    
    if (userText.length === 0) {
        alert("WARNING! Plain Text is empty");
    }

    userText = userText.toLowerCase();
    var cipherText = "";
    var charSet = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < userText.length; i++) {
        var current = userText.charAt(i);

        if (!isLetter(current)) {
            cipherText += current;
            continue;
        }

        var index = 0;
        index = charSet.indexOf(current);
        var shiftLocation = (parseInt(index) + parseInt(userKey)) % 26;
        cipherText += charSet.charAt(shiftLocation);
    }

    document.getElementById("original-text").value = cipherText;
}

function decrypt() {
    var userKey = document.getElementById("my-key1").value;
    var cipherText = document.getElementById("cipher-text").value;

    if (!(userKey >= 1 && userKey < 26)) {
        alert("WARNING! Key must be between 1 and 25");
        return;
    }
    
    var original = "";
    var charSet = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < cipherText.length; i++) {
        var current = cipherText.charAt(i);

        if (!isLetter(current)) {
            original += current;
            continue;
        }

        var index = 0;
        index = charSet.indexOf(current);
        var num = parseInt(index) - parseInt(userKey);
        var shiftLocation = (num + 26) % 26;
        original += charSet.charAt(shiftLocation);
    }

    document.getElementById("original-text").value = original;
}



function reverseCipher() {
    var inputString = document.getElementById("inputString").value;
    var splitString = inputString.split(""); //splits the string into separate individual parts (an array)
    var reverseArray = splitString.reverse(); //uses the builtin reverse function to reverse the entire array
    var reverseString = reverseArray.join(""); //joins each part of the array to create a single string
    document.getElementById("reverse").innerHTML = reverseString;
}

function unReverse() {
    var reverseString = document.getElementById("reversedString").value;
    var splitString = reverseString.split(""); //splits the string into separate individual parts
    var reverseArray = splitString.reverse(); //uses the builtin reverse function to reverse the entire string/array
    var correctString = reverseArray.join(""); //joins each part of the array to create a single string
    document.getElementById("normal").innerHTML = correctString;
}
