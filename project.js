var firstName = prompt("tell us your first name please");
var lastName = prompt(" now tell us your last name please");
var height = prompt("what is your height in cm");
var age = prompt("how old are you");
var pet = prompt("whats the name of your pet");
alert("thanks for the information")

var nameCheck = null;
var ageCheck = null;
var heightCheck = null;
var petCheck = null;

if (firstName[0] === lastName[0]) {
  nameCheck = true;
}else {
  nameCheck = false;
}

if (age > 20 && age < 30) {
  ageCheck = true;
}else {
  ageCheck = false;
}

if (height >= 170) {
  heightCheck = true;
}else {
  heightCheck = false;
}

if (pet[pet.length-1] === "y"){
  petCheck = true;
}else {
  petCheck = false;
}


if (nameCheck && ageCheck && heightCheck && petCheck) {
  console.log("Welcome Home Pal!");
}else {
  console.log("Warning! Infiltrator Detected!");
}
