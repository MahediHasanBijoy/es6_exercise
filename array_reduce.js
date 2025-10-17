/*
Definition: reduce() is a method that processes each element of an array and accumulates a single return value.
Syntax:
    array.reduce((accumulator, currentValue, index, array) => {
    // logic here
    }, initialValue);
*/


/*
#1.Calculate median and mean
Calculate the mean and median values of the number elements from the input array.
Sample Input:
    const input = [12, 46, 32, 64];
Sample Output:
    { mean: 38.5, median: 39 }
*/
const input = [12, 46, 32, 64];
input.sort((a, b) => a - b);

const output = input.reduce(
  (accumulator, currentValue, index, array) => {
    
    accumulator.mean += currentValue / array.length;
    if (array.length % 2 === 0) {
      // if the array has an even number of elements
      if (index === array.length / 2 - 1) {
        accumulator.median += currentValue;
      } else if (index === array.length / 2) {
        accumulator.median += currentValue;
        accumulator.median /= 2;
      }
    } else {
      // if the array has an odd number of elements
      if (index === (array.length - 1) / 2) {
        accumulator.median = currentValue;
      }
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);
console.log(output);