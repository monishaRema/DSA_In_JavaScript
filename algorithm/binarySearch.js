// console.log(binarySearch([3, 5, 6, 7, 9, 11], 7)); // Output: 3

// const binarySearch = (arr, target) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((high + low) / 2);
//     const guess = arr[mid];

//     if (guess === target) {
//       return mid;
//     } else if (guess > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return -1;
// };

// console.log(binarySearch([3, 5, 6, 7, 9, 11], 7));

// const binarySearch = (arr, target) => {
//   console.log(`\n===================================`);
//   console.log(`🚀 Searching for ${target} in: [${arr}]`);
//   console.log(`===================================`);

//   let low = 0;
//   let high = arr.length - 1;
//   let step = 1;

//   while (low <= high) {
//     console.log(`\n--- Step ${step} ---`);

//     // 1. Log the current search window
//     const currentWindow = arr.slice(low, high + 1);
//     console.log(`  Window (Indices ${low} to ${high}): [${currentWindow}]`);

//     // 2. Calculate the middle index (the correct way)
//     let mid = Math.floor((low + high) / 2);
//     let guess = arr[mid];

//     // 3. Log the guess
//     console.log(`  🎯 Guessing mid index ${mid} (Value: ${guess})`);

//     // 4. Log the action based on the guess
//     if (guess === target) {
//       console.log(`  ✅ Found it! Returning index ${mid}.`);
//       return mid;
//     } else if (guess > target) {
//       console.log(`  ➡️ Action: ${guess} is too high. Discarding right half.`);
//       high = mid - 1; // Move 'high' pointer
//     } else {
//       console.log(`  ➡️ Action: ${guess} is too low. Discarding left half.`);
//       low = mid + 1; // Move 'low' pointer
//     }
//     step++;
//   }

//   // 5. Log if not found
//   console.log(`\n--- End of Search ---`);
//   console.log(`  ❌ Target ${target} was not found.`);
//   return -1;
// };

// --- Example 1: Target is Found ---
// binarySearch([3, 5, 6, 7, 9, 11], 7);

// // --- Example 2: Target is Not Found ---
// binarySearch([2, 4, 6, 8, 10, 12], 3);


const binarySearch = (arr,target)=>{
  let start = 0;
  let end = arr.length - 1;

  while(start <= end){

    let mid = Math.floor( (start + end) / 2);
    console.log("mid", arr[mid])
    if(target === arr[mid]){
      return {
        index:mid,
        value:arr[mid]
      };
    }else if(arr[mid] < target){
      start = mid + 1;
    }else{
      end = mid - 1;
    }
  }
  return false
}

console.log(binarySearch([2, 4, 6, 8, 10, 12,15],10))
