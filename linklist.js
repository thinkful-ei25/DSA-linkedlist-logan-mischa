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

  //insertAt that inserts an item at a specific position in the linked list
  // head -> 1->2->hottamale->9->null
  // input(value, position) value === freakout position === 2
  // outpout is  head -> 1->2->freakout->hottamale->9->null
  //if position == 0 > move the head to point to the new one 
  // 


  //3 variables -- currentNode, previousNode position
  // while position !== positionParam-1 && currentNode !== null cycle through linklist reseting currentNode
  // --> 

  // 1->2->3->null
  // position = 4
  insertAt(position, value = 0) {
    if (position === 0) {
      return this.insertFirst(value);
    }
    if (position < 0) {
      throw new Error('please insert position greater than or equal to 0!!!!');
    }
    let currentNode = this.head;
    for (let i = 0; i < position - 1; i++) {
      if (currentNode.next === null) {
        currentNode.next = new _Node(value, currentNode.next);
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(value, currentNode.next);
  }
}

/* 
  input : [add:1, value:'athena', next: 3][add:3, value:'apollo', next: 76][add:3, value:'apollo', next: 76]
  output: athena -> apollo -> hotdog

  if empty --> return null; (throw error) ? 
  currentNode = LL.head
  str = ''
  while(currentNode) loop currentNode = currentNode.next
  console.log(value)
  str += value + -> 
*/
function display(LL) {
  if (LL.head === null) {
    return null;
  }
  let displayStr = '';
  let currentNode = LL.head;
  while (currentNode) {
    // console.log(currentNode.value);
    displayStr += currentNode.value + '->';
    currentNode = currentNode.next;
  }
  return displayStr += 'null';
}

function size(LL) {
  let currentNode = LL.head;
  let size = 0;
  if (LL.head === null) {
    return size;
  }
  while (currentNode) {
    currentNode = currentNode.next;
    size++;
  }
  return size;
}

function isEmpty(LL) {
  return LL.head === null;
}

// current and previous
// while currentNode doesnt equal item continue forward
function findPrevious(LL, item) {
  let currentNode = LL.head;
  let previous = LL.head;
  if (LL.head.value === item) {
    return 'Nothing before item';
  }
  if (isEmpty(LL)) {
    return 'Empty';
  }
  while (currentNode) {
    if (currentNode.value === item) {
      return previous.value;
    }
    previous = currentNode;
    currentNode = currentNode.next;
  }
  return false;
}

// use while loop to traverse through, return last
function findLast(LL) {
  if (isEmpty(LL)) {
    return 'Empty';
  }
  let currentNode = LL.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
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
  SLL.insertAt(0, 'Kat');
  SLL.remove('Tauhida');
  console.log(display(SLL));
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(findPrevious(SLL, 'Boomer'));
  console.log(findLast(SLL));
}
main();

//Mystery Program
//if newNode is returned then the program removes the duplicate values
//O(N^2); iterating through every item n-times and 2 while loops
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

