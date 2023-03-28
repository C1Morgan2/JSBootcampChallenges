/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  const doesInclude = str.includes(letter)
  if (doesInclude) {
    return true
  } else {
    return false
  }
}

function cap(str, letter) {
 const index = str.indexOf(letter)
 if(index === -1) {
  return 'sorry not found'
 }
 const nextIndex = index + 1
 const upperCasedLetter = str.[nextIndex].toUpperCase()
  return upperCasedLetter
  
}

function firstCharacter(str1, str2) {
const str1FirstChar = str1[0].tolowerCase()
const str2FirstChar = str2[0].toLowerCase()
console.log(str1FirstChar, str2FirstChar)
if (str1FirstChar === str2FirstChar) {
  return true
} else {
  return false
}
}

module.exports = {
  cap,
  firstCharacter,
  doesInclude
}
