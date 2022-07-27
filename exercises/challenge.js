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
    // set sum variable to store addition operations
    let sum = 0
    // count up to the upper limit, using i as the number to check
    for (let i = 1; i <= upperLimit; i++) {
        // convert i to binary for comparison
        let binNum = i.toString(base1)
        // cast to string for more utility
        // if the string i is equal to itself after being split, reversed, and rejoined
        // AND i as a binary number is equal to itself after being split, reversed, and rejoined
        // add i to sum and repeat
        // this way seems faster than setting up a function to do it, according to the tests
        if (i.toString(base2) === String(i).split('').reverse().join('') && binNum === binNum.split('').reverse().join('')) {
            // careful with this log with a high upper limit
            // console.log(`${i} is a palindrome, and so is its binary ${binNum}`)
            sum += i
        }
    }
    // console.log(sum)
    return sum
}

doubleBasePalindromeSum(2, 10, 1000000)

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}