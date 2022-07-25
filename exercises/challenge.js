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
const doubleBasePalindromeSum = function (base1, base2, upperBound) {
      const checkPalindrome = (num) => {
            // cast to a string, for safety
            const toCheck = num.toString();

            for (let i = 0; i < Math.floor(toCheck.length / 2); i++) {
                  // fail if this position is not palindromic; flooring the division
                  // ignores the middle digit for odd-length numbers, which happens
                  // to be irrelevant for palindrome checking
                  if (toCheck[i] !== toCheck[toCheck.length - i - 1]) { return false; }
            }

            // if we've made it here, all positions are palindromic => success!
            return true;
      }

      let sum = 0;
      for (let n = 1; n <= upperBound; n++) {
            if (checkPalindrome(n.toString(base1))
                  && checkPalindrome(n.toString(base2))) {
                  sum += n;
            }
      }

      return sum;
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}