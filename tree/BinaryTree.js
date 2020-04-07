```
Binary tee is a tree data structure where left node value is always minimum as compared to right node.

This is class based Binary tree implementation.

Methods:
1) insert
2) remove
3) findMinNode
4) getRootNode
5) inOrder
6) preOrder
7) postOrder
8) search
7) levelOrder
```
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null)
        root.left = newNode;
      else
        this.insertNode(root.left, newNode);
    } else {
      if (root.right === null)
        root.right = newNode;
      else
        this.insertNode(root.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(root, data) {
    if (root == null)
      return null;
    if (data < root.data) {
      root.left = this.removeNode(root.let, data);
      return root;

    } else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
      return root;
    } else {
      if (root.let === null && root.right === null) {
        root = null;
        return root;
      }
      if (root.left == null) {
        root = root.right;
        return root;
      }
      if (root.right == null) {
        root = root.left;
        return root;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;

    }
  }

  findMinNode(root) {
    if (root.left === null) {
      return node;
    }
    return this.findMinNode(root.left);
  }

  getRootNode() {
    return this.root;
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.inorder(node.left);
      this.inorder(node.right);
      console.log(node.data);
    }
  }

  levelOrder(node) {
    let listOfNode = [];
    if (!root)
      return null;
    listOfNode.push(node);
    while (listOfNode.length > 0) {
      let temp = listOfNode.shift();
      console.log(temp.data);
      if (temp.left)
        listOfNode.push(temp.left);
      if (temp.right)
        listOfNode.push(temp.right);
    }
  }

  search(node, data) {
    // if trees is empty return null 
    if (node === null)
      return null;
    else if (data < node.data)
      return this.search(node.left, data);
    else if (data > node.data)
      return this.search(node.right, data);
    else
      return node;
  }
}

// create an objet of binary tree
const bst = new BinarySearchTree;

// Inserting nodes to the BinarySearchTree 
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

// root node
const root = bst.getRootNode();
// inorder traversal
bst.inOrder(root);
// pre order traversal
bst.preOrder(root);
// post order traversal
bst.postOrder(root);
// level order traversal
bst.levelOrder(root);
console.log(bst);