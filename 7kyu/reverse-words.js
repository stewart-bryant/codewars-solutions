/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//My solution

function reverseWords(str) {
    let arr = str.split(' ');
    let rev = arr.map(item => item.split('').reverse().join(''));
    
    return rev.join(' ');
  }