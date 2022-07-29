// DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//My solution

function sumArray(array) {
    let result;
    //conditionals for input validation...If an empty value ( null, None, Nothing etc. ) is given instead of an array, retrn 0.
    if (array == null || array.length == 0 || array.length == 1) {
      result = 0;
    } else {
    //sort array from min to max
      array.sort((a,b) => a-b);
    //make index 0 and index array.length-1 = 0
      array[0] = 0;
      array[array.length - 1] = 0;
    //use reduce method to pass through and sum all items
      result = array.reduce((sum, elem) => sum + elem, 0);
    }
    return result;
  }

  //alt

  sumArray = a => a ? a.sort((x, y) => x - y)
                       .slice(1, -1)
                       .reduce((s, e) => s + e, 0) : 0;