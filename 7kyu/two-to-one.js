// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//My solution:

function longest(s1, s2) {
    //concat strings
      let longest = s1 + s2;
    //convert to array
      let longestArr = longest.split('');
    //sort new 'string' alphabetically
      longestArr.sort();
    //rejoin into string
      longest = longestArr.join('');
      let uniq = '';
    //filter strings for unique characters using .includes() method...if character not present, add it, else do not
      for (let i = 0; i < longest.length; i++) {
        if (uniq.includes(longest[i]) === false) {
          uniq += longest[i];
        }
      }
      return uniq;
    }

    //alt

    const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')