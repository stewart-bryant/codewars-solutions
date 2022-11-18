/*

Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

*/

//My soultion:

function minValue(values){
    let result = [];
    //sort values smallest to largest
    let sorted = values.sort((a,b)=>a-b);
    //check if index of num is first occurrence
      //if yes, push to result
    sorted.forEach((num,ind)=>{
        if(ind === sorted.indexOf(num)){
            result.push(num);
        }
    })
    //return result as a number
    return +result.join('');  
  }

  //alt:

  function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }