class QElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    let contains = false;
    let qElement = new QElement(data, priority);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > priority) {
        this.items.splice(i, 0, qElement);
        contains = true;
        break;
      }
    }
    if (!contains) {
      this.items.push(qElement);
    }
  }

  /**
   * return the least priority element and delete the element
   */
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No element in queue";
    }
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  ChangePriority(data, priority) {
    let exists = false;
    let qElement = new QElement(data, priority);
    let priorityChanged = false;
    for (const [index, item] of this.items.entries()) {
      if (item.priority > priority) {
        this.items.splice(index, 0, qElement);
        priorityChanged = true;
      }
      if (item.data === data) {
        this.items.splice(index, 1);
        exists = true;
      }
      if (priorityChanged && exists)
        break;
    }
    if (!priorityChanged)
      this.items.push(qElement);
    if (!exists) {
      return "Element does not exists";
    }
  }

  printPQueue() {
    let str = "";
    this.items.forEach((item) => { str += item.data + " "; });
    console.log(str);
  }
}

// // creating object for queue classs 
// var priorityQueue = new PriorityQueue();

// // testing isEmpty and front on an empty queue 
// // return true 
// console.log(priorityQueue.isEmpty());

// // returns "true" 
// console.log(priorityQueue.front());

// // adding elements to the queue 
// priorityQueue.enqueue("Sumit", 2);
// priorityQueue.enqueue("Gourav", 1);
// priorityQueue.enqueue("Piyush", 1);
// priorityQueue.enqueue("Sunny", 2);
// priorityQueue.enqueue("Sheru", 3);

// // prints [Gourav Piyush Sumit Sunny Sheru] 
// priorityQueue.printPQueue();

// // prints Gourav 
// console.log(priorityQueue.front().data);

// // pritns Sheru 
// console.log(priorityQueue.rear().data);

// // removes Gouurav 
// // priorityQueue contains 
// // [Piyush Sumit Sunny Sheru] 
// priorityQueue.dequeue().data;

// // Adding another element to the queue 
// priorityQueue.enqueue("Sunil", 2);

// // prints [Piyush Sumit Sunny Sunil Sheru] 
// priorityQueue.printPQueue();

// //change priority
// priorityQueue.ChangePriority("Sumit", 4);

// // prints [Piyush Sumit Sunny Sunil Sheru] 
// priorityQueue.printPQueue();


module.exports = new PriorityQueue;