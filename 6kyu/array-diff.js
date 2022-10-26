/*
Description:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

//My solution: 

function arrayDiff(a, b) {
    let result = [];
    // loop through array a
    a.forEach((value, index) => {
      // if array b does not include array a value, push array a value into result array
      if (!b.includes(value)) {
        result.push(value);
      }
    })
    // return result array
    return result;
  }
  
  /*
  
  Parameters
  - Given 2 arrays -- a, b
  
  Returns
  - Return a single array that removes all occurences of b values from a
  
  Examples
  - [1,2][1] == [2]
  - [1,2,2,2,3][2] == [1,3]
  - [1,2,3][1,2] == [3]
  
  Pseudo
  - loop through array a
  - if array b includes array a [i], remove array a [i]
  - return array a
  
  */


  //alt:

  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
