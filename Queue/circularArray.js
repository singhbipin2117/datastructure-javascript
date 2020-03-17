class circularArrayQueue {
    constructor() {
        this.front;
        this.rear;
        this.capacity = 0;
        this.blankArray = null;
    }
}

class createQueue {
    constructor(capacity = null) {
        if (!capacity) {
            throw "Intialize the queue size";
        }
        this.queue = new circularArrayQueue();
        this.queue.capacity = capacity;
        this.queue.front = -1;
        this.queue.rear = -1;
        this.queue.blankArray = Array.from(Array(capacity)).fill(0);
    }
    isEmptyQueue() {
        // return true if condition is true else return false
        return this.queue.front == -1;
    }
    isFullQueue() {
        // return true if condition is true else return false
        return this.queue.front === ((this.queue.rear + 1) % this.queue.capacity);
    }
    queueSize() {
        if (!this.queue.blankArray) {
            return 0;
        } else {
            return (this.queue.capacity - this.queue.front + this.queue.rear + 1) % this.queue.capacity;
        }
    }
    enQueue(value) {
        if (this.isFullQueue()) {
            throw "Queue is full";
        } else {
            this.queue.rear = (this.queue.rear + 1) % this.queue.capacity;
            this.queue.blankArray[this.queue.rear] = value;
            if (this.queue.front === -1) {
                this.queue.front = this.queue.rear;
            }
        }
    }
    deQueue() {
        let data = 0;
        if (this.isEmptyQueue()) {
            return data;
        } else {
            data = this.queue.blankArray[this.queue.front];
            if (this.queue.front === this.queue.rear) {
                this.front.queue = this.queue.rear = -1;
            } else {
                this.queue.front = (this.queue.front + 1) % this.queue.capacity;
            }
        }
        return data;
    }
    deleteQueue() {
        this.queue.capacity = 0;
        this.queue.front = -1;
        this.queue.rear = -1;
        this.queue.blankArray = [];
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


// check isFullQueue or not
isFull = queue.isFullQueue();
console.log("Check queue is full or not ", isFull);


// return queueSize
qSize = queue.queueSize();
console.log("Queue Size", qSize);


// Delete queue
deleteQ = queue.deleteQueue();
console.log("Delete Queue", deleteQ);

console.log("View Queue ", queue);