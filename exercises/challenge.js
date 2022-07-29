/*
=============== Double Base Palindrome Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      Don't worry about capitalization.
*/

/*
Question 1
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/
const doubleBasePalindromeSum = function (/* base1, base2, upperLimit */) {
      // palindrome - reads the same forward && backward
      // need to covert base numbers in base 10 to base 2 , STRING
      const string1 = (585).toString(base2)
      // Declare here
      const reverseString = function (thisString) {
            // set to empty string
            if (thisString === "")
            return ""
            // thisString
            // return at index 0
            else {
                  return reverseString(this.String.substr(1)) + this.String.charAt(0)
            }
      }
}
      





// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}