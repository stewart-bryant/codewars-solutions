/*

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

*/

//My solution:

function getMiddle(s){
    let output = '';
    //determine if string length is odd or even
    if (s.length % 2 === 0) {
      //if even, return middle 2 characters
      output = s[s.length / 2 - 1]+s[s.length / 2];
    } else {
      //if odd, return middle character
      output = s[Math.ceil(s.length / 2) - 1];
    }
    return output;
  }