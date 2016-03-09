// Binary Search Function

// Works on sorted arrays
// Finds the middle number, sees if it is larger than the target.
// If so it takes everything below, if not it takes everything above.
// Repeats the process.

function binarySearch(arr, target) {
  var location = null;
  var bottom = 0;
  var top = arr.length - 1;
  while (location === null){
    var middle = Math.round((bottom + top) / 2)
    if (bottom > top) {
      break
    } else if (arr[middle] === target) {
      location = middle;
      break
    } else if (arr[middle] > target) {
      top = middle - 1;
    } else if (arr[middle] < target) {
      bottom = middle + 1;
    }
  }
  return location
}

// console.log(binarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20))

function recursiveBinarySearch(arr, target, top, bottom){
  var top = typeof top !== 'undefined' ? top : (arr.length - 1);
  var bottom = typeof bottom !== 'undefined' ? bottom : 0;
  var middle = Math.round((bottom + top) / 2)
  if (bottom > top) {
    return null
  } else if (arr[middle] === target) {
    return middle
  } else if (arr[middle] > target) {
    top = middle - 1;
    return recursiveBinarySearch(arr, target, top, bottom)
  } else if (arr[middle] < target) {
    bottom = middle + 1;
    return recursiveBinarySearch(arr, target, top, bottom)
  }
}

console.log(recursiveBinarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20))