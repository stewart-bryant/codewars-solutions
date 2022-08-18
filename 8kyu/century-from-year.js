// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//My solution:

function century(year) {
    let yearString = year.toString();
    let strHund = yearString.length - 2;
  
    if (yearString.length == 1 || yearString.length == 2) {
      return 1;
    } else if (yearString.length == 3 && yearString.slice(-2) == '00') {
      return Number(yearString.slice(0,1));
    } else if (yearString.length == 3) {
      return Number(yearString.slice(0,1)) + 1;
    } else if (yearString.length >= 4 && yearString.slice(-2) == '00') {
      return Number(yearString.slice(0,strHund));
    } else if (yearString.length >= 4) {
      return Number(yearString.slice(0,strHund)) + 1;
    }
  }

  //alt
  const century = year => Math.ceil(year/100)