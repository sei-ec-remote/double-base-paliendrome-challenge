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
const doubleBasePalindromeSum = function (x,y,upperLimit) {


      const checkPalindrome = (input) => {

            let makeString = input.toString()
            let holderString = ""

            for (let i = makeString.length-1; i >=0; i--){
                  holderString = holderString + makeString[i]
            }

            if (makeString === holderString) {
                  return true
            } else {return false}
      }

      let arrayOfNums = []
      let sumTotal = 0



      while (sumTotal < upperLimit){

            for(let i = 0; i < upperLimit; i++){  
                  if(checkPalindrome(i)){
                        let binary = Number(i).toString(2)
                        let strippedBinary = binary.replace(/^0+/, '')

                        if(checkPalindrome(strippedBinary)){
                              arrayOfNums.push(i)
                        }
                  }
            sumTotal = arrayOfNums.reduce((partialSum, a) => partialSum + a, 0)
            } 
      }

      return sumTotal

}

      
      // convert to string
      // check if pal
      // if yes get base2      
      // remove leading zeros  ??
      // convert to string
      // check binary nature
      //  if palandrome, add decimal to a running total
      // if total is less than 1mil keep going   




// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}