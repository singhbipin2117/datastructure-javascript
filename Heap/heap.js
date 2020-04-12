class Heap {
  constructor(heap_type) {
    this.data = [];
    this.heapType = heap_type;
  }

  Parent(i) {
    if (i > this.data.length || i < 0)
      return -1;
    return Math.ceil(i - 1 / 2)
  }

  LeftChild(i) {
    let left = 2 * i + 1;
    if (left > this.data.length)
      return -1;
    return left;
  }

  RightChild(i) {
    let right = 2 * i + 1;
    if (right > this.data.length)
      return -1;
    return right;
  }

  GetMaximum() {
    if (this.data.length === 0)
      return -1
    return this.data[0];
  }

  GetMinimum() {
    if (this.data.length === 0)
      return -1
    return this.data[this.data.length - 1];
  }

  // #heapifying the element at location i
  PrelocateDown(i) {
    let l, r, max, temp;
    l = this.LeftChild(i);
    r = this.RightChild(i);
    if (l !== -1 && this.data[l] > this.data[i])
      max = l;
    else
      max = i;
    if (r !== -1 && this.data[r] > this.data[max])
      max = r
    if (max !== i) {
      // swap the element
      temp = this.data[i];
      this.data[i] = this.data[max];
      this.data[max] = temp;
    }
    this.PrelocateDown(max);
  }

  DeleteMax() {
    let element;
    if (this.data.length == 0)
      return -1
    element = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.PrelocateDown(0);
    return element;
  }

  DeleteElement(i) {
    let element;
    if (this.data.length == 0)
      return -1
    element = this.data[i];
    this.data[i] = this.data[this.data.length - 1];
    this.PrelocateDown(i);
    return element;
  }

  Insert(data) {
    let i = this.data.length;
    while (i >= 0 && data > this.data[Math.floor(i - 1 / 2)]) {
      this.data[i] = this.data[Math.floor(i - 1 / 2)];
      i = Math.floor(i - 1 / 2);
    }
    this.data[i] = data;
  }

  Destroy() {
    this.data = [];
  }
}

const heap = new Heap("max_heap");

console.log(heap.Parent(2))
console.log(heap);