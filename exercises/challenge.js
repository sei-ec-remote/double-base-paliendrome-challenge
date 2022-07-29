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

      let sum =0 
      for(let i=0; i<upperLimit; i++){
      //change number to binary and change to a string
            let palindrome1= (base1 >>> 0).toString(2)
            
      // reverse the string and join
            let reverseString1 = palindrome1.split("").reverse().join("")
      // check to see if they are equal and pass palindrome test
            if(palindrome1 === reverseString1){
                  // if they pass change base 2 to a binary number and string 
                  let palindrome2 = (base2 >>> 0).i.toString(2)
                  // reverse the string
                  let reverseString2 = palindrome2.split("").reverse().join("")

                  //see if they are equal and pass the palindrome test
                  if(palindrome2 === reverseString2) {
                        sum+=1
                  }
            }
            return sum
      }
}

      // DO NOT MODIFY
      module.exports = {
            doubleBasePalindromeSum,
      }



