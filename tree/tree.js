class Tree {
  constructor(value) {
    this.data = value;
    this.children = [];
  }
  add_child(child_node) {
    this.children.push(child_node);
  }
  remove_child(child_node) {
    let new_children = [];
    this.children.forEach(item => { item !== child_node ? new_children.push(item) : '' });
    this.children = new_children;

  }
  traverse() {
    let node_to_visit = [this];
    while (node_to_visit.length > 0) {
      let current_node = node_to_visit.shift();
      console.log(current_node.data);
      node_to_visit = [...node_to_visit, ...current_node.children];
    }
  }
}

// initialize tree
let tree = new Tree(0);

// add child
tree.add_child(new Tree(1));
tree.add_child(new Tree(2));
tree.add_child(new Tree(3));

const child_node_4 = new Tree(4);
const child_node_5 = new Tree(5);
tree.children[0].add_child(child_node_4);
tree.children[0].add_child(child_node_5);

tree.children[1].add_child(child_node_4);
tree.children[1].add_child(child_node_5);

// remove child
tree.children[0].remove_child(child_node_4);

tree.traverse()
// console.log(tree, tree.children[0].children);