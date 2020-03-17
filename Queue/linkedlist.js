const util = require('util')

class Node {
    constructor() {
        this.data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front;
        this.rear;
    }
}

class createQueue {
    constructor() {
        this.queue = new Queue();
        this.queue.front = null;
        this.queue.rear = null;
    }
    isEmptyQueue() {
        // return true if condition is true else return false
        return this.queue.front === null;
    }
    enQueue(value) {
        let node = new Node();
        node.data = value;
        if (!this.queue.front) {
            this.queue.front = node;
            this.queue.rear = node;

        } else {
            if (this.queue.front.next == null) {
                this.queue.front.next = node;
                this.queue.rear = this.queue.front.next;
            } else {
                let node1 = this.queue.front.next;
                while (node1) {
                    if (node1.next) {
                        node1 = node1.next;
                    } else {
                        node1.next = node;
                        break;
                    }
                }
                this.queue.rear = node1.next
            }
        }
    }

    deQueue() {
        let data = this.queue.front.data;
        if (this.queue.front == this.queue.rear) {
            this.queue.front = null;
            this.queue.rear = null;
            // delete this.queue;
        } else {
            this.queue.front = this.queue.front.next;
        }
        return data
    }
    deleteQueue() {
        this.queue.front = null;
        this.queue.rear = null;
    }
}

// create array stack
var queue = new createQueue(10);

// push element into the queue
queue.enQueue(4);
queue.enQueue(5);
queue.enQueue(6);
queue.enQueue(7);



// return the first inserted element
dq = queue.deQueue();
console.log("Dequeued the first element ", dq);

// check isEmptyQueue or not
isEmpty = queue.isEmptyQueue();
console.log("Check queue is empty or not ", isEmpty);



// Delete queue
queue.deleteQueue();
console.log("Delete Queue", util.inspect(queue, { showHidden: false, depth: null }));
console.log(util.inspect(queue, { showHidden: false, depth: null }))
// console.log("View Queue ", queue);