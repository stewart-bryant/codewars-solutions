// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//My solution

function fakeBin(x){
    //convert x to arr for easier manipulation
      let arrX = x.split('');
    //iterate through chars and evaluate each character if < 5 or >= 5. 
      for (let i = 0; i <= arrX.length - 1; i++) {
    //if < 5, change character to 0
        if (arrX[i] < 5) {
          arrX[i] = 0;
    //if >= 5, change character to 1
        } else {
          arrX[i] = 1;
        }
      }
    //convert arr back to str/return new 'binary' string
      x = arrX.join('');
      return x;
    }

    //alt

    function fakeBin(x) {
        return x.split('').map(n => n < 5 ? 0 : 1).join('');
    }