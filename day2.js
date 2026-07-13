//JavaScript Fundamentals Day 2 
//Topic: Conditions and Logical Operators

//Comparision Operators
let a = 10;
let b = 10;
Console.log(a==b);
//Output: true - both values are equal
Console.log(a===b);
//Output: true - value and data type both are same

let x = "25";
let y = 25;
Console.log(x==y);
//Output: true - Only values are compared
Console.log(x===y);
//Output: false - data types are different

//Greater than and less than
let num1 = 50;
let num2 = 30;
Console.log(num1>num2);
//Output: true - 50 is greater than 30
Console.log(num1<num2);
//Output: false - 50 is not less than 30

//if statement
let age = 20
if(age>=18){
  Console.log("you can vote");
}
//Output: true

//if else Statement
let marks = 40;
if(marks >=50) {
  Console.log("pass");
} else {
  Console.log("fail");
}
//Output: fail - marks are less than 50

//else if Statement
let score = 85;
if (score>=90) {
  Console.log("A+");
} else if (score>= 80){
  Console.log("A");
} else if (score>= 70){
  Console.log("B");
} else {
  console.log("fail");
}
//Output: A - first true condition runs

// AND Operator (&&)
let StudentAge = 20;
let hasID = true;
if (studentAge >=18 && hasID == true ) {
  Console.log ("Entry Allowed");
}
// Output: Entry Allowed - Both conditions are true 

//OR Operator (||)
let isAdmin = false;
let isManager = true;
if (isAdmin || isManager){
  Console.log("Access Granted")
}
//Output: Access Granted - One condition is true 

//NOT Opertor (!)
let isLoggedIn = false;
if (!isLoggedIn){
  Console.log("Please Login");
} else {
  console.log("welcome");
}
//Output: Please Login - False value become true with!




















