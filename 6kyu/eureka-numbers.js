// Description:
//
// Translations
// Fork|Collect|
// How satisfied are you with this kata?VERYSOMEWHATNONE
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
//
// In effect: 89 = 8^1 + 9^2
//
// The next number in having this property is 135.
//
// See this property again: 135 = 1^1 + 3^2 + 5^3
//
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
//
// Let's see some cases (input -> output):
//
// 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.
//
// 90, 100 --> []

//My Solution:

function sumDigPow(a, b) {
  //empty array to push 'eureka' numbers into
  let eureka = [];
  //create an array of all integers b/w a and b, inclusive
  for (let i = a; i <= b; i++) {
  //check if sum of each digit of the num to the power of its index+1 == the num
    let sum = 0;
    for (let j = 0; j <= String(i).length; j++) {
      sum += Math.pow(String(i)[j], j+1);
      if (sum == i) {
        eureka.push(i);
      }
    }
  }
  console.log(eureka);
}

sumDigPow(89,92);

//alt:

function sumDigPow(a, b) {
  let eureka = [];
  for (let i = a; i <= b; i++) {
    let nums = String(i).split('');
    if (i == nums.reduce((sum, currVal, currInd) => sum + currVal**(currInd + 1), 0)) {
      eureka.push(i);
    }
  }
  return eureka;
}
