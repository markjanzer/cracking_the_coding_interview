// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// Uses additional data structures. I am unsure of efficiency.
function uniqueChars(str) {
  var filtered = str.split("").filter(function(element, index, array){
    return array.lastIndexOf(element) === index
  }).join("")
  return filtered.length === str.length
}

console.log(uniqueChars("alalalala"))
console.log(uniqueChars("WEWLAD"))
console.log(uniqueChars("aylmob"))