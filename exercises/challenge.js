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
  let final = 0;
  //array of numbers from 1 to limit
  const testRange = [...Array(upperLimit + 1).keys()].slice(1);
  //find numbers from array that satisfy
  testRange.forEach((i) => {
    if (
      i.toString(base1) === i.toString(base1).split("").reverse().join("") &&
      i.toString(base2) === i.toString(base2).split("").reverse().join("")
    ) {
      //add qualifying numbers to sum
      final += i;
    }
  });
  return final;
};
// DO NOT MODIFY
module.exports = {
  doubleBasePalindromeSum,
};
