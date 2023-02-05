
class Node{
constructor(value){
	this.value = value
  this.next = null
}
}
 class LinkedList{
  constructor(){
  this.head = null;
  this.size = 0
  }
  
  add(element){
    var newNode = new Node(element)
    var tempHead = this.head
    if(this.head == null){
        this.head = newNode
    }	else{
      while(tempHead.next){
        tempHead = tempHead.next
      }
      tempHead.next = newNode
    }
    this.size ++
  }
  getNode(index){
  console.log('size', this.size, index)
  	if(this.size <= index || this.size==0){
		return `incorrect index, max size ${this.size}`
    }else{
    var tempHead = this.head
    	let nodeNumber = 0
			while(nodeNumber < index){
				tempHead = tempHead.next
        nodeNumber ++;
      }
     return tempHead
      }
  }
} 
let l =new LinkedList()
l.add('Hi')
l.add("name")
l.add('onemore')
console.log(l.getNode(0))
