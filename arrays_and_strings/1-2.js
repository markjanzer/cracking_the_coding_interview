// Given two strings, write a method to determine if one is a permuatation of the other

function determinePermutation(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("")
}

console.log(determinePermutation("breeew", "what's good"))
console.log(determinePermutation("ay", "ya"))
console.log(determinePermutation("whatdoe", "doewhat"))


