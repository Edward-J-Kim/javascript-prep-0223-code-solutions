var number1 = 5;
var number2 = 3;
var product = number1 * number2;
console.log('value of the product:', product);
console.log('Type of the product:', typeof product);

var charge = 4;
var payment = 2;
var amountRemaining = charge - payment;
console.log('value of the amountRemaining:', amountRemaining);
console.log('Type of the amountRemaining:', typeof amountRemaining);

var tests = 1;
var assignments = 8;
var final = 6;
var grade = (tests * assignments * final) / 3;
console.log('value of the grade:', grade);
console.log('type of the grade:', typeof grade);

var firstName = 'Edward';
var lastName = 'Kim';
const fullName = firstName + lastName;
console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

var pH = 9;
var isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

var numberOfSoldiers = 12;
var isSparta = (numberOfSoldiers === 300);
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let nickname = fullName;
console.log('value of the nickname:', nickname += ' is the GOAT!');
console.log(nickname);
