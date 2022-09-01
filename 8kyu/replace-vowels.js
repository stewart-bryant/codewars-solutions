/*

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

*/

//My solution:

function replace(s){
    const vowels = "aeiouAEIOU".split('');
    let result = [];
    for (let i = 0; i < s.length; i++) {
      vowels.includes(s[i]) ? result.push('!') : result.push(s[i]);
    }
    return result.join('');
  }