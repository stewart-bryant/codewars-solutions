/*

Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//My solution:

function XO(str) {
    let arr = str.split('');
    let xCount = arr.filter(char => char.toLowerCase() === 'x').length;
    let oCount = arr.filter(char => char.toLowerCase() === 'o').length;
    return xCount === oCount;
}