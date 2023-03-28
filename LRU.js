// lruCache , track map()
let MAX_HEAP_SIZE = 3
class Node{
    constructor(v){
        this.value = v;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    static count = 0
    constructor(){
        this.head = new Node(0);
    }

    get(v){
        let current = this.head;
        let prevN = null;
        while(current.next){
            if(current.value == v){
                break;
            }
            prevN = current
            current = current.next;

        }
        let secondNode = this.head.next;
        this.head.next = current
        
         prevN.next = current.next;

         current.next = secondNode;
    }

    set(v){
        let node = new Node(v);
        let current = this.head;
        let prevN = null
        if(LRUCache.count < MAX_HEAP_SIZE){
            node.next = this.head.next;
            this.head.next = node;
            LRUCache.count++
        }else{
            // delete last and insert at first
            while(current.next){ // reach till last node
                prevN = current
                current = current.next
            }
            console.log('deleting', prevN.next)
            // delete last node
            prevN.next = null

            // insert at first place
            current = this.head
            node.next = this.head.next;
            this.head.next = node;
            // LRUCache.count--
        }
        
    }

    traverse(){
        let current = this.head
        while(current.next){
            console.log('value:', current.value)
            current = current.next
        }
        console.log('last:', current.value)
    }
}

let lru = new LRUCache()

lru.set(5)
lru.set(3)
lru.set(4)
lru.set(2)

lru.traverse()
lru.get(5)
console.log(LRUCache.count)
lru.set(6)
lru.set(7)
lru.set(8)
lru.traverse()
console.log(LRUCache.count)