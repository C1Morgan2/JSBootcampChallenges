//Student Challenge:
//Create a variable equal to a random Number.

//Use control flow to log even if it is an even number and odd if it is an odd number
const num = 25
if (num % 2 === 0) {
  console.log('even')
} else {
  console.log('odd')
}
//*** EXTRA CREDIT ***
//Student Challenge:
//Create three random variable numbers
//If third number is between the first two log 'between'
//If the third number is outside the first two log 'outside'
//If the third number equals the first or second numbers log 'the third number equals the first/second number'

const num1 = 15
const num2 = 25
const num3 = 30
if (num3 > num1 && num3 < num2) {console.log ('between')}
else if (num3 < num1 || num3 > num2) {console.log('outside')}
else if (num3 === num2) {console.log('the third number equals the second number')}
else {console.log('the third number equals the first number')}