let a = [1,2,3,4,5];
let b = [6,7,8,9,10];


let ab = {
    name: "example",
    age: 25,
    city: "New York" ,
    friends: ["Alice", "Bob", "Charlie"],
    isActive: true,

}

// Explaination of Big O Notation with examples
// Big O Notation is a way to describe the performance or complexity of an algorithm. It specifically describes the worst-case scenario and helps to understand how the algorithm behaves as the input size grows. Here are some common Big O notations with examples:



// 1. O(1) - Constant Time Complexity: An algorithm is said to have constant time complexity if the time taken to complete does not change with the size of the input data. Means how much element it counts that does not matter, still it will consume same amount of time. Example: Accessing an element in an array by its index or retrieving a value from a dictionary by its key.
console.log(a[3]);
console.log(ab.name);



// 2. O(n) - Linear Time Complexity: An algorithm is said to have linear time complexity if the time taken to complete grows linearly with the size of the input data. Means time unit is always one. If element increase the time will increase. Example: A loop that iterates through all elements in an array.
for(let i = 0; i < a.length; i++) {
    console.log(a[i]);
}


// 3. O(n^2) - Quadratic Time Complexity: An algorithm is said to have quadratic time complexity if the time taken to complete grows quadratically with the size of the input data. Example: A nested loop where for each element in an array, you iterate through all elements again.

for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++) {
        console.log('*');
    }       
}