/*

Description:

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

//My solution: 

const squareDigits = num => +String(num).split('').map(digit => digit**2).join('');

/*

Parameters
-Given an integer of varying lengths

Returns 
-Square every digit of a number and concatenate them
-Return an integer

Examples
-9119 == 811181
-2112 == 4114

Pseudo
//convert number to array of digits
//map
  //square each digit
//return as number


*/