// Declaration of variable and arrays
var pwLength=0; //Length of the password
var passWord=""; //Initial password
/*Boolean variables stating if the user needs any type of letters, 
numbers or special characters */
var incUpperCase; var incLowerCase; var incNumbers; var incSpecialChar;
var isLengthCorrect;
var pwCombination = [0,0,0,0]; //numbers,uppercase,lowercase,special characters
var numberList=["0","1","2","3","4","5","6","7","8","9"];
var capLetters=["A","B","C","D","E","F","G","H","I","J","K","L",
                "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var smallLetters=["a","b","c","d","e","f","g","h","i","j","k","l",
                "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar=["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",
                  ">","?","@","[","]","^","_","`","{","|","}","`"];
var listOfChars; 
var n=0;

var remCharacters=0;
var multicombination= [];
var outerA;
var innerA;
var letterss="";



// Arrays for capital letters and special characters


pwLength=window.prompt("Please enter the desired length of your password?");

while(pwLength<8 || pwLength>128)
{
  window.alert("Enter a number between 8 to 128!");
  pwLength=window.prompt("Please enter the desired length of your password?");
}

incNumbers = window.confirm("Do you need numbers in your password?");
window.alert(incNumbers);
incUpperCase = window.confirm("Do you need uppercase letters in your password?");
window.alert(incUpperCase);
incLowerCase = window.confirm("Do you need lowercase letters in your password?");
window.alert(incLowerCase);
incSpecialChar = window.confirm("Do you need special characters in your password?");
window.alert(incSpecialChar);


var checkcombo;

while(!(incLowerCase || incUpperCase || incNumbers || incSpecialChar))
{
  window.alert("You need to select at lease one from numbers\n uppercase, lowercase and special characters.")
  incNumbers = window.confirm("Do you need numbers in your password?");
  // updateCombination(incNumbers,0,numberList);
  incUpperCase = window.confirm("Do you need uppercase letters in your password?");
  // updateCombination(incUpperCase,1,capLetters);
  incLowerCase = window.confirm("Do you need lowercase letters in your password?");
  // updateCombination(incLowerCase,2,smallLetters);
  incSpecialChar = window.confirm("Do you need special characters in your password?");
}

updateCombination(incNumbers,0,numberList);
updateCombination(incUpperCase,1,capLetters);
updateCombination(incLowerCase,2,smallLetters);
updateCombination(incSpecialChar,3,specialChar);







if(pwCombination[0]==1){
var num=Math.floor(Math.random() * 10);
passWord= passWord+""+num+"";
remCharacters=remCharacters+1;
// pwletter[k]
}

if(pwCombination[1]==1){
var num=Math.floor(Math.random() * 26);
var capL=capLetters[num];
passWord= passWord+""+capL+"";
remCharacters=remCharacters+1;
}

if(pwCombination[2]==1){
var num=Math.floor(Math.random() * 26);
var capS=capLetters[num].toLowerCase();
passWord= passWord+""+capS+"";
remCharacters=remCharacters+1;
}

if(pwCombination[3]==1){
var num=Math.floor(Math.random() * 28);
var S=specialChar[num];
passWord= passWord+""+S+"";
remCharacters=remCharacters+1;
}

var actualRemain=pwLength-remCharacters;
var innerK, outerK;
 
// console.log(passWord);
// console.log("Remaining characters :"+(pwLength-remCharacters));
// console.log(multicombination);

// console.log("number array length: "+numberList.length);

j=0;
for(i=0;i<actualRemain;i++)
{
  innerK=Math.floor(Math.random() * multicombination.length);
  var lengthsub=multicombination[innerK];
  outerK=Math.floor(Math.random() * lengthsub.length);
  passWord=passWord+(multicombination[innerK][outerK]);
  // console.log(multicombination.length);
  console.log(passWord);
  // outerK=math.floor(multicombination)
  
}

// // genPassWordN(pwLength)
// // genPassWordC(pwLength)
// // genPassWordL(pwLength)
// // genPassWordS(pwLength);

// // //Generate random numbers from 0 to 10
// // function genPassWordN(pwLength)
// // {
// //   for(var i=0;i<pwLength;i++)
// //   {
// //       var num=Math.floor(Math.random() * 10);
      
// //       passWord= passWord+""+num+"";
// //   }
  
// // }

// function genPassWordC(pwLength)
// {
//   for(var i=0;i<pwLength;i++)
//   {
//       var num=Math.floor(Math.random() * 26);
//       var capL=capLetters[num];
//       passWord= passWord+""+capL+"";
//   }
  
// }

// // function genPassWordL(pwLength)
// // {
// //   for(var i=0;i<pwLength;i++)
// //   {
// //       var num=Math.floor(Math.random() * 24);
// //       var lowL=capLetters[num];
// //       passWord= passWord+""+lowL+"";
// //   }
// //   passWord=passWord.toLowerCase();
  
// // }

// // function genPassWordS(pwLength)
// // {
// //   for(var i=0;i<pwLength;i++)
// //   {
// //       var num=Math.floor(Math.random() * 28);
// //       var lowL=specialChar[num];
// //       passWord= passWord+""+lowL+"";
// //   }
// // }

// // console.log(passWord);
// // // beforeFinal=passWord.split("");
// // // console.log(beforeFinal);
// // var middle=pwLength/2;

// // var n1= Math.floor(Math.random() * middle);
// // var n2= Math.floor(Math.random() * middle);
// // var n3=Math.floor(Math.random() * middle);

// // var n4 =(pwLength - (n1+n2,n3));
// // console.log (n1+" "+n2+" "+n3+" "+n4);


function updateCombination(isRequired, index, listOfChars)
{
  if(isRequired===true){
    pwCombination[index]=1;
    multicombination[n]=listOfChars;
    n++;
  }
  
}


// //given-------------------------------------------------
// // var generateBtn = document.querySelector('#generate');
// //----------------------------------------------------

// // Write password to the #password input given
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector('#password');

// //   passwordText.value = password;
// // }

// // Add event listener to generate button
// // generateBtn.addEventListener('click', writePassword);
