'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //insertFirst()
  // --> new nodes need value and next
  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  //insertLast(value)
  //check if list is empty --> if it is then insertFirst(value)
  //loop through until value === null 
  // ===> then create new node, update null to new node and set new node next ptr to null
  /* 
  head|2567| ==> [|2567| newNode value |145|] ==> [|145|node1 |234|] --> |234|node2 |null|] ==> |456|node3 |null|]
  */
  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let tempNode = this.head;
      // console.log(tempNode);
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(value, null);
    }
  }
  //find(value)
  //returns the node
  //start at head => while tempNode does not equal value => once we find return tempNode
  find(value) {
    if (this.head === null) {
      return false;
    }
    let tempNode = this.head;
    while (tempNode.value !== value) {
      if (tempNode.next === null) {
        return false;
      } else {
        tempNode = tempNode.next;
      }
    }
    return tempNode;
  }
  //remove(value)
  //removes node
  //we need current node + previous node, once we find the node set previous node's next value to current node's next
  remove(value) {
    if (this.head === null) {
      return false;
    }
    let currentNode = this.head;
    let previousNode;
    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        return false;
      } else {
        //setting previous node to currentNode
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    if (!previousNode) {
      this.head = currentNode.next;
      return 'yay';
    }
    previousNode.next = currentNode.next;
    return true;
  }
  //insertBefore(Boomer, Athena)
  //  Input: 1 -> 2 -> 3 -> 4
  //  Insert: (2, CHICKEN)
  //  Output: 1 -> CHICKEN -> 2 -> 3 -> 4
  // Start at the head
  // two temp nodes: previous and current: both starting at head
  // While current.value is the value parameter we create a new node and assign that to previous.next
  // then we assign new node to point to current node
  // need to do error checking: if head then call insertFirst
  // if next node is null set previous node to new node and new node to null
  insertBefore(nextNodeValue, value) {
    let current = this.head;
    let previous = this.head;
    //check if list is not empty
    if (nextNodeValue === this.head.value) {
      this.insertFirst(value);
      return;
    }
    while (current) {
      if (current.value === nextNodeValue) {
        previous.next = new _Node(value, current);
        return;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  //insertAfter(Helo, Hotdog)
  insertAfter(nextNodeValue, value) {
    let current = this.head;
    while (current) {
      if (current.value === nextNodeValue) {
        current.next = new _Node(value, current.next);
        return;
      }
      current = current.next;
    }
    return false;
  }
}

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // console.log(SLL.remove('squirrel'));
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  console.log(JSON.stringify(SLL));
}

main();
// const linkedList = new LinkedList();
// linkedList.insertFirst(1);
// linkedList.insertFirst(23);
// linkedList.insertLast(234);
// console.log(linkedList.remove(22));
// // console.log(linkedList.find(3));
// console.log(JSON.stringify(linkedList));