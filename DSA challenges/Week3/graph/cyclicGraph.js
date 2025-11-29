// Detect cycle in undirected graph using adjacency list
// graph: { node: [neighbour1, neighbour2, ...], ... }

function hasCycleUndirected(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);
    const neighbors = graph[node] || [];
    for (const nbr of neighbors) {
      if (!visited.has(nbr)) {
        if (dfs(nbr, node)) return true;
      } else if (nbr !== parent) {
        // visited neighbor that's not parent -> cycle
        return true;
      }
    }
    return false;
  }

  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
}

// Example (undirected)
// 1--2--3 and 2--4, plus 3--1 makes a cycle between 1-2-3
const ug1 = {
  1: [2,3],
  2: [1,3,4],
  3: [1,2],
  4: [2]
};
console.log(hasCycleUndirected(ug1)); // true

// Tree-like (no cycles)
const ug2 = {
  a: ['b', 'c'],
  b: ['a', 'd'],
  c: ['a'],
  d: ['b']
};
console.log(hasCycleUndirected(ug2)); // false
