class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Utiliza la métodología FIFO (First In First Out) => Primero en llegar es el primero en salir.
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }
  //implementar dequeue (eliminar siempre el primer elemento)
}

const myQueue = new Queue();
