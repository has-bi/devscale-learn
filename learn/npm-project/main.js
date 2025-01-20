// require is not originally by javascript
var randomstring = require("randomstring");

// Every npm has different approach of implementation, so please read the documentations
const myPassword = randomstring.generate(8);
// console.log(myPassword);

const password = document.getElementById("password");
password.textContent = `My Password is: ${myPassword}`;
