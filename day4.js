
‎// JavaScript Day 4 - Functions
‎
‎
‎// 1. Function Declaration
‎
‎function greet() {
‎  console.log("Hello Ali");
‎}
‎
‎greet();
‎
‎// Output: Hello Ali
‎
‎
‎
‎// 2. Function with Parameters & Arguments
‎
‎function welcome(name) {
‎  console.log("Hello " + name);
‎}
‎
‎welcome("Ahmed");
‎
‎// Output: Hello Ahmed
‎
‎
‎
‎// 3. Function with Return
‎
‎function add(a, b) {
‎  return a + b;
‎}
‎
‎let result = add(5, 3);
‎
‎console.log(result);
‎
‎// Output: 8
‎
‎
‎
‎// 4. Function Expression
‎
‎const multiply = function(a, b) {
‎  return a * b;
‎};
‎
‎console.log(multiply(4, 5));
‎
‎// Output: 20
‎
‎
‎
‎// 5. Arrow Function
‎
‎const subtract = (a, b) => {
‎  return a - b;
‎};
‎
‎console.log(subtract(10, 3));
‎
‎// Output: 7
‎
‎
‎
‎// 6. Arrow Function Short Return
‎
‎const divide = (a, b) => a / b;
‎
‎console.log(divide(10, 2));
‎
‎// Output: 5
‎
‎
‎
‎// 7. Return with If Condition
‎
‎function checkAge(age) {
‎
‎  if (age >= 18) {
‎    return "Allowed";
‎  }
‎
‎  return "Not Allowed";
‎}
‎
‎console.log(checkAge(20));
‎
‎// Output: Allowed
‎
‎
‎
‎// 8. Global & Local Variable
‎
‎let city = "Lahore";
‎
‎function showCity() {
‎
‎  let country = "Pakistan";
‎
‎  console.log(city);
‎}
‎
‎showCity();
‎
‎// Output: Lahore
‎
‎
‎
‎// 9. Default Parameter
‎
‎function greetUser(name = "Guest") {
‎  console.log("Hello " + name);
‎}
‎
‎greetUser();
‎
‎// Output: Hello Guest
‎
‎
