/*
#1.Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren’t any positive numbers, return 0.
Sample Input:
const input = [1, -4, 12, 0, -3, 29, -150];
Sample Output:
42;
*/
const input = [1, -4, 12, 0, -3, 29, -150];
const output = input.filter(function(num){
    return num>0;
}).reduce(function(acc,num){
    return acc+num;
},0);

console.log(output);
