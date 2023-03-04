function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('Add two numbers exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertedHoursToMinutes = convertHoursToMinutes(2);
console.log('Convertion exercise:', convertedHoursToMinutes);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addedAndMutipliedby5 = addAndMultiplyBy5(10, 5);
console.log('Add and Multiply By 5 exercise:', addedAndMutipliedby5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multipliedAndDivideBy5 = multiplyAndDivideBy5(35, 10);
console.log('Multiply And Divide By 5 exercise:', multipliedAndDivideBy5);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var subtractedTwoNumbers = subtractTwoNumbers(22, 7);
console.log('Subtract Two Numbers exercise:', subtractedTwoNumbers);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var gotCircleCircumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', gotCircleCircumference);

function getFullName(firstName, lastName) {
  var fullName = (firstName + ' ' + lastName);
  return fullName;
}
console.log('get Full Name exercise:', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return Math.pow(number, 3);
}

var calculatedCube = cube(5);
console.log('Cuve exercise:', calculatedCube);
