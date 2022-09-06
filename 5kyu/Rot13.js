//Description

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//My solution:


function rot13(message) {
    const abcs = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const messageArr = message.split('');

    let code = messageArr.map(char => {
        if (abcs.includes(char.toLowerCase())) {
            if (abcs.indexOf(char.toLowerCase()) <= 12) {
                if (char === char.toLowerCase()) {
                    return abcs[abcs.indexOf(char) + 13];
                } else {
                    return abcs[abcs.indexOf(char.toLowerCase()) + 13].toUpperCase();
                }
            } else if (abcs.indexOf(char.toLowerCase()) > 12) {
                if (char === char.toLowerCase()) {
                    return abcs[abcs.indexOf(char.toLowerCase()) - 13];
                } else {
                    return abcs[abcs.indexOf(char.toLowerCase()) - 13].toUpperCase();
                }
            }
        } else {
            return char;
        }
    }).join('');

    return code;
}


//Alt:

function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }