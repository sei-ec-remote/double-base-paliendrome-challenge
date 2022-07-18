/*
=============== JavaScript Logic Challenge I ==================
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
const stringSolution = false

const reverseNumberInBase = function (number, base) {
	let reversed
	for (reversed = 0; number > 0; number = (number / base) >>> 0) {
		reversed = reversed * base + (number % base)
	}

	return reversed
}

const testWithNumber = function (number, base) {
	return number === reverseNumberInBase(number, base)
}

const reverseString = function (string) {
	return string.split('').reverse().join('')
}

const testWithString = function (number, base) {
	const numberAsString = number.toString(base)
	return numberAsString === reverseString(numberAsString)
}

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
	const numberIsPalindrome = stringSolution ? testWithString : testWithNumber
	let sum = 0
	for (let i = 0; i < upperLimit; i++) {
		if (numberIsPalindrome(i, base1) && numberIsPalindrome(i, base2)) {
			sum += i
		}
	}

	return sum
}

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}
