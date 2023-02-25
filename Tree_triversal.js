// create a Node
class Node{
    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }

    getValue(){
        return this.value;
    }
    left(){
        return this.left;
    }
    right(){
        return this.right;
    }

    setLeft(data){
        this.left = data
    }

    setRight(data){
        this.right = data
    }
}

// Weighted Binary Tree

class WBT{
    constructor(data){
        this.root= new Node(data)
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root==null){
            this.root = newNode;
        }else{
            let current = this.root
            let active = true
            
            while(active){
                if(current.value>data){
                    if(current.left){
                        current = current.left;
                    }else{
                        current.setLeft(newNode);
                        active = false;
                    }
                    
                }else{
                    if(current.right){
                        current = current.right;
                    }else{
                        current.setRight(newNode);
                        active = false;
                    }
                }
            }
        }
    }

    // delete a node and replace with most smallest element on the right if right child present else place with first left child 
    delete(delete_item){
        let current = this.root;
        let previous = null

        function remove(current, delete_item, previous){
            if(current.value == delete_item){
                if(!previous){
                    console.log('root can not be deleted!')
                    return
                }
                let minNode= null
                
                // case with current node
                // 1. leaf : in this case ___minNode = null___
                // 2. Node with only left child
                // 3. Node with only right child
                // 4. Node with left and right child
                
                if(current.right){ // handling 3rd and 4th case
                    minNode = findMinimumRight(current.right, current)
                    minNode.setLeft(current.left)
                    minNode.value !=current.right?.value && minNode.setRight(current.right) // handling if only 1 right child
                    
                }else if(current.left && !current.right){ // handling 2nd case 
                    minNode = current.left
                }

                if(previous.value>delete_item){ 
                    previous.setLeft(minNode)
                }else{
                    previous.setRight(minNode)
                }
                
                
                
                
            }else{
                previous = current
                if(current.left){
                    remove(current.left, delete_item, previous)
                }
                if(current.right){
                    remove(current.right, delete_item, previous)
                }
            }
        }

        function findMinimumRight(current, previous){
            console.log('current >>', current)
            if(current.left==null){
                
                previous.left = null;
                // console.log('min>>', current, previous)
                return current
            }
            previous = current
            // console.log('pre and current', previous, current)
            return findMinimumRight(current.left, previous)

            
        }
        remove(current, delete_item, previous)
    }

    InorderTraversasl(){
     let current = this.root
     function traversal(current){
        if(current.value){
            if(current.left){
                traversal(current.left)
            }
            console.log('value', current.value)
            if(current.right){
                traversal(current.right)
            }
         }
     }
     traversal(current)
    }


}

let Tree = new WBT(50)
// Tree.insert(5)
let arr = [30,20,10,25,40,35,45,65,55,52,75,80]

arr.forEach(element => {
    Tree.insert(element)
});
// Edge test cases delete 10, 40, 55, 75, 80 
Tree.delete(80)

Tree.InorderTraversasl()

