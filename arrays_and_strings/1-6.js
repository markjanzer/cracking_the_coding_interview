// Sting Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the orginal string, your method should return the original string. You can assume the string has only uppercase and lowercase letters.

function stringCompression(str){
  var split_string = str.split("");
  var compressed = [];
  split_string.reduce(function(prev, curr, curr_index, array){
    // console.log("curr_index = "+ curr_index)
    // console.log("curr = "+ curr)
    // console.log("prev = "+ prev)
    if (curr_index === 1){
      var prev = [array[curr_index - 1], 1];
    }
    if (prev[0] === curr){
      prev[1]++;
      if (curr_index === split_string.length - 1) {
        compressed.push(prev.join(""));
      }
      return prev;
    } else {
      compressed.push(prev.join(""));
      if (curr_index === split_string.length - 1) {
        compressed.push([curr, 1].join(""));
      }
      return [curr, 1];
    }
  });
  var solution = compressed.join("").length < str.length ? compressed.join("") : str;
  return solution;
}

// console.log(stringCompression("aabcccccaaa"))
console.log(stringCompression("aabcccccaaa") === "a2b1c5a3");
console.log(stringCompression("strrr") === "strrr")
console.log(stringCompression("aaaaayy") === "a5y2")
// console.log(stringCompression(str))
