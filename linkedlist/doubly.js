class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class MyDoublyLinkedList {
  
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  //método que agrega en la cola de la linkedlist
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
