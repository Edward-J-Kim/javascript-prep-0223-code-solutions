const person = {
  firstName: 'Ryan',
  lastName: 'johnson',
  hobby: 'soccer'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'police.';
console.log("the person's current job is", person.job);

person['previous job'] = 'dispatcher.';
console.log("the person's previous job is", person['previous job']);

console.log(person);
