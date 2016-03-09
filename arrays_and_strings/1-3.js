// Write a method to replace all spaces in a string with '%20'.

function urlify(str) {
  return str.split(" ").join("%20")
}

console.log("What's%20good" === urlify("What's good"))