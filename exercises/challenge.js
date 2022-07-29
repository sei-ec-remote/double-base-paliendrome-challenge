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
  const fullArr = [...Array(upperLimit).keys()];
  fullArr.shift();

  //get all numbers to limit that are palindromes in base two
  let oneArray = fullArr.filter((i) => {
    let newString = i.toString(base1);
    let revString = parseInt(newString.split("").reverse().join(""));
    newString = parseInt(newString);
    if (newString === revString) {
      return i;
    }
  });

  //use items from base 2 array that are also base 10 palindromes
  let twoArray = oneArray.filter((i) => {
    let newString = i.toString(base2);
    let revString = parseInt(newString.split("").reverse().join(""));
    newString = parseInt(newString);
    if (newString === revString) {
      return i;
    }
  });

  //add everything up
  let final = twoArray.reduce((tot, curr) => {
    return tot + curr;
  });

  return final;
};

doubleBasePalindromeSum(2, 10, 500);

// DO NOT MODIFY
module.exports = {
  doubleBasePalindromeSum,
};
