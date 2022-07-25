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
The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/
const doubleBasePalindromeSum = function (/* base1, base2, upperLimit */) {
// what is a double base? there are two bases: 10 and 2
// for base 10, we want to see if the number and the number reversed are the same
// so there will need to be two checks here: one for base 10 and one for base 2
// if it passes both of those, then we will we should push it to an array (successArr)
      const successArr = [];
// and then, return the sum of that array
// 1: need to check all numbers up to the upper limit
      // so this whole thing should be nested in a loop!
      // TODO: make palindrome test function here
      function palindrome(num) {
            // convert to string to test
            num = num.toString();
            // make reverse Num
            var reverseNum = num.split('').reverse().join(''); 
            // if true, return TRUE || if not, return FALSE
            return reverseNum === num
      for (let i=0; i<upperLimit; i++) {
      // 2: TEST FOR BASE 10 PALINDROME AND, IF PASS, PUSH TO successArr
            // test for palindrome
            if (palindrome(i)) {
                  successArr.push(i)
            };

            // if succeed, pass to successArr

      // 3: TEST FOR BASE 2 PALINDROME AND, IF PASS, PUSH TO successArr
            // convert number to binary
            function binaryNum(i) {
                  return Math.abs(i).toString(2);
            };
            if (binaryNum(i)) {
            // test for palindrome
            // if succeed, pass to successArr
            }

}
// 4: REDUCE successArr and return RESULT
      const result = successArr.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0
      );
      return result;
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}