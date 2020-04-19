const pq = require('../PriorityQueue/priorityqueue');

// create a graph class
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // add vertex to the graph 
  addVertex(v) {
    this.AdjList.set(v, new Set());
  }

  addEdge(v, w, l) {
    this.AdjList.get(v).add([w, l]);
    this.AdjList.get(w).add([v, l]);
  }

  printGraph() {
    // get all the vertices 
    let get_keys = this.AdjList.keys();

    // iterate over the vertices 
    for (let i of get_keys) {
      // great the corresponding adjacency list 
      // for the vertex 
      let get_values = this.AdjList.get(i);
      let conc = "";

      // iterate over the adjacency list 
      // concatenate the values into a string 
      for (var j of get_values)
        conc += `${j}  `;

      // print the vertex and its adjacency list 
      console.log(`${i}   ->   ${conc}`);
    }
  }

  // shortest path in weighted graph
  Dijkstra(vert) {
    let distance = [];
    // get all the vertices 
    let get_keys = this.AdjList.keys();
    // iterate over the vertices 
    for (let i of get_keys) {
      distance[i] = -1;
    }
    distance[vert] = 0;
    pq.enqueue(vert, 0);
    while (!pq.isEmpty()) {
      let v = pq.dequeue();
      let get_neighbours = this.AdjList.get(v.data);
      for (let get_elem of get_neighbours) {
        let d = distance[v.data] + get_elem[1];
        if (distance[get_elem[0]] == -1) {
          distance[get_elem[0]] = d;
          pq.enqueue(get_elem[0], d);
        }
        if (distance[get_elem[0]] > d) {
          distance[get_elem[0]] = d;
          pq.ChangePriority(get_elem[0], d);
        }
      }
    }
    console.table(distance);
  }
}

const g = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// // adding vertices 
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// // adding edges 
g.addEdge('A', 'B', 2);
g.addEdge('A', 'D', 3);
g.addEdge('A', 'E', 4);
g.addEdge('B', 'C', 1);
g.addEdge('D', 'E', 3);
g.addEdge('E', 'F', 2);
g.addEdge('E', 'C', 4);
g.addEdge('C', 'F', 3);

g.printGraph();


console.log("Dijkstra shortest path");
g.Dijkstra('A');
