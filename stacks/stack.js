class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Utiliza la métodología LIFO (Last In First Out) => Primero en llegar es el útlimo en salir.
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  //definir el método pop (eliminar siempre el elemento cabecera)
}

const myStack = new Stack();
