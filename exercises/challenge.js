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


//this works, this is your base 2 conversion

const base1 = (num) => {
      let newString = num.toString(2)
      let revString = newString.split("").reverse().join("")
      newString = parseInt(newString)
      revString = parseInt(revString)
      console.log(newString)
      console.log(revString)
      if (revString === newString){
            
            return true
      } else {
            return false
      }
}

const base2 = (num) => {
      let newString = num.toString(10)
      let revString = newString.split("").reverse().join("")
      newString = parseInt(newString)
      revString = parseInt(revString)
      if (revString === newString){
            return true
      } else {
            return false
      }
}

const doubleBasePalindromeSum = function ( /*upperLimit */) {
      let finalSum = []
      for (let i = 0; i < 20; i++){
            if(base1(i) && base2(i)){
                  finalSum.push(i)
            }
      }
      console.log(finalSum)
}

doubleBasePalindromeSum()






// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}