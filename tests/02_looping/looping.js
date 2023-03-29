/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let total = 1
  for (let i = 1; i <= num; i++) {
    total *= i
  }
  return total
}

function stringReverse(str) {
  let returnStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    returnStr += str[i]
  }
  return returnStr
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  if (!startIdx) {
    return originalString
  }

  let newStr = ""
  for (let i = startIdx; i < endIdx; i++) {
    newStr += originalString[i]
  }
  return newStr
}

function addTheEvens(num) {
  let total = 0
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      total += i
    }
  }
  return total
}

module.exports = {
  factorial,
  stringReverse,
  slicer,
  addTheEvens
}
