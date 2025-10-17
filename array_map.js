/*
#1.Array squared
Square the value of every element in the array. Presume that you will only get numbers in the input array.
Sample Input:
const input = [1, 2, 3, 4, 5];
Sample Output:
[1, 4, 9, 16, 25];
*/
// solution
const input = [1, 2, 3, 4, 5];
const output = input.map((item)=>item*item);
console.log(output);

