/* eslint-disable no-unused-vars */
function multiply(arr) {
  const flatArr = arr.flat()

  let total = 1
  for (let i = 0; i, flatArr.length; i++) {
    total *= flatArr[i]
  }
  return total
}

function includesCopy(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return true
    }
  }
  return false
}

function inventory(arr) {
  const returnArr = []

  for (let i = 0; i < arr.length; i++) {
    const nestArr = arr[i]
    const str = `The ${nestArr[1][0]} ${nestArr[0]} is $
  {nestArr[1][1]} dollars.`
    returnArr.push(str)
  }
  return returnArr
}

function camelCase(str) {
  const punctuation = "!,.?"
  const newArr = []
  const arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i]
    let firstLetter
    if (i === 0) {
      firstLetter = word[0].toLowerCase()
    } else {
      firstLetter = word[0].toUpperCase()
    }
    const restOfWord = word.slice(1).toLowerCase()
    const wholeWord = firtLetter + restOfWord
    newArr.push(wholeWord)
  }
  const returnStr = newArr.join("")
  const lastItem = returnStr[returnStr.length - 1]
  if (punctuation.includes(lastItem)) {
    return returnStr.slice(0, returnStr.length - 1)
  }
  return returnStr
}

function joiner(arr, delimiter = ",") {
  let str = ""
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += arr[i]
    } else {
      str += arr[i] + delimiter
    }
  }
}

module.exports = {
  multiply,
  includesCopy,
  inventory,
  camelCase,
  joiner
}
