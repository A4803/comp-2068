// My synthwave theme
console.log("Hello World");

// this is a single-line comment
/*
  this is
  a multi-line
  comment
*/

const dob = '1984-04-28';
let age = 35;

{
  const dob = '1978-12-22';
  let age = 40;
}
console.log(dob);
console.log(age);

let dc = ['Batman', 'Joker', 'The Doll Maker', 23, true, {}];
console.log(dc.length);

dc.push('my new element');
console.log(dc.length);

dc.shift();

const student = {
  id: 123456789,
  name: 'Shaun',
  age: 40,
  greeting: function () {
    return 'Hello there';
  }
};
console.log(student.greeting());

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function withAName(name) {
  return 'Hi ' + name;
}

const whatsInAName = withAName;
console.log(whatsInAName('Gokul'));
console.log(withAName('Hitesh'));

if (true) {
  return 'do this';
} else if (false) {
  return 'do this instead';
} else {
  return 'default';
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const temps = [90, 73, 27, 45];
for (let i = 0; i < temps.length; i++) {
  console.log(temps[i]);
}

for (let temp of temps) {
  console.log(temp);
}

temps.forEach(function (temp) {
  console.log(temp);
});

const person = {
  name: 'Shaun McKinnon',
  age: 40,
  dob: '1978-12-22'
}

for (let key in person) {
  console.log(key + ': ' + person[key]);
  console.log(`${key}: ${person[key]}`);
}