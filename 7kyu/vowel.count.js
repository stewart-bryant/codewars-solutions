// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My solution:

const getCount = str => str.split('').filter(letter => letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u').length;

//alt

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }