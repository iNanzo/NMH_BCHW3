// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Characters
var generatedPassword = ""
var lowerCase = "abcdefghijklmnopqrstuvqxyz";
var upperCase = lowerCase.toUpperCase();
var numericChar = "1234567890";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Password Arrays (Converted strings to arrays)
var mergedArray = [];
const arrayLow = [...lowerCase];
const arrayUp = [...upperCase];
const arrayNum = [...numericChar];
const arraySpec = [...specialChar];

//Password Length & Booleans
var passwordLength;
var lowerBool;
var upperBool;
var numericBool;
var specialBool;

// Write password to the #password input

//Password Credential Prompts
function boolPrompts() {
    passwordLength = prompt("How long would you like your password to be?", "Please choose a number between 8 and 128.")
    if(passwordLength < 7 || passwordLength > 128){
        passwordLength = prompt("Invalid Value", "Please choose a number between 8 and 128.")
    }
    lowerBool = confirm("Would you like to include lowercase letters?");
    upperBool = confirm("Would you like to include uppercase letters?");
    numericBool = confirm("Would you like to include numeric characters?");
    specialBool = confirm("Would you like to include special characters?");
    if(lowerBool + upperBool + numericBool + specialBool === 0){
        alert("Please include at least one type of character, restarting generator...");
        boolPrompts();
    }

    entr = "\r\n"

    alert("Password Length: " + passwordLength + entr + "Lowercase: " + lowerBool + entr + "Uppercase: " + upperBool + entr + "Numbers: " + numericBool + entr + "Special Characters: " + specialBool)
    generatePassword();
}

//Get Random Character Function
function randomChar(){
    return mergedArray[Math.floor(Math.random() * mergedArray.length)];
}

//Password Generator
function generatePassword(){
    if(lowerBool){
        mergedArray = [].concat(arrayLow);
    }if(upperBool){
        mergedArray = mergedArray.concat(arrayUp);
    }if(numericBool){
        mergedArray = mergedArray.concat(arrayNum);
    }if(specialBool){
        mergedArray = mergedArray.concat(arraySpec);
    }
  
    for(let i = 0; i < passwordLength; i++){
        generatedPassword = generatedPassword.concat(randomChar());
    }
    
    mergedArray = [];
}

//Password Display
function writePassword() {

    var password = generatedPassword;
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    generatedPassword = ""
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);