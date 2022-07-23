// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My solution:

function find_average(array) {
    let sum = 0;
    if (array.length > 0) {
        for (i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    } else {
        return 0;
    }
}


//alt
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }