/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

//My solution:

function encrypt(s, n) {
    // Check string is not empty/undefined & n is positive
    if (!s || n<1) {
      return s;
    }
    // Split out odd and even indexed characters
    let odds = s.split("").filter((e, i) => i%2 === 1);
    let evens = s.split("").filter((e, i) => i%2 === 0);
    
    // Use recursion to encrypt n times, concatenating odds & evens
    return encrypt([...odds, ...evens].join(""), n-1);
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n < 1) {
      return encryptedText;
    }
    
    let mid = encryptedText.length / 2;
    let first = encryptedText.split("").slice(mid);
    let second = encryptedText.split("").slice(0, mid);
    let decrypted = [];
    
    for (let i = 0; i < encryptedText.length; i++) {
      if (i%2 === i-1) {
        decrypted.push(second[i]);
        decrypted.push(first[i]);
      } else {
        decrypted.push(first[i]);
        decrypted.push(second[i]);
      }
    }
    return decrypt(decrypted.join(""), n-1);
  }