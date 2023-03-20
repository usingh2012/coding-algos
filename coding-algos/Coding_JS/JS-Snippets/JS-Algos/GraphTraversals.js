const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
  ];
const graphTraversalsDFS = (adjList) => {
    const values = [], seen = {};
    dfsTraversal(adjList, 0, values, seen);
    dfsTraversalUsingStack(adjList, 0, values, seen);
    console.log(` DFS ${values}`);
    return values;
}

const graphTraversalsBFS = (adjList) => {
    const values = [], seen = {};
    bfsTraversalUsingStack(adjList, 0, values, seen);
    console.log(` BFS ${values}`);
    return values;
}

const dfsTraversal = (adjList, vertex, values, seen) => {
    if (seen[vertex]) {
        return;
    } 
    values.push(vertex);
    seen[vertex] = true;
    let connections = adjList[vertex];
    for (let connection of connections) {
        if (!seen[connection]) {           
            dfsTraversal(adjList, connection, values, seen);
        }
    }
}

const dfsTraversalUsingStack = (adjList, vertex, values, seen) => {
    let toIterateStack = [vertex];
    while (toIterateStack.length) {
        let currentVertex = toIterateStack.pop();         
        if (!seen[currentVertex]) {
            values.push(currentVertex);
            seen[currentVertex] = true;            
        } //Here we dont continue even if the currentvertex is already seen,
        //because the connections of the current vertex will be added to the stack in the end,
        //which can alter the order of traversal as we always take the last element of the stack
        //But its difficult to find any usecase for this,
        // where not continuing here makes any difference to the DFS.
        //In case of BFS we use queue and take the first element so there it doesnt matter
        let connections = adjList[currentVertex];       
        for (let connection of connections) {
            if (!seen[connection]) {
                toIterateStack.push(connection);
            }
        }
    }
}

const bfsTraversalUsingStack = (adjList, vertex, values, seen) => {
    let toIterateQ = [vertex];
    while (toIterateQ.length) {
        let currentVertex = toIterateQ.shift();
        if (!seen[currentVertex]) {
            values.push(currentVertex);
            seen[currentVertex] = true;            
        } else {
            continue;
         } 
        
        let connections = adjList[currentVertex];        
        for (let connection of connections) {
            if (!seen[connection]) {
                toIterateQ.push(connection);
            }
        }
    }
}

graphTraversalsDFS(adjacencyList);