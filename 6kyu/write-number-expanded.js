/*

DESCRIPTION:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

//My solution:

const expandedForm = num =>num.toString()
                              .split('')
                              .map((n, ind) => n * 10**(num.toString().length-ind-1))
                              .filter(n => n != 0)
                              .join(' + ');