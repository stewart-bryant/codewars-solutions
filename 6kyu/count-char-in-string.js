/*
DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

//My solution:

function count (string) {  
    const counts = {};
    const arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
      counts[arr[i]] = arr.filter(char => char === arr[i]).length;
    }
    return counts;
  }