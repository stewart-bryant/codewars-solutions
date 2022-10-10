/*
Description:

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

//My Solution: 

function removeUrlAnchor(url){
    if (url.includes('#')) {
      return url.split('').splice(0, url.indexOf('#')).join('');
    } else {
      return url;
    }
  }

  //alt

  //split url string by any '#' character
    //now have an array with 2 elements -- left side of # and right side of #
    //[0] returns index 0 of the new array -- the left side of #
  const removeUrlAnchor = url => url.split('#')[0];