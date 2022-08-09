//Description:

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//My solution:

function countPositivesSumNegatives(input) {
    let posNums = [];
    let negNums = [];
    if (input == null || input == [] || input.every(item => item === 0)) {
      return [];
    } else {
      input.forEach(num => {
        if (num > 0) {
          posNums.push(num)
        } 
        if (num < 0) {
          negNums.push(num);
        }
      });
    }
    let posCount = posNums.length;
    let negSum = negNums.reduce((sum, num) => sum += num, 0);
    
    return [posCount, negSum];
  }

  //alt:

  function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}