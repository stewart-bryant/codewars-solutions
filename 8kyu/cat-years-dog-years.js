/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

//My solution

var humanYearsCatYearsDogYears = function(humanYears) {
  
    const ages = [];
    ages.push(humanYears);
    if (humanYears === 1){
    ages.push(15);
    ages.push(15);
    } else if (humanYears === 2) {
      ages.push(24);
      ages.push(24);
    } else {
      ages.push(24 + (humanYears - 2)*4);
      ages.push(24 + (humanYears - 2)*5)
    }
    
    return ages;
  }
  
  console.log(humanYearsCatYearsDogYears(2));