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
  const fullArr = [...Array(upperLimit+1).keys()].slice(1)
  let final = 0
  fullArr.forEach((i) => {
    let revString = [
      i.toString(base1).split("").reverse().join(""),
      i.toString(base2).split("").reverse().join(""),
    ]
    if (
      i.toString(base1) === revString[0] && i.toString(base2) === revString[1]) {
      final += i
    }
  })

  return final
}
// DO NOT MODIFY
module.exports = {
  doubleBasePalindromeSum,
}
