/*
=============== Double Base Palindrome Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      Don't worry about capitalization.
*/

const { Base } = require("mocha/lib/reporters")

/*
Question 1
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/
const doubleBasePalindromeSum = function ( base1, base2, upperLim ) {
      let sum = 0
      // testing every number in base 1 up to upper limit
      for (let i = 0; i < upperLim; i++) {
            // must turn into string to reverse
            let Base1 = i.toString(base1)
            let reverseBase1 = Base1.split('').reverse().join('')
            // if base 1 passes palindrome test
            if (Base1 === reverseBase1) {
                  // convert to base 2 and reverse
                  let Base2 = i.toString(base2)
                  let reverseBase2 = Base2.split('').reverse().join('')
                  // if base 2 passes palindrome test, add i to sum
                  if (Base2 === reverseBase2) {
                        sum+=i
                  }
            }
      }
      return sum
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}