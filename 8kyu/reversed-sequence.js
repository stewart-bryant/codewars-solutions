// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//My Solution

function reverseSeq (n) {
    let arr = [];
    for (let i = n; i > 0; i--) {
      arr.push(i);
    }
    //iterates beginning at given number, then pushes each number in sequence down to 0 to arr
    return arr;
  }