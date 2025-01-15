// ===============================
// PRIMITIVE DATA TYPES (Immutable)
// ===============================
// Primitive values are stored directly in memory and are immutable
// When you "change" a primitive, you're actually creating a new value

// String - immutable sequence of characters
let name = "Hasbi";

// Boolean - true/false value
let isMale = true;

// Null - intentional absence of value
let emptyValue = null;

// Undefined - unintentionally missing value
let entity = undefined;

// Number - numeric value
let age = 25;

// Example of logging primitive values
// console.log("String:", name);
// console.log("Age:", age);
// console.log("is Male:", isMale);
// console.log("empty value:", emptyValue);
// console.log("undefined:", entity);

// ===============================
// REFERENCE DATA TYPES (Mutable)
// ===============================
// Reference types store a reference to their value in memory
// Multiple variables can reference the same data
// They are mutable (can be changed)

// Array - ordered list of values
const premierClubs = ["Arsenal", "Man United", "Liverpool"];

// Array of Objects - complex data structure
const devscaleStudents = [
  { name: "Hasbi", address: "JKT", age: 24 }, // Each object is a reference type
  { name: "Budi", address: "PWT", age: 20 },
  { name: "Ani", address: "BDG", age: 27 },
];

// Array traversal example
// console.log(premierClubs[2]); // Accessing by index
// console.log(devscaleStudents); // Logging entire array

// ===============================
// STRING MANIPULATION
// ===============================
// Demonstrating string concatenation and template literals

const firstName = "hasbi";
const lastName = "hassadiqin";

// Old way of concatenation
// const fullName = firstName + " " + lastName;

// Modern way using template literals (preferred)
const fullName = `${firstName} ${lastName}`;

// String manipulation with methods
const correctFirstName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(
  1
)}`;
const correctLastName = `${lastName.charAt(0).toUpperCase()}${lastName.slice(
  1
)}`;

// ===============================
// FUNCTIONS
// ===============================
// Functions are reusable blocks of code
// They help follow the DRY principle (Don't Repeat Yourself)

// Function Declaration
// This is hoisted - can be used before declaration in code
function correctName(firstName, lastName) {
  // Local variables - only accessible inside function
  const correctFirstName = `${firstName
    .charAt(0)
    .toUpperCase()}${firstName.slice(1)}`;
  const correctLastName = `${lastName.charAt(0).toUpperCase()}${lastName.slice(
    1
  )}`;
  const correctFullName = `${correctFirstName} ${correctLastName}`;

  return correctFullName; // Return statement
}

// Function Usage
console.log(correctName("budi", "dudi"));
console.log(correctName("spongebob", "squarepants"));
console.log(correctName("dudum", "tralala"));

// Another function example with numeric operations
function addTwoNumber(x, y) {
  return x + y;
}

// Function composition - using return values in other operations
const numberX = addTwoNumber(1, 2);
const numberY = addTwoNumber(4, 5);
const result = numberX + numberY;
console.log("Result :", result);
