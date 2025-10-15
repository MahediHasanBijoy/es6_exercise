/*
    Rest and Spread Concept
*/
// **Rest operator
// Rest in array 
// When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator. The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.
const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

a;
// => 0
b;
// => 1
everythingElse;
// => [1, 2, 3, 5, 8]

// Rest in object properties
// Similarly to arrays, the rest operator can also be used to collect one or more object properties and store them in a single object.
const { street, ...rest_address } = {
  street: 'Platz der Republik 1',
  postalCode: '11011',
  city: 'Berlin',
};

console.log(street);
// => 'Platz der Republik 1'

console.log(rest_address);
// => {postalCode: '11011', city: 'Berlin'}

// Rest in function parameters
// When ... appears in a function definition next to its last argument, that parameter is called a rest parameter. It allows the function to accept an indefinite number of arguments as an array.
function concat(...strings) {
  return strings.join(' ');
}

concat('one');
// => 'one'

concat('one', 'two', 'three');
// => 'one two three'

// **Spread
// Spread in array elements
// When ... appears on the right-hand side of an assignment, it's known as the spread operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

oneToTen;
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42];

woow;
// =>  ["A", 1, 2, 3, 4, 5, "B", "C", "D", "E", 1, 2, 3, 4, 5, 42]

// Spread in object properties
// Similarly to arrays, the spread operator can also be used to copy properties from one object to another.
let address = {
  postalCode: '11011',
  city: 'Berlin',
};

address = { ...address, country: 'Germany' };
// => {
//   postalCode: '11011',
//   city: 'Berlin',
//   country: 'Germany',
// }

//--------------------------------------------------------------------------------------

//Exercise 1: Combining Arrays with Spread
// Combine the following two arrays into a single new array named allNumbers.
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

// your code here.
const allNumbers = [...arrayOne,...arrayTwo];
console.log(allNumbers);

// Exercise 2: Copying Objects with Spread
// Create a new object updatedUser that is a copy of the user object but with the age property updated to 35.
const user = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// your code here.
const updatedUser = {...user,age:35}
console.log(updatedUser);

// Exercise 3: Using Rest Parameters in a Function
// Write a function sumAll that takes any number of arguments and returns their sum.
function sumAll(...numbers) {
    // your code here.
    let sum = 0;
    numbers.forEach(function(val,index){
        sum += val;
    });
    return sum;
}
console.log(sumAll(1, 2, 3)); // Expected output: 6
console.log(sumAll(10, 20, 30, 40)); // Expected output: 100

// Exercise 4: Destructuring with Rest
// Extract the first element of an array into a variable firstElement and the rest of the elements into an array remainingElements.
const data = ["apple", "banana", "cherry", "date"];

// Your code here
const [firstElement, ...remainingElements] = data;
console.log(firstElement); // Expected output: "apple"
console.log(remainingElements); // Expected output: ["banana", "cherry", "date"]

// Exercise 5: Combining Spread and Rest in a Function
// Create a function mergeAndFilter that takes a minimum of one array and any number of additional elements. The function should combine all arrays and elements into a single new array, and then filter out any duplicate values.
function mergeAndFilter(arr1, ...rest) {
  // Your code here
  let combined = [arr1, ...rest].flat();

  // Step 2: Remove duplicates using Set
  let uniqueArray = [...new Set(combined)];

  return uniqueArray;
}

const fruits = ["apple", "banana"];
const moreFruits = ["orange", "banana", "grape"];
const singleFruit = "kiwi";

console.log(mergeAndFilter(fruits, moreFruits, singleFruit, "apple")); // Expected output: ['apple', 'banana', 'orange', 'grape', 'kiwi']
