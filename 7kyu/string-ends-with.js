/*
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

//My solution

function solution(str, ending){
    let output;
    for (let i = 0; i < str.length + 1; i++) {
      if (str.slice(i) == ending) {
        output = true;
        break;
      } else {
        output = false;
      }
    }
    return output;
  }

  //alt:
  
  function solution(str, ending){
    return str.endsWith(ending);
  }