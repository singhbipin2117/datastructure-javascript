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

  addEdge(v, w) {
    this.AdjList.get(v).add(w);
    this.AdjList.get(w).add(v);
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

  bfs(startingNode) {
    let visited = [];
    let q = [];
    visited[startingNode] = true;
    q.push(startingNode);
    while (q.length) {
      let getQueueElement = q.shift();
      console.log(getQueueElement);
      let get_List = this.AdjList.get(getQueueElement);
      for (let neigh of get_List.values()) {
        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }

  dfs(startingNode) {
    let visited = [];

    this.DFSUtil(startingNode, visited);
  }

  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    let get_neighbours = this.AdjList.get(vert);
    for (let get_elem of get_neighbours) {
      if (!visited[get_elem])
        this.DFSUtil(get_elem, visited);
    }
  }

  //shortest path algorithms for un weighted graph
  UnWeightedShortestPath(vert) {
    let distance = [];
    distance[vert] = 0;

    let q = [];
    q.push(vert);
    while (q.length) {
      let v = q.shift();
      let get_neighbours = this.AdjList.get(v);
      for (let get_elem of get_neighbours) {
        console.log("get_elem", get_elem);
        if (!distance[get_elem] && distance[get_elem] != 0) {
          console.log(get_elem, distance[get_elem]);
          distance[get_elem] = distance[v] + 1;
          q.push(get_elem);
        }
      }
    }
    console.table(distance);
  }
  // shortest path in weighted graph
  dijkstras() {

  }
}

const g = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices 
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges 
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();

// Depth first search
console.log("DFS");
g.dfs('A');

// breadth first search
console.log("BFS");
g.bfs('A');

console.log("Unweighted shortest path");
g.UnWeightedShortestPath('A');