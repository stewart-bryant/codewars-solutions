/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
*/

//My solution:

function queueTime(customers, n) {
    //create an array, each element is a till
    let tillQueues = [];
    customers.forEach((customer, ind)=>{
        //create a new queue for each till
        for (let i = 0; i < customers.length; i++) {
            //send customers to the initially open queues
            if (i < n) {
                tillQueues.push(customers[i]);
            } 
            //send next customers to queues with the shortest wait times and add their wait time to the queue
            else {
                tillQueues[tillQueues.indexOf(Math.min(...tillQueues))] += customers[i];
            }
        }
    })
  //return time from queue with the longest wait or 0 if there are no customers
  return customers.length > 0 ? Math.max(...tillQueues) : 0;
}