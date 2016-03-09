// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.

function palindromePermutation(str) {
  var changedStr = str.split(" ").join("").toLowerCase();
  var freq = frequencyObject(changedStr)
  var evenArray = []
  for (var prop in freq) {
    evenArray.push(freq[prop] % 2 === 0)
  }
  return evenArray.indexOf(false) === evenArray.lastIndexOf(false)
}

function frequencyObject(str) {
  freq = {};
  for (var i = 0; i < str.length; i++ ){
    if (freq[str[i]]){
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  return freq
}

console.log(palindromePermutation("Ballersaurus"))
console.log(palindromePermutation("Tact Coa"))