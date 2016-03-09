// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false
  }
  var arr = [str1, str2].sort()
  var shorter = arr.pop().split("")
  var longer = arr.pop().split("")
  for (i = 0; i < shorter.length; i++) {
    longer.splice(longer.indexOf(shorter.pop()), 1)
  }
  if (longer.length <= 1) {
    return true
  }
  return false
}

console.log(oneAway("zonkers", "ahoy"))
console.log(oneAway("hey", "hi"))
console.log(oneAway("hey", "he"))
console.log(oneAway("hey", "hoy"))
console.log(oneAway("hey", "heya"))

