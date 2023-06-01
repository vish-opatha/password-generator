let passwordLength; 
let password; 
let isUpperCaseRequired;
let isLowerCaseRequired; 
let isNumbersRequired; ;
let isSpecialCharRequired;
let pwCombination = []; 
const numberList = ["0","1","2","3","4","5","6","7","8","9"];
const capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const specialChar = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","\\","{","}","|",";","\'",":","\"","\,",".","/","<",">","?"];
let listOfChars; 
let pwArray = []; 
let count; 
let generatePasswordBtn = document.querySelector('#generate');
let reGeneratePasswordBtn = document.querySelector('#re-generate');
let passwordText = document.querySelector('#password');

/**
 * This function gets the length of the password
 * Password length is expected to be between 8 and 128 characters.
 */
function getPasswordLength() {
  passwordLength = 0;
  passwordLength = window.prompt('Please enter the desired length of your password?');

  if(passwordLength < 8 || passwordLength > 128 ) {
      window.alert('Enter a number between 8 to 128!');
      getPasswordLength();
      return;
  }
}

/**
 * This function gets the password combination from the user, and derive the combination array.
 */
function getPasswordCombination() {
  pwCombination = [0,0,0,0];
  pwArrayIndex = 0;
  pwArray = [];
  
  isNumbersRequired = window.confirm('Do you need numbers in your password?');
  isUpperCaseRequired = window.confirm('Do you need uppercase letters in your password?');
  isLowerCaseRequired = window.confirm('Do you need lowercase letters in your password?');
  isSpecialCharRequired = window.confirm('Do you need special characters in your password?');

  if(!(isLowerCaseRequired || isUpperCaseRequired || isNumbersRequired || isSpecialCharRequired)) {
      window.alert('You need to select at lease one from numbers\n uppercase, lowercase and special characters.');
      getPasswordCombination();
      return;
  }

  generatePasswordCombination(isNumbersRequired,0,numberList);
  generatePasswordCombination(isUpperCaseRequired,1,capLetters);
  generatePasswordCombination(isLowerCaseRequired,2,smallLetters);
  generatePasswordCombination(isSpecialCharRequired,3,specialChar);
}

/**
 * This function is a helper function use to derive password combination.
 * pwCombination is an array of four items [0,1,0,1] --> Customer needs NO numbers, YES uppercase, NO lowercase, YES special chars. 
 * @param {boolean} isRequired - States if the user needs particular character type
 * @param {number} index - Array index in the pwCombination array
 * @param {Array<string>} listOfChars - Reference array for particular character type
 */
function generatePasswordCombination(isRequired, index, listOfChars) {
  if(isRequired)
  {
    pwCombination[index] = 1;
    pwArray[pwArrayIndex] = listOfChars;
    pwArrayIndex++;
  }
}

/**
 * This function is used to generate the characters to satify the user's password combination.
 * The password needs to have at least one character to satisfy the user's password combination.
 * @param {number} aIndex - The array index from the password combination array
 * @param {number} refArray - The reference array for a particular character set
 */
function generateFirstChars(aIndex,refArray) {
  if(pwCombination[aIndex] === 1)
  {
     let index = Math.floor(Math.random() * refArray.length);
     let firstChar = refArray[index];

     password = `${password}${firstChar}`;
     count = count + 1; 
  }
}

/**
 * This function is used to generate the password.
 * Firstly, calls the generateFirstChars for each combination 
 * Then, randomly generate other remaining characters.
 * @returns {string} - The generated password
 */
function generatepassword() {
  count = 0;
  let rIndex1, rIndex2, randomArray;
  password = '';

  generateFirstChars(0,numberList); 
  generateFirstChars(1,capLetters); 
  generateFirstChars(2,smallLetters); 
  generateFirstChars(3,specialChar);

  const remainingCharacters = passwordLength - count; 
   
  for(i = 0; i < remainingCharacters; i++) {
    rIndex1 = Math.floor(Math.random() * pwArray.length); 
    randomArray = pwArray[rIndex1];
    rIndex2 = Math.floor(Math.random() * randomArray.length); 
    
    password = `${password}${pwArray[rIndex1][rIndex2]}`
  }
  
  return password;
}

/**
 * This function generates the password for the first time.
 * Includes requesting the length of the password.
 * Includes generating the password combination.
 */
function displayPassword() 
{
    getPasswordLength();
    getPasswordCombination();
    password = generatepassword();
    passwordText.textContent = password;
}

/**
 * This function regenerates the password for the second time.
 * It uses the password length and the combination from the first time.
 */
function regeneratePassword(){
    password = generatepassword();
    passwordText.textContent = password;
}

generatePasswordBtn.addEventListener('click', displayPassword);
reGeneratePasswordBtn.addEventListener('click', regeneratePassword);