const number1 = 5;
const number2 = 3;
const product = number1 * number2;
console.log('value of the product:', product);
console.log('Type of the product:', typeof product);

const charge = 4;
const payment = 2;
const amountRemaining = charge - payment;
console.log('value of the amountRemaining:', amountRemaining);
console.log('Type of the amountRemaining:', typeof amountRemaining);

const tests = 1;
const assignments = 8;
const final = 6;
const grade = (tests * assignments * final) / 3;
console.log('value of the grade:', grade);
console.log('type of the grade:', typeof grade);

const firstName = 'Edward';
const lastName = 'Kim';
const fullName = firstName + lastName;
console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

const pH = 9;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

const numberOfSoldiers = 12;
const isSparta = (numberOfSoldiers === 300);
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let nickname = fullName;
console.log('value of the nickname:', nickname += ' is the GOAT!');
console.log(nickname);
