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

//OR
