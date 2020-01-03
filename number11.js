//Assignment operator equal
let myVariable = "Some Text";
console.log (myVariable);
//expected result "Some Text"

// Addition assignment operator += as used on strings
// This is the only assignment operator that can be used this way

let firstName = "John";
let lastName = "Smith";
let fullName = "";
console.log (fullName);
// expected result blank space

fullName += (firstName);
console.log (firstName);
// expected result John

fullName += " ";
// Provides space between first and last names

fullName += (lastName);
console.log (fullName);
// expected result John Smith

// Addition assignment operator
let myNum = 500;
console.log (myNum);

myNum += 50;
console.log (myNum);
//expected result 550

// Subtraction assignment operator
myNum = 500;
// Resets myNum to 500

myNum -= 100;
console.log (myNum)
//expected result 400

// *= Multiplication assignment operator
myNum = 500;
// resets myNum to 500

myNum *= 3;
console.log (myNum)
// expected result 1500

// Division assignment operator
myNum = 500;
// resets myNum to 500

myNum /=2
console.log (myNum)
// expected result 250

// %= remainder assignment operator
/* Hypthetical sale of items and equal distribution of multiple items 
to customers */

let inventory = 500;
let visitors = 95;

let countToSell = inventory / visitors;
console.log (countToSell);
//expected result approx. 5.263
// Establishes that we an sell 5 whole items to a customer

inventory %= 95;
console.log (inventory);
// expected result 25
/* Establishes that we can sell 5 items to 95 customers and will have 25
items left over to sell to 1 item each to 25 more customers*/














