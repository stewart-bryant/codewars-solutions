/*

Desription:

A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

*/

//My solution:

function bouncingBall(h,  bounce,  window) {
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
      //count how many times the ball falls and bounces back up
      //count start will be 1 if all conditions are met (ball falls from h)
      let count = 1;
      //start iteration at first bounce height
      let i = h * bounce;
      if (i === 1) {
        return 1;
      } else {
        //loop until bounce height <= window
        do {
          i *= bounce;
          count += 2;
        } while (i > window);
        return count;
      }
    } else {
      return -1;
    }
  }
  
  /*
  Parameters
    h = height of drop
    bounce = bounce factor
    window = window height
  
  Returns
    should return -1 if experiment start conditions not met
    should return a positive integer if start conditions met
      positive integer value represents how many times the ball falls & bounces back up to > window height
  
  Examples
    h = 3, bounce = 0.66, window = 1.5, result is 3
    bouncingBall(30.0, 0.66, 1.5), 15
    bouncingBall(3.0, 1.0, 1.5), -1
  */


//Alt:

function bouncingBall(h,  bounce,  window) {
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;
    
    while(h > window){
      seen += 1
      h *= bounce
      if(h > window) seen += 1
    }
    
    return seen;
  }