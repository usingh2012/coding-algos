const adjacencyList = [[1, 3], [0], [3, 8], [0, 2, 4, 5], [3, 6], [3], [4, 7], [6], [2]];

// const visited = new Array(adjacencyList.length).fill(0).map( (val, index) => new Array(adjacencyList[index].length).fill(false));
// console.log(visited);

const visited = new Array(adjacencyList.length).fill(false);
function dfsRecursion(vertex) {

    if (visited[vertex]) {
        return;
    }
    let currentIndex = adjacencyList[vertex];
    console.log(vertex);
    visited[vertex] = true;
    for (let i = 0; i < adjacencyList[vertex].length; i++) {
        dfsRecursion(adjacencyList[vertex][i]);
    }
}

// dfsRecursion(0);



function bfs(adjacencyList, startVertex){

const visited = new Array(adjacencyList.length).fill(false);
    let traverseQ = [startVertex];
    while(traverseQ.length > 0){
        let currentIndex = traverseQ.shift();
        if(visited[currentIndex]){
            continue;
        }
        console.log(currentIndex);
        visited[currentIndex] = true;
        for(let i = 0; i < adjacencyList[currentIndex].length; i++){
            let current = adjacencyList[currentIndex][i];
            if(!visited[current]){
                traverseQ.push(current);
            }
        }
    }
    
    


}

bfs(adjacencyList, 0);