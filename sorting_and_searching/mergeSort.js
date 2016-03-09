// Merge Sort
// Sorts [5,4,2,6,7,8,1,3] into [1,2,3,4,5,6,7,8]
// Splits original array into pairs. Sorts each of the pairs individually.
// Then takes two pairs, compares the first of each and whichever one is smaller is pushed first into a new array.
// This continues to happen until the entire array is sorted.
// Seems like there are two parts, first is to split the array into a bunch of arrays with one

// function mergeSort(arr){
//   var sortedArray = arr.map(function(num){
//     return [num];
//   })
//   // console.log(typeof sortedArray[0][0] === undefined)
//   while (typeof sortedArray[0][0] !== undefined){
//     for (var i = 0; i < sortedArray.length; i++){
//       if (sortedArray[i] % 2 !== 1){
//         continue
//       } else if (sortedArray[i] > sortedArray[i - 1]) {
//         sortedArray.splice(i - 1, [sortedArray[i - 1]])
//       } else if (sortedArray[i] < sortedArray[i - 1]) {
//         sortedArray.splice(i - 1, [sortedArray[i], sortedArray[i - 1]])
//       }
//     }
//     console.log(sortedArray)
//   }
//   return sortedArray
// }

function mergeSort(arr){
  var sortedArray = segmentify(arr);
  while (sortedArray[0].length !== arr.length){
    console.log("This is sortedArray", sortedArray)
    console.log("This is sortedArray[0][0]", sortedArray[0][0])
    var coupledArr = couple(sortedArray)
    sortedArray = coupledArr.map(sortBoth)
    console.log("This is sortedArray after while loop: ", sortedArray)
  }
  return sortedArray[0]
}

function segmentify(arr){
  var segmentedArray = arr.map(function(num){
    return [num];
  })
  return segmentedArray
}

function couple(arr){
  var coupledArr = []
  while (arr.length > 0){
    coupledArr.push(arr.splice(0, 2));
  }
  return coupledArr
}

function sortBoth(arr){
  var sortedArr = [];
  // console.log(arr[0], arr[1])
  if (arr[1] === undefined){
    return arr[0];
  }
  while ((arr[0].length > 0) && (arr[1].length > 0)){
    arr[0][0] < arr[1][0] ? sortedArr.push(arr[0].shift()) : sortedArr.push(arr[1].shift());
  }
  if (arr[0].length === 0){
    while (arr[1].length > 0){
      sortedArr.push(arr[1].shift())
    }
  } else if (arr[1].length === 0){
    while (arr[0].length > 0){
      sortedArr.push(arr[0].shift())
    }
  }
  // console.log(sortedArr)
  return sortedArr;
}

// console.log(sortBoth([[5],[4]]))
// console.log(sortBoth([[5,7],[4,9]]))

// var merged = mergeSort([5,4,2,6,7,8,1,3])
console.log(mergeSort([4,2,3,1,5]))
console.log(mergeSort([5,4,2,6,7,8,1,3,9]))
// console.log(merged.length)
// console.log(merged[0])