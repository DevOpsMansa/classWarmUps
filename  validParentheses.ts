/** ====02/15/2024====
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
*/

/**
 To determine if a string containing only the characters '(', ')', '{', '}', '[' and ']' is valid according to the given rules, you can use a stack-based approach. The idea is to use a stack to keep track of the opening brackets encountered, and whenever a closing bracket is encountered, check if it matches the corresponding opening bracket at the top of the stack.
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (bracketMap[char]) {
      // If it's a closing bracket
      const topElement = stack.length === 0 ? "#" : stack.pop();
      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push onto the stack
      stack.push(char);
    }
  }

  // The string is valid if the stack is empty at the end
  return stack.length === 0;
}

// Output usage:
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true

/**
 *This function iterates through each character in the string. If it encounters an opening bracket, it pushes it onto the stack. If it encounters a closing bracket, it checks if the corresponding opening bracket is at the top of the stack. If not, the string is considered invalid. Finally, the string is valid if the stack is empty at the end.

This approach ensures that brackets are closed in the correct order and that every closing bracket has a corresponding open bracket of the same type.
 */


/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

//Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

//Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: //There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    
  //Loop through first word in array
  for (let i = 0; i < strs[0].length; i++){

      //loop through each word
      for(let j = 1; j < strs.length; j++){
          
          //If letter does not match first word letter, stop and return pword up to that point
          if(strs[0][i] !== strs[j][i]){
              return strs[0].slice(0, i)
          }
      }
  }

  return strs[0]
};

//OR

function longestCommonPrefix(strings) {
  if (strings.length === 0) {
      return "";
  }

  // Sort the strings to ensure the shortest and longest are at the extremes
  strings.sort();

  // Take the first and last strings in the sorted array
  const firstStr = strings[0];
  const lastStr = strings[strings.length - 1];

  // Find the common prefix between the first and last strings
  let commonPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
      if (i < lastStr.length && firstStr.charAt(i) === lastStr.charAt(i)) {
          commonPrefix += firstStr.charAt(i);
      } else {
          break;
      }
  }

  return commonPrefix;
}

// Example usage:
const inputStrings = ["flower", "flow", "flight"];
const result = longestCommonPrefix(inputStrings);
console.log("Longest Common Prefix:", result);


//OR

function longestCommonPrefix(strs){
  if (strs.length === 0) {
    return ''
  }
    
  const first = strs[0];
  let response = ''; 
  let prefix = '';

  for (let i = 0; i < first.length; i++) {
    prefix += first[i];
    let find = strs.filter(s => s.startsWith(prefix));
    if (find.length === strs.length) {
      response = prefix;
    }

  }
  return response;
};