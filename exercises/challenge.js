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
      // since we need to find ALL numbers that are palindrome on two bases, we need to run a loop that is going to iterate over all numbers, up to the upperLimit
      let sumOfAll = null
      for (let i = 0; i < upperLimit; i++) {
            // we need to find a way to check if a number is a palindrome, so lets write a function for that
            const checkPalindrome = (number, base) => {
                  // we take in two parameters, number and base
                  // we turn the number into a string with a base based on input, and split the digits into an array of single digits
                  const arr = (number).toString(base).split('')
                  // we take the same number, split it into the same array, and reverse the array.
                  const arrRev = (number).toString(base).split('').reverse()
                  // we check to see if the arrays hold the same value, and return true r false
                  return JSON.stringify(arr) === JSON.stringify(arrRev)
            }
            // using the parameters that are being passed, we check the same number for palindrome in the two bases
            // if BOTH are true, we add the sum of the number being tested to a sumOfAll variable
            if (checkPalindrome(i, base1) && checkPalindrome(i, base2) ) {
                  sumOfAll += i
            }
      }
      // we get the function to return the variable
      return sumOfAll
      
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}