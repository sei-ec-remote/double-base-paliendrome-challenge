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

// https://javascript.plainenglish.io/number-base-conversion-in-javascript-8bc44219b4ab

// function checkPalandrome(i) {
//       const thing = i.toString().split('').reverse().join('')
//       if (upperlimit == thing) {
//             console.log('is palindrom', i)
//             return i
//       } else {
//             console.log('reversed', thing)
//             console.log('no match or no work')
//             return
//       }
// }

const doubleBasePalindromeSum = function (/* base1, base2,*/ upperLimit ) {

      const palindromeArray = []

      function checkPalandrome(i, upperlimit) {
            const reverseNum = i.toString().split('').reverse().join('')
            if (upperlimit == reverseNum) {
                  console.log('is palindrom', reverseNum)
                  palindromeArray.push(reverseNum)
                  console.log('did it push to array?', palindromeArray)
                  return palindromeArray
            } else {
                  console.log('no palindrome or no work', i)
                  return
            }
      }
// const upperloop = upperLimit
// for loop all numbers between num1 and upper limit
for (let i=0; i < 30; i++) {
      checkPalandrome(i, upperLimit)
      // function checkPalandrome(i) {
      //       const thing = upperlimit.toString().split('').reverse().join('')
      //       if (upperlimit == thing) {
      //             console.log('is palindrom', upperlimit)
      //             return upperlimit
      //       } else {
      //             console.log('thing', thing)
      //             console.log('no match or no work')
      //             return
      //       }
      // }
      // palindromeArray.push(thing)
      console.log("palindromeArray", palindromeArray)

// check if hex is palindrom, 
}

//
//if is palaindrome, convert to bi

// function hex2bin(hex){
//       return (parseInt(hex, 16).toString(2)).padStart(8, '0');
//   }

// check if palindrome

//if is palandrome, return object num1 and 2
// array = [{num1: 0,num2}]

console.log("hello")
}

// convert to bianary
function hex2bin(hex){
      return (parseInt(hex, 16).toString(2)).padStart(8, '0');
  }
//   let num2 = 4

//   function loopIt(upperlimit) { 
//   for (let i=0; i< upperlimit; i++) {


//   return upperlimit}

// }

// function checkPalandrome(upperlimit) {
//       const thing = upperlimit.toString().split('').reverse().join('')
//       if (upperlimit == thing) {
//             console.log('is palindrom', upperlimit)
//             return upperlimit
//       } else {
//             console.log('thing', thing)
//             console.log('no match or no work')
//             return
//       }
// }
// console.log(loopIt(10)) 
// console.log('check pal', checkPalandrome(10100101)) 
doubleBasePalindromeSum(30)

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}