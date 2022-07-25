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
const doubleBasePalindromeSum = function (base1,base2,limit) {
      let sum = 0;

    for (let parity = 0; parity < base1; parity++) {

        let p = generatePalindrome2(1, parity);
        for (let i = base1; p < limit; i++) {
            if (isPalindrome(p, base2)) {
                sum+= p;
            }
            p = generatePalindrome2(i, parity);
        }
    }
    return sum;
}
function isPalindrome(x, base) {

      let s = x.toString(base);
      let a = s.length - 1;
      let b = 0;
  
      while (b < a) {
  
          if (s[a] !== s[b]) {
              return false;
          }
          b++;
          a--;
      }
      return true;
  }
function generatePalindrome2(x, oddPalindrome) {
      let res = x;
      x>>= oddPalindrome;
      while (x > 0) {
          res = (res << 1) | (x & 1);
          x>>= 1;
      }
      return res;
  }

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}