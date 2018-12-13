class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
  }
  //insertFirst()
  // --> new nodes need value and next
  insertFirst(value){
    this.head = new _Node(value, this.head);
  }

  //insertLast(value)
  //check if list is empty --> if it is then insertFirst(value)
  //loop through until value === null 
  // ===> then create new node, update null to new node and set new node next ptr to null


/* 

head|2567| ==> [|2567| newNode value |145|] ==> [|145|node1 |234|] --> |234|node2 |null|] ==> |456|node3 |null|]

*/
  insertLast(value){
    if(this.head === null){
      this.insertFirst(value);
    }else{
      let tempNode = this.head;
      console.log(tempNode);
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(value, null);
    }
  }
  //remove(value)

  //find(value)
}

const linkedList = new LinkedList();
linkedList.insertFirst(1);
linkedList.insertFirst(23);
linkedList.insertLast(234);


console.log(JSON.stringify(linkedList));