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

// Linklist
// 🧩 1. Singly Linked List
// -----------------------------
//
//  Each node points to the next node.
//  The last node’s next is null (the list ends there).
// Each node holds two things:
//  1️⃣ Data (the value)
//  2️⃣ A pointer (next) that refers to the next node in the list.
//
//  Structure of a Node:
//
//        Node
//   ===================
//  ||  Data  ||  Next => 
//   ===================
//
//  Example of connection:
//
//   ┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
//   │   Head (Node1)   │──▶──│   Node2          │──▶──│   Tail (Node3)   │──▶ null
//   └──────────────────┘     └──────────────────┘     └──────────────────┘
//
//  🧠 Meaning:
//  - Traverses in one direction only (head → tail).
//  - Each node knows only who comes *next*.
//  - Last node’s “next” points to null (end of the list).
//  - You can traverse in one direction (forward only).
//  - Simple and memory-efficient.
//  - Used in stacks, queues, and basic linked data structures.

// 🧩 2. Doubly Linked List
// -----------------------------
//
// Each node points to both its next and previous node.
// That means you can move forward ⟶ or backward ⟵ through the list.
//
// Each node holds three things:
//  1️⃣ Data (the value)
//  2️⃣ A pointer (next) that refers to the next node
//  3️⃣ A pointer (prev) that refers to the previous node
//
//  Structure of a Node:
//
//             Node
//   =================================
//  || <- Prev ||  Data  ||  Next -> ||
//   =================================
//
//  Example of connection:
//
//   null ◀──┌──────────────────┐◀────┌──────────────────┐◀────┌──────────────────┐──▶ null
//            │  Head (Node1)   │===>│    Node2         │===> │  Tail (Node3)    │
//            └─────────────────┘    └──────────────────┘     └──────────────────┘
//
//  🧠 Meaning:
//  - Traverses in both directions (head ⇄ tail).
//  - Each node knows both who comes *next* and who came *before*.
//  - Uses slightly more memory because of the extra “prev” pointer.
//  - Easier to navigate and delete nodes from both ends.
//  - Used in browsers (back/forward), music playlists, undo/redo features.
//



// 🔁 3. Circular Linked List
// -----------------------------
//
//  Each node points to the next node,
//  and the last node (tail) points back to the first node (head).
//  So, it forms a continuous loop.
//

// Node hold the data and next

//         Node
//  ===================
// || Data   || Next =>
//  ===================
//  Visualization:
//
//      ┌────────────┐      ┌────────────┐      ┌────────────┐
//      │   Head     │──▶──▶│  Element   │──▶──▶│   Tail     │
//      └────────────┘      └────────────┘      └────────────┘
//            ▲                                         │
//            │                                         │
//            └─────────────────────────────────────────┘
//
//  🧠 Meaning:
//  - Traversal never reaches null (it loops back to head).
//  - Useful for round-robin scheduling, buffering, or playlist loops.
//




class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    // Check the linklist is empty
    if (this.head == null) {
      this.head = newNode;  // newNode is the head and tail both
      this.tail = newNode;
    } else {
      // if linklist is not empty
      this.tail.next = newNode;  // Poinit the new value as next to tail
      this.tail = newNode;      // Change the tail to newnode. Now newnode is the tail
    }

    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);

    // Check the linklist is empty
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if linklist is not empty
      newNode.next = this.head;  // newNode will point the next to the head
      this.head = newNode;      // now the head will be the newNode
    }

    this.length++;
  }
  insert() {}
  remove() {}
  print() {
    let currentNode = this.head;
    let res = [];
    while (currentNode !== null) {
      res.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(res.join(" => "), "=> null");
  }
}

const linklist = new Linklist();

linklist.append(1);
linklist.append(2);
linklist.append(3);

linklist.prepend(0);
linklist.prepend(-1);

console.log(linklist.length);
linklist.print();
