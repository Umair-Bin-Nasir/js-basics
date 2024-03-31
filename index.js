// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen (=)
// Are case-sensitive

let firstName = "Umair";
console.log(firstName);
let lastName = "Nasir";
console.log(lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Primitives or Value Types

let name = "Ali"; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName1 = undefined;
let lastName1 = null;

// Reference Types

// Object
// Array
// Function

// Keyword 'typeof' is used to check the type of variables

// Object
let person = {
  name: "Umair",
  age: 30,
};

// Dot Notation
person.age = 23;

// Bracket Notation
person["name"] = "Mirza";
console.log(person);

// Array
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors);
// index
console.log(selectedColors[0]);
console.log(selectedColors[1]);
// properties
console.log(selectedColors.length);
// Functions
function greet() {
  console.log("Hello World");
}
greet();

// Performing a task
function newPerson(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
newPerson("Umair", "Mirza");

// Calculating a value
function square(number) {
  return number * number;
}
console.log(square(7));

// let number = square(5);
// console.log(number);

// Function is a set of statements that either performs a task or calculate and returns a value
