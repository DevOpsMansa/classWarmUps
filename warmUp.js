/*===== 02/01/2024 =====*/

// Given an integer x,
// return true if x is a palindrome
// , and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Solution:
// We need to find if a give number is palindrome or not. A palindrome number is one which when reversed gives the same number. For e.g, 747 is Palindrome number and 526 is not because when reversed it gives 625 which is not equal to 526.

// Also, as it is evident from the examples that negative numbers are not palindromes because they start with - and when reversed the - sign will come at the end which is invalid. Therefore, we only have to check for positive numbers

// Approach
// We can easily solve this problem by reversing the given number and comparing the reversed number with the given number.
// If the number is negative, return false, else proceed to #2.
// Store the given number x in a variable number. We are doing it because we will perform our operations on number and due to that, it’s value will change. We will use x at the end of the program to compare with the reversed number.
// Reverse the number (Just like LeetCode #7 - Reverse Integer).
// Return true if the reverse number and given number are equal, false otherwise.

var isPalindrome = function (x) {
  // Base condition
  if (x < 0) {
    return false;
  }
  // Store the number in a variable
  let number = x;
  // This will store the reverse of the number
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return x === reverse;
};

/*=== 02/02/2024 ===
Resource:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

// Create a class object
// Use constructor to take in value
// Use the this keyword to store the values
// Include at least one method- hint: method are like function inside class objects
// Create a new object with the class object - hint: you have to create a new variable and use the new keyword
// Console log the new object
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
//   *getSides() {
//     yield this.height;
//     yield this.width;
//     yield this.height;
//     yield this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100
// console.log([...square.getSides()]); // [10, 10, 10, 10]

//======02/05/2024======

// Create a function that console logs information

function submitForm() {
  // Retrieve input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Log information to the console
  console.log("Form submitted!");
  console.log("Username:", username);
  console.log("Password:", password);

  // Use setTimeout to create a callback function that console logs info after a certain time
  // Set a timeout to log additional information after 2 seconds
  setTimeout(function () {
    console.log("Additional info after 2 seconds:");
    console.log("Username:", username);
    console.log("Password:", password);
  }, 2000);

  // Call the first function that you created
  // Example function that logs information to the console
  function logInformation() {
    console.log("This is an example function.");
    console.log("You can customize it based on your needs.");
  }
  // Call the function
  logInformation();
  // Observe what happens
}
