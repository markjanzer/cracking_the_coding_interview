// I can do this using string manipulation... Don't think this is ideal.
function insert(bit_num, bit_insert, position1, positon2){
  var reversed_bit_num = reverse_to_array(bit_num);
  var reversed_bit_insert = reverse_to_array(bit_insert);
  for (var i = position1; i <= positon2; i++){
    reversed_bit_num[i] = reversed_bit_insert[i - position1];
  }
  return parseInt(reversed_bit_num.reverse().join(""))
}

function reverse_to_array(bit_num){
  return bit_num.toString().split("").reverse()
}


// console.log(reverse_to_array(1100000))
console.log(insert(10000000000, 11001, 2, 6))
// Should return 10001100100

// This is not the right way to do this. I'll revisit