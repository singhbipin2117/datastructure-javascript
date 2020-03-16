const util = require('util')
function Node(value) {
    this.data = value;
    this.next = null;
}


class linkedListStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.length += 1;
        } else {
            let node = new Node(value);
            node.next = this.head;
            this.head = node;
            this.length += 1;
        }
    }
    pop() {
        if (!this.head) {
            throw "Stack is empty";
        }
        let topData = this.head.data;
        this.head = this.head.next;
        this.length -= 1;
        return topData;
    }
    top() {
        return this.head.data;
    }
    size() {
        return this.length;
    }
    isEmptyStack() {
        return this.head == null ? true : false;
    }
    deleteStack() {
        this.head = null;
    }
}

// creating a stack
ls = new linkedListStack();

// pushing value to stack
ls.push(1);
ls.push(2);
ls.push(3);
ls.push(4);

// popping value from stack
const p1 = ls.pop();
console.log("Popped value ", p1);

// fetch top value from stack
const t1 = ls.top();
console.log(t1);

// size of the stack
console.log("Size of the stack ", ls.size());

// delete stack

ls.delete();
console.log(ls);