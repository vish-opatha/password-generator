let passwordLength; 
let password; 
let isUpperCaseRequired; let isLowerCaseRequired; let isNumbersRequired; let isSpecialCharRequired; 
let pwCombination = [0,0,0,0]; //numbers,uppercase,lowercase,special characters
let numberList = ["0","1","2","3","4","5","6","7","8","9"];
let capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let specialChar = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","\\","{","}","|",";","\'",":","\"","\,",".","/","<",">","?"];
let listOfChars; // This changes to numberList/capLetters/smallLetters/specialChar
let pwArray = []; // This is an array comprises of other arrays from above, based on user input
let pwArrayIndex = 0; // This is the index for the above pwArray
let count; // This counts the number of times if statement in generateFirstChars fn runs
let generatePasswordBtn = document.querySelector('#generate');

function getPasswordLength() {
  passwordLength = 0;
  passwordLength = window.prompt('Please enter the desired length of your password?');

  if(passwordLength < 8 || passwordLength > 128 ) {
      window.alert('Enter a number between 8 to 128!');
      getPasswordLength();
  }
}

function getPasswordCombination() {
  isNumbersRequired = window.confirm('Do you need numbers in your password?');
  isUpperCaseRequired = window.confirm('Do you need uppercase letters in your password?');
  isLowerCaseRequired = window.confirm('Do you need lowercase letters in your password?');
  isSpecialCharRequired = window.confirm('Do you need special characters in your password?');

  if(!(isLowerCaseRequired || isUpperCaseRequired || isNumbersRequired || isSpecialCharRequired)) {
      window.alert('You need to select at lease one from numbers\n uppercase, lowercase and special characters.');
      getPasswordCombination();
  }
}

/*  This function is used to generate a password combination and an array of arrays relating to that combination.
    example:pwCombination = [0,1,0,1] --> Customer needs NO numbers, YES uppercase, NO lowercase, YES special chars.
    According to above the pwArray is [[0,capLetters],[1,specialChar]] */
function generatePasswordCombination(isRequired, index, listOfChars) {
  if(isRequired)
  {
    pwCombination[index] = 1;
    pwArray[pwArrayIndex] = listOfChars;
    pwArrayIndex++;
  }
}

/*  This function is used to randomlygenerate the first character from each category given by the user and it will
    make sure the password include at least one character from each category that user entered.  */
function generateFirstChars(aIndex,refArray) {
  if(pwCombination[aIndex] === 1)
  {
     let index=Math.floor(Math.random() * refArray.length);
     let firstChar=refArray[index];
     password = password +''+ firstChar+'';
     count = count + 1; 
  }
}

// Main function to generate the password, this has multiple functions inside
function generatepassword() {
  let remCharacters = passwordLength - count; //actual number of times the below for loop would run
  let rIndex1, rIndex2, randomArray;
  password = ''; 
  pwCombination = [0,0,0,0]; 
  pwArray = []; 
  count = 0; 
  pwArrayIndex = 0;
  
  getPasswordLength();
  getPasswordCombination();
  
  generatePasswordCombination(isNumbersRequired,0,numberList);
  generatePasswordCombination(isUpperCaseRequired,1,capLetters);
  generatePasswordCombination(isLowerCaseRequired,2,smallLetters);
  generatePasswordCombination(isSpecialCharRequired,3,specialChar);

  // Generate one character from each category to satisfy the user input - validation 
  generateFirstChars(0,numberList); 
  generateFirstChars(1,capLetters); 
  generateFirstChars(2,smallLetters); 
  generateFirstChars(3,specialChar); 

  // Generate the remaining number of characters randomly from random arrays 
  for(i = 0; i < remCharacters; i++) {
    rIndex1 = Math.floor(Math.random() * pwArray.length); //Pickup any array randomly according to the user input
    randomArray = pwArray[rIndex1];
    rIndex2 = Math.floor(Math.random() * randomArray.length); //Pickup random index for the randomly selected above array
      
    password = password + (pwArray[rIndex1][rIndex2]); 
  }
    
  return password;
}

function displayPassword() 
{
    let password = generatepassword();
    let passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// Add event listener to generate button
generatePasswordBtn.addEventListener('click', displayPassword);