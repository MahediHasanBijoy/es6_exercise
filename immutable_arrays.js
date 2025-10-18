// In JavaScript, strings, numbers, and other primitive data types are immutable by default.
// That means they are passed by value — a copy is made when assigning them.

let a = "hello";
let b = a;
a = "world";
console.log(b); // still "hello" — because b holds a copy of the original value

// Arrays and objects are mutable and passed by reference (technically, by reference to the object in memory).

let ids = [2, 4, 3, 1]; // ids stores a reference (memory address) to the array, not the array itself
let duplicate_ids = ids; // both variables now point to the same array in memory

ids.push(10); // modifying the array through 'ids' also affects 'duplicate_ids'

console.log(ids);          // [2, 4, 3, 1, 10]
console.log(duplicate_ids); // [2, 4, 3, 1, 10] — same array!

// mutable array in function
function modify(arr) { // passing the reference value of ids array thats why when inside fuction arr is changed the ids array also changed.
  arr.push(100);
}
modify(ids); 
console.log(ids);


// #Why we need immutable arrays and objects
/*
1. Predictability & Debugging

If your data doesn't change unexpectedly, your code is easier to understand, test, and debug.

let user = { name: "Alice" };
let another = user;
another.name = "Bob"; // Oh no — now user is also changed!


With immutability, that kind of surprise wouldn’t happen.

2. Avoid Side Effects

In big apps (e.g., React apps), data often flows from one component to another. If something changes the data in place, it can cause weird side effects.

Immutability helps make sure that data flows in one direction, and no one changes it unexpectedly.

3. Time Travel Debugging / Undo Feature

If you're making a drawing app or game and want to undo/redo actions, it's easier to do that when you're not mutating the original data, but keeping new versions of it.

4. Working with React / Redux

Frameworks like React and Redux rely heavily on immutability:

React detects changes by comparing old and new values.

Redux requires that you never mutate the state directly — always return a new state object.
*/
// Create, delete or update immutable arrays meaning without changing the original array create a new array every time for create,delete or update something in the array.

//Instead of mutating, you create new copies with changes.

//For arrays:
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4] — original not changed

//For objects:
const user = { name: "Alice" };
const updatedUser = { ...user, name: "Bob" }; // new object

