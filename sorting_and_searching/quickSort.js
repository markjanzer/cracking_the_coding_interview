// Pick an element, called a pivot, from the array.
// Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
// Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

// function quickSort(arr){
//   var pivotIndex = Math.floor(Math.random()*arr.length)

// }

// function positionPivot(arr, pivotIndex){
//   var removedPivotArr = arr
//   var positionedPivotArr = removedPivotArr.splice(pivotIndex, 1)
//   var pivotValue = positionedPivotArr[0]
//   var pivotPosition = 0
//   for (var i = 0; i < removedPivotArr.length; i++){
//     if (removedPivotArr[i] > pivotValue){
//       positionedPivotArr.push(removedPivotArr[i]);
//     } else if (removedPivotArr[i] < pivotValue){
//       pivotPosition++;
//       positionedPivotArr.unshift(removedPivotArr[i]);
//     } else if (removedPivotArr[i] === pivotValue){
//       positionedPivotArr = positionedPivotArr.splice(pivotPosition - 1, 0, removedPivotArr[i])
//     }
//   }
//   return positionedPivotArr
// }

// function positionPivot(arr, pivotIndex){
//   var removedPivotArr = arr
//   var positionedPivotArr = removedPivotArr.splice(pivotIndex, 1)
//   var pivotValue = positionedPivotArr[0]
//   var pivotPosition = 0
//   for (var i = 0; i < removedPivotArr.length; i++){
//     if (removedPivotArr[i] > pivotValue){
//       positionedPivotArr.push(removedPivotArr[i]);
//     } else if (removedPivotArr[i] < pivotValue){
//       pivotPosition++;
//       positionedPivotArr.unshift(removedPivotArr[i]);
//     } else if (removedPivotArr[i] === pivotValue){
//       positionedPivotArr = positionedPivotArr.splice(pivotPosition - 1, 0, removedPivotArr[i])
//     }
//   }
//   return positionedPivotArr
// }


// console.log(singleQuickSort([3,1,2], 2))
// console.log(positionPivot([4,2,6,7,9,8,1,3,5], 2))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))
// console.log(quickSort([4,2,6,7,9,8,1,3,5]))

// Okay I need to do some pseudocoding
// Given array, use quickSort to return sorted array

// quickSortOne will take an index and return three arrays, one with just the initial value, one with all of the lower values, and one with all of the higher values


function quickSort(arr){
  var pivotIndex = Math.floor(Math.random()*arr.length)
  var greater = [];
  var less = [];
  var pivot = arr.splice(pivotIndex, 1);
  for (var i = 0; i < arr.length; i++){
    // refactor for switch
    if (arr[i] <= pivot[0]){
      less = less.concat(arr[i])
    } else {
      greater = greater.concat(arr[i])
    }
  }
  if ((greater.length <= 1) && (less.length <= 1)){
    return less.concat(pivot).concat(greater);
  } else if ((greater.length != 1) && (less.length <= 1)){
    return less.concat(pivot).concat(quickSort(greater))
  } else if ((greater.length <= 1) && (less.length > 1)){
    return quickSort(less).concat(pivot).concat(greater)
  } else if ((greater.length > 1) && (less.length > 1)){
    return quickSort(less).concat(pivot).concat(quickSort(greater))
  }
}


console.log(quickSort([4,2,6,7,9,8,1,3,5]))
console.log(quickSort([23,64,3,7,3,22,2,11231,75,9,4,4,26,7,9,34,1234,12,33,565,68,789,0,9,4,323,4,1,21,2]))