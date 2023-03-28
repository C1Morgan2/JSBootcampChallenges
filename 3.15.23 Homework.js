const month = 12
console.log('month:', month)

let greeting
//Get ready for the blossoms of Spring!
if (month >= 3 && month <= 5) {greeting = 'Get ready for the blossoms of Spring!'}
else if (month > 5) {greeting = 'This is not A season for blossoms.'}
else if (month < 3) {greeting = 'This is not B season for blossoms.'}
if (month >= 13 || month < 1) {greeting = 'Now you know, this is not a valid month.'}

console.log(greeting)