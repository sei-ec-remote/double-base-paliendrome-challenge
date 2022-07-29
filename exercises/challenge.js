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
const doubleBasePalindromeSum = function ( base1, base2, upperLimit ) {

      //change number to binary
      let palindrome= (base1 >>> 0).toString(2)
      //remove the leading zeros (do I need to do this?)
      const noLeadingZeros = parseInt(palindrome, 10)
      // reverse the string
      let reverseString = noLeadingZeros.toString().split("").reverse().join("")
      // remove leading zeros (if I need to do this I should be able to only do it once)
      const noLeadingZerosReverse = parseInt(reverseString, 10)

      const limit = Math.floor(noLeadingZerosReverse.length/2)

      for(let i=0; i<limit; i++){
            if (noLeadingZerosReverse[i] !== noLeadingZerosReverse[noLeadingZerosReverse.length -i -1]){
                  console.log(false)
                  return false
            }else{
                  console.log(true)
                  return true 
            }
      }
      console.log(noLeadingZerosReverse)
      return noLeadingZerosReverse
}

      doubleBasePalindromeSum(585)

      // DO NOT MODIFY
      module.exports = {
            doubleBasePalindromeSum,
      }



