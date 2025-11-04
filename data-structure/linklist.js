
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



// Linklist (Singly)
// =================
//
// 🔎 What is it?
// A chain of nodes. Each node holds a value and a pointer to the next node.
// Head points to the first node; Tail points to the last. Last node's next = null.
//
// Time Complexity (amortized):
// - append(value): O(1)  (we keep tail pointer)
// - prepend(value): O(1)
// - insert(index, value): O(n)  (need traversal)
// - remove(index): O(n)  (need traversal; O(1) for head)
// - print(): O(n)
// - _travaseToIndex(i): O(n)
//
// Node shape:
//        Node
//   ===================
//  ||  value || next =>||
//   ===================

class Node {
  constructor(value) {
    this.value = value; // actual data
    this.next = null;   // pointer to next node (or null)
  }
}

class Linklist {
  constructor() {
    this.head = null;   // first node
    this.tail = null;   // last node
    this.length = 0;    // total nodes
  }

  // append(value): Add new node at the END
  // --------------------------------------
  //
  // Before:
  //   head → A → B → C → null
  //   tail ──────────────┘
  //
  // After append(D):
  //   head → A → B → C → D → null
  //                       ↑
  //                      tail
  //
  // Steps:
  // - If empty: head = tail = newNode
  // - Else: tail.next = newNode; tail = newNode
  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      // List is empty: first node is both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // List has at least one node
      // Connect current tail → newNode
      this.tail.next = newNode; // (tail).next = newNode
      // Move tail pointer to the new last node
      this.tail = newNode;
    }

    this.length++;
    return this; // allow chaining
  }

  // prepend(value): Add new node at the BEGINNING
  // ---------------------------------------------
  //
  // Before:
  //   head → A → B → C → null
  //
  // After prepend(X):
  //   head → X → A → B → C → null
  //
  // Steps:
  // - If empty: head = tail = newNode
  // - Else: newNode.next = head; head = newNode
  prepend(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      // Empty list → single node becomes head & tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Point new node to current head
      newNode.next = this.head;
      // Move head to new node
      this.head = newNode;
    }

    this.length++;
    return this; // chaining
  }

  // insert(index, value): Insert BEFORE "index"
  // ------------------------------------------
  //
  // Indices:    0      1      2      3
  // List:     [ H ] → [ N ] → [ N ] → [ T ] → null
  //
  // Insert at:
  // - 0 → same as prepend
  // - length → same as append (insert at end)
  // - middle → find (index - 1) = leadingNode
  //            leadingNode.next → (newNode) → oldNext
  //
  // Example insert(2, X):
  //
  //  Before: A → B → C → D → null
  //                ^index=2
  //  Find leadingNode at index-1 = 1 (node B)
  //  After:  A → B → X → C → D → null
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("Index is out of bound");
      return undefined;
    }

    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }

    // Middle insert:
    // leadingNode = node at (index - 1)
    const leadingNode = this._travaseToIndex(index - 1);
    const holdingNode = leadingNode.next; // node that used to be here

    const newNode = new Node(value);

    // Re-link pointers:
    // leadingNode → newNode → holdingNode
    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
    return this;
  }

  // remove(index): Remove node at index
  // -----------------------------------
  //
  // Cases:
  // - empty list → nothing to remove
  // - index 0 → move head to head.next (if only one node, also clear tail)
  // - middle/end → connect (index-1) directly to (index+1)
  //                if removed was last, update tail
  //
  // Example remove(2):
  //  Before: A → B → C → D → null
  //  Remove index=2 (C):
  //  After:  A → B → D → null
  //
  // Diagram:
  //  leadingNode = node at (index-1)
  //  targetedNode = leadingNode.next
  //  connectingNode = targetedNode.next
  //  leadingNode.next = connectingNode
  remove(index) {
    if (this.length === 0) {
      console.log("No items in the list to remove");
      return;
    }

    if (index < 0 || index >= this.length) {
      console.log("Index is out of bound");
      return;
    }

    // Remove the first item (head)
    if (index === 0) {
      // Save value for return
      const removedValue = this.head.value;

      // Move head forward
      this.head = this.head.next;

      // If that was the only node, clear tail too
      if (this.length === 1) {
        this.tail = null;
      }

      this.length--;
      return removedValue;
    }

    // Remove middle or last
    const leadingNode = this._travaseToIndex(index - 1); // node before the target
    const targetedNode = leadingNode.next;               // node to remove
    const connectingNode = targetedNode.next;            // node after target

    // Bypass targetedNode
    leadingNode.next = connectingNode;

    // If removed last node, update tail to leadingNode
    if (connectingNode === null) {
      this.tail = leadingNode;
    }

    this.length--;
    return targetedNode.value;
  }

  // _travaseToIndex(index): Step from head to the node at "index"
  // -------------------------------------------------------------
  //
  // Walk forward "index" steps.
  //
  // Example:
  //   head → (0) → (1) → (2) → (3)
  //   _travaseToIndex(2) returns node at position 2
  _travaseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  // print(): Show a friendly chain of values
  // ----------------------------------------
  //
  // Example:
  //   [1, 2, 3] ⇒ "1 => 2 => 3 => null"
  print() {
    let currentNode = this.head;
    const res = [];

    while (currentNode !== null) {
      res.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(res.join(" => "), "=> null");
  }
}



const linklist = new Linklist();

// Try removing on empty list (edge case)
linklist.remove(0); // "No items in the list to remove"

console.log("length:", linklist.length); // 0
linklist.print(); // (prints just " => null")


// ========= DEMO =========
// Visual checkpoints for operations:

// Build up the list:
// linklist.append(10).append(20).append(30);
// // head → 10 → 20 → 30 → null (tail at 30)
// linklist.print();
//
// linklist.prepend(5);
// // head → 5 → 10 → 20 → 30 → null
// linklist.print();
//
// linklist.insert(2, 15);
// // head → 5 → 10 → 15 → 20 → 30 → null
// linklist.print();
//
// linklist.remove(3); // remove value 20
// // head → 5 → 10 → 15 → 30 → null (tail still 30)
// linklist.print();
//
// linklist.remove(0); // remove head (5)
// // head → 10 → 15 → 30 → null
// linklist.print();
//
// console.log("Final length:", linklist.length);
