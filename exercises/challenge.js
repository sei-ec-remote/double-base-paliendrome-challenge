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
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
      //first - I want to be able to convert a nmber from decimal to binary:
      // To do that, we run:
      let sumOfAll = null
      for (let i = 0; i < upperLimit; i++) {
            const checkPalindrome = (number, base) => {
                  const arr = (number).toString(base).split('')
                  const arrRev = (number).toString(base).split('').reverse()
                  return JSON.stringify(arr) === JSON.stringify(arrRev)
            }
            
            if (checkPalindrome(i, base1) && checkPalindrome(i, base2) ) {
                  sumOfAll += i
            }
      }
      return sumOfAll
      
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}