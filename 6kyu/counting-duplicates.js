/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//My solution:

function duplicateCount(text){
    //create an array to push all characters that occur more than once
    let duplicates = [];
    //determine which characters (regardless of casing) occur more than once
    for (let i = 0; i < text.length; i++) {
      if (text.toLowerCase().split('').filter(char => char === text[i].toLowerCase()).length > 1){
        duplicates.push(text[i].toLowerCase());
      }
    }
    //create a new set from the array of duplicates to find unique values, return size as the count
    return new Set(duplicates).size;
  }