class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // prototypes
  add(element) {
    var newNode = new Node(element);
    var tempHead = this.head;
    if (this.head == null) {
      this.head = newNode;
    } else {
      while (tempHead.next) {
        tempHead = tempHead.next;
      }
      tempHead.next = newNode;
    }
    this.size++;
  }
  getNode(index) {
    if (this.size < index || this.size == 0) {
      return `incorrect index, max size ${this.size}`;
    } else {
      var tempHead = this.head;
      let nodeNumber = 0;
      while (nodeNumber < index) {
        tempHead = tempHead.next;
        nodeNumber++;
      }
      return tempHead;
    }
  }
  insertNode(value, index) {
    if (this.size <= index || this.size == 0 || index == 0) {
      console.log(`invalid index ${index}`);
      return false;
    } else {
      let newNode = new Node(value);
      var tempHead = this.head;
      let current = 0;
      var prevHead;
      while (current < index) {
        prevHead = tempHead;
        tempHead = tempHead.next;
        current++;
      }
      newNode.next = tempHead;
      prevHead.next = newNode;
    }
  }
  deleteNode(index) {
    if (index == 0) {
      this.head = null;
      this.size = 0;
    } else if (this.size <= index) {
      console.log("invalid index");
    } else {
      let tempHead = this.head;
      let current = 0;
      let prevHead = tempHead;
      while (current < index) {
        prevHead = tempHead;
        tempHead = tempHead.next;
        current++;
      }
      prevHead.next = tempHead.next;
    }
  }
}
let l = new LinkedList();
l.add("first Node");
l.add("Second Node");
l.add("third Node");
l.insertNode("second again", 1);
l.deleteNode(2);
console.log(l.getNode(0));
console.log(l.getNode(1));
console.log(l.getNode(2));
console.log(l.getNode(3));
