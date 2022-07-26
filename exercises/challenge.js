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

const doubleBasePalindromeSum = function (base10, base2, upperLimit) {
      // console.log((585).toString(base2))
      // console.log((585).toString(base10))
      const str1 = (585).toString(base2)
      function reverseString (thisString) {
            if(thisString === '')
                  return ''
            else {
                  return reverseString(thisString.substr(1)) + thisString.charAt(0)
            }
      }
      // console.log(reverseString(str1))

      let sum = 0;
      for(let i=0;i<upperLimit;i++) {
            const numToBase10 = (i).toString(base10)
            const numToBase2 = (i).toString(base2)
            if(numToBase10 === reverseString(numToBase10) &&
            numToBase2 === reverseString(numToBase2))
                  sum+=i

      }
      return sum
}

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}