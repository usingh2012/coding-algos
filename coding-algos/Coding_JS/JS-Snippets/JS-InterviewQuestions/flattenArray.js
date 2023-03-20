// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  /**
   * Iterative approach starts
   */
  // let counter = 0;
  // while (counter < depth) {
  //   let newArr = [];
  //   let nestedArray = false;
  //   for (let i = 0; i < arr.length; i++) {
  //     let current = arr[i];
  //     if(Array.isArray(current)){
  //       nestedArray = true;
  //       current.forEach( (values) => {
  //         newArr.push(values);
  //       })
  //     }else{
  //       newArr.push(current);
  //     }
  //   }
  //   if(!nestedArray){
  //     return arr;
  //   }
  //   arr = newArr;
  //   counter++
  // }
  //Iterative approach ends here

  //Recursive approach starts
  let newArr = [];
  let nestedArray = false;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (Array.isArray(current)) {
      nestedArray = true;
      current.forEach((values) => {
        newArr.push(values);
      });
    } else {
      newArr.push(current);
    }
  }
  return newArr;

  //Recursive approach ends
  console.log(arr);
  return arr;
}

const arr = [1, [2], [3, [4]]];

flat(arr, 2);
