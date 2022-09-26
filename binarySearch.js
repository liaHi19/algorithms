// Binary Search Algorithm: The basic steps to perform Binary Search are:

// -Begin with the mid element of the whole array as a search key.
// -If the value of the search key is equal to the item then return an index of the search key.
// -Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
// -Otherwise, narrow it to the upper half.
// -Repeatedly check from the second point until the value is found or the interval is empty.

function binarySearch(arr, low, high, x) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) return binarySearch(arr, low, mid - 1, x);

    return binarySearch(arr, mid + 1, high, x);
  }
  return -1;
}

////
let arr = [2, 3, 4, 10, 40];
let x = 8;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);
// console.log(result);
