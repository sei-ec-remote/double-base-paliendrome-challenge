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

function checkPalindrome(string) {

      const reverseString = string.split("").reverse().join("")
  
      if(string == reverseString) {
          return true
      }
      else {
          return false
      }
  }

const doubleBasePalindromeSum = function (base1, base2, upperLimit/* base1, base2, upperLimit */) {
      //parseInt(string, radix)\//hard coded
      let palindrome = []
      console.log(base1,base2,upperLimit)
      for (let i = 0;i<upperLimit;i++){
            let binaryI = i.toString(base1)
            let base1I = i.toString(base2)
            
            if(checkPalindrome(base1I.toString()) && checkPalindrome(binaryI.toString())){
                  palindrome.push(i)
                  //console.log(i, binaryI)
            }
      }
      return palindrome.reduce((pass,curr) =>{
            return pass + curr
      },0)
      
      
}

let final = doubleBasePalindromeSum()
//console.log(final)

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}