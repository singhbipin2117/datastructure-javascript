const util = require('util')
function Node(value) {
    this.data = value;
    this.next = null;
}


class linkedList {
    head;
    constructor() {
        this.head = null
    }

    add(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            this.find_node().next = new Node(value);
        }
    }

    find_node() {
        if (!this.head.next) {
            return this.head;
        } else {
            let node = this.head.next;
            while (node) {
                if (node.next) {
                    node = node.next;
                } else {
                    return node
                }
            }
        }
    }

    print() {
        console.log(this.head.data);
        if (this.head.next) {
            let node = this.head.next;
            while (node) {
                console.log(node.data);
                node = node.next;

            }
        }
    }
}


ll = new linkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

// ll.print()
console.log(util.inspect(ll, { showHidden: false, depth: null }))
// console.log(ll)