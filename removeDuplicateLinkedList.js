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
}

function removeDuplicates(list){
    let current = list.head;
    let prev = null;
    let obj = {};
    while(current){
        let value = current.value;
        if(obj[value]){
            let temp = current.next;
            prev.next = temp;
            current = temp;
        }
        else {
            obj[value] = true;
            prev = current;
            current = current.next;
        }
    }
}


let list = new LinkedList();
list.add(21);
list.add(14);
list.add(28);
list.add(28);
list.add(14);
list.add(7);
removeDuplicates(list);
list.forEach(function(node){
    console.log(node.value);
});