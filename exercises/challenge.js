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
const doubleBasePalindromeSum = function (base1, base2 /* UpperLimit */) {
      // check if palindromic in base10 and base2
            // parseInt(string, radix)
            // parseInt(palNum, 2)
            // parseInt(palNum, 10)
      // 'string' the numbers .toString
      function integerToString(n, base1) {
            let str=""
            while (n > 0)
            {
                  let digit = n % base1
                  n = parseInt(n / base1, 10)
                  str += String.fromCharCode(digit + '0'.charCodeAt())
            }
            return str
            }
 
      // check if palindrome - from functions-scope js deliverable (can't get to work for numbers...?)
      // const checkPalindrome = (str, k) => {
      //       const lengthOfInteger = str.length
      //       for (let i = 0; i < lengthOfInteger / 2; i++)
      //           if (str[i] !== str[lengthOfInteger- 1 - i]) {
      //               return false
      //           } else {
      //               return true
      //           }
      //       }
      //   console.log(checkPalindrome('tacocat')) - returns true
            // using a for loop will catch multiple numbers
            // .split
            // .join
            // return to a variable if true
            // for variables that return true, save to variable baseNum
            {
                  let num = i;
                  
                  // reverseNum stores reverse of a number
                  let reverseNum = 0;
                  while (num > 0)
                  {
                        reverseNum = num % 10 + reverseNum * 10;
                        num = parseInt(num / 10, 10);
                  }
                  
                  
                  if (reverseNum == i)
                  {
                        
                        // Converting to baseNum
                        let str = integerToString(reverseNum, baseNum);
                        let splitNum = str.split('');
                        splitNum.reverse();
                        let str1 = splitNum.join("");
                        
                  // check true or false agaunst original string ===
                      if (str === str1)
                      {
                          return i;
                      }
                  }
                  return 0;
              }
      // return nums where where num < 1 million
      // filter baseNum as a function
            /* function lessThanLimit (baseNum, qualNums) {
                  return baseNum.filter()
            }*/
      // make sure there are no leading zeroes
      // from stackoverflow: (won't need this...)
      // function detectZeroes (qualNum, integer) {
      //       for (let i = 0, b = qualNum.length; i < b; i ++) {
      //             if (qualNum[i] !== '0') {
      //                   break;
      //             }
      //       }
      //       return i === integer;
      //       }
      // assign filtered numbers to a value to be checked by the function
      // sum the nums
      function sumPalindrome(n, baseNum) {
            let sum = 0;
            for(let i = 1; i < n; i++)
            {
                  sum += checkPalindrome(i, baseNum);
            }
      }
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}