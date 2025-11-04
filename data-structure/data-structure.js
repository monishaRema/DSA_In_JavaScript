// Stack Data Structure
// LIFO => Last In, First Out
// Time Complexity: O(1) / Constant time

// Explanation:
// A Stack works just like a box. You keep items one by one inside the box.
// When you need something, you must take out the last item you placed first.
// That’s why it’s called “Last In, First Out” — LIFO.

// If you want to add something to the box, you place it on top of other items.
// That’s called push() — adding to the top (end).
// If you want to remove something, you take out the top/last item first — that’s pop().
// If you just want to check what’s on the top without removing it — that’s peek().

//  Visualization of Stack:
//
//        ┌────────────┐  ←── Top (Last In)
//        │    Item 3  │
//        ├────────────┤
//        │    Item 2  │
//        ├────────────┤
//        │    Item 1  │  ←── Bottom (First In)
//        └────────────┘

//  🔹 Operations:
//    - push() → Add an item on top
//    - pop()  → Remove the top item
//    - peek() → See what’s on top without removing

//  🧰 Used in:
//  - Undo/Redo operations
//  - Browser back navigation
//  - Function call stack

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

  // isEmpty => quick check so other methods can safely decide what to do
  isEmpty() {
    return this.items.length === 0;
  }
}

const vowels = new Stack();

// vowels.push("a")
// vowels.push("e")
// vowels.push("i")
// vowels.push("o")
// vowels.push("u")
// vowels.push("y")
// vowels.pop()
// Example => actively fill the stack so we can observe the Last-In-First-Out order
vowels.push("a");
vowels.push("e");
vowels.push("i");
vowels.push("o");
vowels.push("u");
vowels.push("y");

// peek() shows the newest vowel because it sits at the top of the stack
console.log("peek() returns the latest vowel =>", vowels.peek());

// pop() removes that same vowel, proving LIFO in action
console.log("pop() removes the same vowel =>", vowels.pop());

// The stack still keeps the earlier vowels ready for the next operations
console.log("Stack after one pop =>", vowels);

// Queue Data Structure
// FIFO => First In, First Out
// Time Complexity: O(n) / Linear time (in arrays)

// Explanation:
// Queue works just like a line of people waiting for service.
// People enter from one side and leave from the other side.
// So, the person who comes first gets served first — that’s why it’s called “First In, First Out” (FIFO).

// If new person come to the line, the person will always appear in the last and so on. =>  Enqueue()
// If you want to remove anyone from the line after served the person it will be always the first one in the line. => Dequeue()
// If you want to see who is the first person in the line => peek().

//  Visualization of Queue:
//
//  Front (Dequeue)                     Rear (Enqueue)
//        │                                   │
//        ▼                                   ▼
//   ┌────────────┐    ┌────────────┐   ┌────────────┐
//   │   Person1  │==>│   Person2  │==>│   Person3  │→ null
//   └────────────┘   └────────────┘   └────────────┘

//  🔹 Operations:
//    - enqueue() → Add item at the end (rear)
//    - dequeue() → Remove item from the front
//    - peek()    → See the front item without removing
//
//  🧰 Used in:
//  - Printers (first job prints first)
//  - Task scheduling
//  - Customer service lines
//  - Message queues or event loops

class Queue {
  constructor() {
    // Queue also relies on an array, but the front is always index 0
    this.items = [];
  }

  // enqueue => add a value to the back of the line
  enqueue(value) {
    this.items.push(value);
  }

  // dequeue => remove and return the value that waited the longest (FIFO behavior)
  dequeue() {
    if (this.isEmpty()) {
      // Guard => when empty, return undefined instead of throwing an error
      return undefined;
    }

    return this.items.shift();
  }

  // peek => quickly check which value is next to leave the queue
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastItem = this.items[0];
    return lastItem;
  }

  // isEmpty => used by other queue helpers and by outside callers
  isEmpty() {
    return this.items.length === 0;
  }
}

const number = new Queue();

// Dequeue on an empty queue returns undefined because nothing is waiting
console.log("dequeue() on empty queue =>", number.dequeue());

// Right after creation the queue has no items, so this should be true
console.log("isEmpty() right after creation =>", number.isEmpty());

// enqueue => add elements to the back in the order we receive them
number.enqueue(3);
number.enqueue(6);
number.enqueue(9);

// peek() now reveals the very first value that entered the queue
console.log("peek() shows the oldest value =>", number.peek());

// Inspect the queue to see all pending values in arrival order
console.log("Queue after enqueue operations =>", number);

// dequeue removes the first value (3), demonstrating First-In-First-Out
console.log("dequeue() removes the oldest value =>", number.dequeue());




// 🧩 Queue Implementation using Linked List
// -----------------------------------------
//
// Why LinkedList instead of Array?
//  - Array.shift() = O(n) because it re-indexes the entire array.
//  - LinkedList.dequeue() = O(1) because we just move the head pointer.
//  - enqueue() and dequeue() both O(1).
//
// FIFO = First In, First Out
//
// Visualization:
//
//  Enqueue (add to tail)             Dequeue (remove from head)
//  ┌────────────┐                    ┌────────────┐
//  │ Front(head)│──▶──▶──▶──▶──▶──▶──│  Tail(end) │
//  └────────────┘                    └────────────┘
//      ▲                                   │
//      │                                   ▼
//     dequeue()                       enqueue()
//

// Node class for LinkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList-based Queue
class QueueLinkList {
  constructor() {
    this.head = null; // Front of queue (oldest element)
    this.tail = null; // Back of queue (newest element)
    this.length = 0;
  }

  // enqueue() => Add item to the BACK of the queue
  // -----------------------------------------------
  // Steps:
  // 1️⃣ Create new node
  // 2️⃣ If queue is empty: head = tail = newNode
  // 3️⃣ Else: tail.next = newNode; tail = newNode
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode; // first node = both head and tail
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // link current tail to new node
      this.tail = newNode; // update tail
    }

    this.length++;
  }

  // dequeue() => Remove item from the FRONT of the queue
  // ----------------------------------------------------
  // Steps:
  // 1️⃣ If empty → return undefined
  // 2️⃣ Store the value of head
  // 3️⃣ Move head pointer to next node
  // 4️⃣ If queue becomes empty → tail = null
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const removedValue = this.head.value;
    this.head = this.head.next;

    // if we removed the last node
    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return removedValue;
  }

  // peek() => View the front value without removing it
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.head.value;
  }

  // isEmpty() => Check if queue has no elements
  isEmpty() {
    return this.length === 0;
  }

  // print() => visualize the linked structure
  print() {
    let current = this.head;
    const result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" => "), "=> null");
  }
}

// ✅ Demo
const numberQueue = new QueueLinkList();

console.log("dequeue() on empty queue =>", numberQueue.dequeue());
console.log("isEmpty() right after creation =>", numberQueue.isEmpty());

numberQueue.enqueue(3);
numberQueue.enqueue(6);
numberQueue.enqueue(9);

console.log("peek() shows the oldest value =>", numberQueue.peek());

console.log("Queue after enqueue operations:");
numberQueue.print();

console.log("dequeue() removes the oldest value =>", numberQueue.dequeue());

console.log("Queue after one dequeue:");
numberQueue.print();

console.log("Queue length =>", numberQueue.length);

