/*
DESCRIPTION:
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

//My Solution:

function consonantCount(str) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (consonants.includes(str[i].toLowerCase())) {
        count += 1;
      }
    }
    
    return count;
  }