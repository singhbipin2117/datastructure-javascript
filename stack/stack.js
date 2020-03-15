class ArrayStack {
    constructor() {
        this.top;
        this.capacity;
        this.blankArray;
    }
}

class createStack {
    constructor(capacity) {
        this.stack = new ArrayStack();
        this.stack.capacity = capacity;
        this.stack.top = -1;
        this.stack.blankArray = Array.from(Array(capacity)).fill(0)
    }

    push(value) {
        if (this.stack.top == this.stack.capacity - 1) {
            throw "Stack is full";
        }
        this.stack.top += 1;
        this.stack.blankArray[this.stack.top] = value;

    }

    pop() {
        if (this.stack.top >= 0) {
            let pe = this.stack.blankArray[this.stack.top];
            this.stack.blankArray[this.stack.top] = 0;
            this.stack.top -= 1;
            return pe;
        } else {
            throw "Stack is empty";
        }

    }

    top() {
        return this.stack.blankArray[this.stack.top];
    }

    size() {
        return this.stack.top + 1
    }

    isEmptyStack() {
        return this.stack.top >= 0 ? false : true;
    }

    isFullStack() {
        return this.stack.top == (this.stack.capacity - 1) ? true : false;
    }

    deleteStack() {
        this.stack.blankArray = [];
        this.stack.capacity = 0;
        this.stack.top = -1;
    }
}

// create array stack
var as = new createStack(10);

// push element into the stack
as.push(4);
as.push(5);
as.push(6);
as.push(7);



// remove and return the last inserted element
pp1 = as.pop();
console.log(pp1);

// Return last inserted element without removing it.
t1 = as.top();
console.log("Top element", t1);

// check whether stack is empty or not
console.log("isEmptyStack ", as.isEmptyStack());
console.log("isFullStack ", as.isFullStack())
as.deleteStack();
console.log("View Stack ", as);