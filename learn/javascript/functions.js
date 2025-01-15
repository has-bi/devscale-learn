// UNDERSTANDING FUNCTIONS
// There are two ways to write functions in JavaScript:
// 1. Common/Traditional Function
function regularFunction(param1, param2) {
  return param1 + param2;
}

// 2. Arrow Function - More modern, concise syntax
const arrowFunction = (param1, param2) => param1 + param2;

// UNDERSTANDING COMPARISONS AND OPERATORS
// Strict Comparison (===) vs Loose Comparison (==)
// Always use strict comparison (===) because it checks both value and type
const num = 5;
const str = "5";
console.log(num == str); // true (loose comparison - converts types)
console.log(num === str); // false (strict comparison - checks type)

// Comparison Operators
const price = 100;
// Greater than
if (price > 50) {
  console.log("Expensive");
}
// Greater than or equal
if (price >= 100) {
  console.log("Premium price");
}
// Less than
if (price < 200) {
  console.log("Affordable");
}
// Less than or equal
if (price <= 100) {
  console.log("Maximum budget");
}

// LOGICAL OPERATORS
const isMember = true;
const hasCoupon = false;

// AND (&&) - Both conditions must be true
if (isMember && hasCoupon) {
  console.log("Special discount applies");
}

// OR (||) - At least one condition must be true
if (isMember || hasCoupon) {
  console.log("Some discount applies");
}

// NOT (!) - Inverts boolean value
if (!isMember) {
  console.log("Not a member");
}

// CONTROL FLOW
// Traditional If-Else (Not recommended for multiple conditions)
function checkDiscount(price, isMember) {
  if (isMember) {
    if (price > 100) {
      return "20% off";
    } else {
      return "10% off";
    }
  } else {
    return "No discount";
  }
}

// Early Return (Better Practice)
function checkDiscountBetter(price, isMember) {
  if (!isMember) return "No discount";
  if (price > 100) return "20% off";
  return "10% off";
}

// Ternary Operator - One line conditional
// syntax: condition ? valueIfTrue : valueIfFalse
const discount = isMember ? "Member discount" : "No discount";

// LOOPS AND ARRAY METHODS
const products = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Banana", price: 3 },
];

// Traditional For Loop
// Use when working with numbers or non-array iteration
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// forEach - Modern way to loop through arrays
// Always use arrow function with forEach
products.forEach((product) => {
  console.log(product.name);
});

// ARRAY MANIPULATION METHODS
// Push - Adds item to end of array
products.push({ name: "Grape", price: 4 });

// Filter - Creates new array with elements that pass the test
// Returns only items that match the condition
const cheapProducts = products.filter((product) => product.price < 3);

// Map - Creates new array by transforming each element
// Returns a new array with modified values
const productNames = products.map((product) => product.name);

// PRACTICAL EXAMPLE COMBINING CONCEPTS
function processShopping(products, isMember) {
  // Filter products under $3
  const affordableProducts = products.filter((product) => product.price < 3);

  // Calculate total using forEach
  let total = 0;
  affordableProducts.forEach((product) => {
    total += product.price;
  });

  // Early return pattern for discount
  if (!isMember) return total;
  if (total > 10) return total * 0.8; // 20% off
  return total * 0.9; // 10% off
}

// Using ternary for status
const orderStatus = total > 0 ? "Processing" : "Empty cart";
