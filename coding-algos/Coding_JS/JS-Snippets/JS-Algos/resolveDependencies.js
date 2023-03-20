let dependencies = {
  A: ["B", "C", "D"],
  B: ["C", "E", "F"],
  C: ["F"],
  D: ["G", "H"],
  G: [],
  H: [],
  E: [],
  F: [],
};

//Output should be   //   //F,C,E,B,G,H,D,A

function resolveDependencies(dependencies, startNode) {
  let output = [];
  let firstArr = dependencies[startNode],
    processingDone = [],
    current = [startNode,...firstArr];
  let count = 0
  while (current.length > 0) {
    let objKey = current[0];
    if(processingDone.indexOf(objKey) === -1){
       processingDone.push(objKey);  
    }else{
      let removedElem = current.shift();
      if (output.indexOf(removedElem) === -1) {
        output.push(removedElem);
      }
      continue;
    }
     
    if (output.indexOf(objKey) > -1) {
      current.shift();
      continue;
    }
    let firstVal = dependencies[objKey];
    if (firstVal.length === 0) {
      let removedElem = current.shift();
      if (output.indexOf(removedElem) === -1) {
        output.push(removedElem);
      }
      continue;

    }
    current = [...firstVal, ...current];
  }
  return output;
}

const retVal = resolveDependencies(dependencies, 'A');
console.log(`The returned val is ${retVal}`);