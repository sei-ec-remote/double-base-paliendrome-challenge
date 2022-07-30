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
	console.log(base1, base2, upperLimit)
	function checkPalindrome(string) {
		const arr = string.split('')
		const reverseArr = arr.reverse()
		const reverseString = reverseArr.join('')
		if (string === reverseString) {
			return true		
		} else {
			return false
		}
}
for (let i=0; i< upperLimit; i++){
	i.toString(2)
	i.toString(10)
}
const number = 5
const numBase2 = number.toString(2)
console.log(numBase2)
const numBase10 = number.toString(10)
checkPalindrome(numBase2)
checkPalindrome(numBase10)
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}