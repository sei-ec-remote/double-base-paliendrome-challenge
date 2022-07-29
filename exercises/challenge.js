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

/////////////Strategy/////////////////////
// STEP 1
      // Find all numbers that are palindromes in base 10 < 1 million.
// STEP 2
      // Check to see if it is a palindrome in base 2.
// STEP 3
      // Spilt the numbers and add them to find their sum.



const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
      // make a for loop to iterate through every number from 1-1000000.
      let sum = 0
      for (let i = 0; i < upperLimit; i++) {
            // Test each number to see if it is a Palindrome
            const arrayValues = string.split("");
            const reverseArrayValues = arrayValues.reverse();
            const reverseString = reverseArrayValues.join('');
            if(string == reverseString) {
              console.log('It is a palindrome');
            return(sum)
            
            
            // Store palindromes in an array

            // convert palindromes to base2

            // check for base2 palindromes

            // compare base10 and base2 palindromes

            // store those numbers in an array

            // add numbers together to get sum

      }
}
}

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}