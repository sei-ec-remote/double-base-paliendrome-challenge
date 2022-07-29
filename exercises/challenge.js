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
const doubleBasePalindromeSum = function (x, y, upperLimit) {
      // check if base 10 is palindrome
      // if yes, convert to base 2
      // check if base 2 is palindrome
      // if yes add to sum

let palindromeSum = 0
let baseX = 0
let baseY = 0

for (let i = 0; i < upperLimit; i++) {
      // take base10 and reverse it
      const baseYReversed = baseY.toString().split('').reverse().join('')
      // comparing base10 with reversed base10
      if (baseY == baseYReversed) {
            // if true, change base10 to base2
            baseX = baseY.toString(x)
            // reverse base2
            const baseXreversed = baseX.toString().split('').reverse().join('')
            // comparing base2 with reversed base2
            if (baseX == baseXreversed) {
                  // if true, add num in base10
                  palindromeSum += baseY
            }
      }
      baseY++
}
return(palindromeSum)
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}