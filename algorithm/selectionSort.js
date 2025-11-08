// selectionSort([5, 3, 8, 4, 2]);

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log("State of array",array);

    let minIndex = i;
    console.log("min index",minIndex)

    for(let j =  i + 1; j <array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j
      }
      console.log("value",array[minIndex],"Index",minIndex)

    }
    if(minIndex !== i){
      // let temp = array[i];
      // array[i] = array[minIndex];
      // array[minIndex] = temp;
      [array[i], array[minIndex]] = [array[minIndex],array[i]]
    }
    console.log(`After pass $(i + 1)`,array)
    
  }
};

selectionSort([5, 3, 8, 4, 2]);