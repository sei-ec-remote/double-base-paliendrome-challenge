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
const doubleBasePalindromeSum = function ( n, k,/* base1, base2, upperLimit */) {
      let sum = 0
      let n = 10
      let k = 2
      let str = (n, k)
      for(let i = 0; i < str.length; i+=1) {
    
       if(str[i] !== str[str.length - 1 - i]) {
            return false
       } else {
            return true
       }
    
//     let revered = sum.split('').reverse().join('')
//     if (revered === sum) {
//        return i
// }  {
        
}
const reverseString = (str) => {
      return str.split('').reverse().join('');
  }
 
// let str = integer_to_string(n, k);
// let ch = str.split('');
// .reverse();
// let str1 = ch.join("");
 
// if (str == str1)
// {
//     return i;
// }
// }
// return 0;
//if(is[is.length - 1] != '0'


}
// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}