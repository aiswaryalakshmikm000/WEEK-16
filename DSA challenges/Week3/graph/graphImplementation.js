// All have the constant time complexities
// Unweighted, undirected graph  === {vertex1 :[], vertex2: [], vertex3: []}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  //O(1)
  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2); // not push as its not array.. its set
    this.adjacencyList[vertex2].add(vertex1);
  }

  //O(1) /// if yes then return true else return false like
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  //O(1)
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  // O(degree of v) time complexity depennds on the number of adjacentVertices
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // O(V + E) time complexity depennds on the number of adjacent Vertices and edges
  bfs(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbour of this.adjacencyList[vertex]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
  }

  // O(V + E) time complexity depennds on the number of adjacent Vertices and edges
  dfs(start, visited = new Set()) {
    if (!visited.has(start)) {
      visited.add(start);
      console.log(start);
    }

    for (let neighbour of this.adjacencyList[start]) {
      if (!visited.has(neighbour)) {
        this.dfs(neighbour, visited);
      }
    }
  }

  // O(V + E) time complexity depends on the number of adjacentVertices and edges
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");

graph.addEdges("A", "B"); // already doing addVertex
graph.addEdges("B", "C"); // already doing addVertex

graph.display();
// A --> B
// B --> A,C
// C --> B
console.log(graph.hasEdge("C", "B")); // true

graph.removeEdge("A", "B");
graph.display();
// A -->
// B --> C
// C --> B

graph.removeVertex("A");
graph.display();
// B --> C
// C --> B

graph.bfs("B");
// B
// C
graph.dfs("B");
// B
// C
