// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false




class Stack {
  constructor() {
    // Use an array so the last index always represents the top of the stack.
    this.items = [];
  }

  // push => place a new value on top of the stack (end of the array)
  push(value) {
    this.items.push(value);
  }

  // pop => remove and return the most recently added value (LIFO behavior)
  pop() {
    if (this.isEmpty()) {
      // Guard => if stack is empty, return undefined to signal nothing to remove
      return undefined;
    }
    return this.items.pop();
  }

  // peek => look at the top value without removing it
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    const length = this.items.length;
    const lastItem = this.items[length - 1];
    return lastItem;
  }

  print(){
        console.log(this.items)
  }

  // isEmpty => quick check so other methods can safely decide what to do
  isEmpty() {
    return this.items.length === 0;
  }
}


function bracketChecker(str){

    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
            stack.push(str[i]);
        }
    }

    stack.print();
    return stack;

}


bracketChecker('([{}])')
