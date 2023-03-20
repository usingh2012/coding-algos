//arr will always be sorted..
const countUniqueValues = (arr) => {    
    let count = 0, i = 0;
    while (i < arr.length){
        let j = i + 1;
        while( j < arr.length && arr[i] === arr[j]) {
            j++;
        }
        i = j;
        count++;
    }
    return count;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
