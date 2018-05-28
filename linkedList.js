class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    add(value){
        let node = new Node(value, this.head);
        this.head = node;
    }
    forEach(callBack){
        let node = this.head;
        while(node){
            callBack(node);
            node = node.next;
        }
    }
    reverse(){
        if(!this.head || !this.head.next){
            return;
        }
        let reversed = this.head;
        let to_reverse = this.head.next;
        reversed.next = null;
        while(to_reverse){
            let temp = to_reverse.next;
            to_reverse.next = reversed;
            reversed = to_reverse;
            to_reverse = temp;
        }
        this.head = reversed;
    }
    delete(key){
        let current = this.head;
        let prev = null;
        while(current){
            if(current.value === key){
                console.log('in here');
                let temp = current.next;
                if(! prev){
                    this.head = temp;
                }
                else {
                    prev.next = temp;
                }
                current = temp;
            }
            else {
                let temp = current;
                current = current.next;
                prev = temp;
            }
        }
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
// list.add(3);
// list.add(4);
list.forEach(function(node){
    console.log(node.value);
});
list.delete(2);
list.forEach(function(node){
    console.log(node.value);
});
console.log(list.head.value);

