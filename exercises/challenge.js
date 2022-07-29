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
  //console.log(fullArr)

  let oneArray = fullArr.map((i) => {
    let newString = i.toString(base1);
    let revString = newString.split("").reverse().join("");
    newString = parseInt(newString);
    revString = parseInt(revString);
    if (newString === revString) {
      return i;
    }
  });
  //this array has palindromes in binary
  oneArray = oneArray.filter((i) => {
    if (i !== undefined) {
      return i;
    }
  });
  console.log(oneArray);

  //you're almost there. next do the same thing with base 10 through the array you just got
  let twoArray = oneArray.map((i) => {
    let newString = i.toString(base2);
    let revString = newString.split("").reverse().join("");
    newString = parseInt(newString);
    revString = parseInt(revString);
    if (newString === revString) {
      return newString;
    }
  });
  twoArray = twoArray.filter((i) => {
    if (i !== undefined) {
      return i;
    }
  });

  let final = twoArray.reduce((tot, curr) => {
    return tot + curr;
  });
  return final;
};

doubleBasePalindromeSum(2, 10, 50);

// DO NOT MODIFY
module.exports = {
  doubleBasePalindromeSum,
};
