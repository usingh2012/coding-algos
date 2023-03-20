//Predict the output
//Promise callbacks are pushed to macro queue which are given higher priorities than callback queue(setTimeout)

// setTimeout( function toPrint () {
//     console.log(1);
// }, 0)
// setTimeout( function toPrint2 () {
//     console.log(2);
// }, 1000)

// Promise.resolve().then( function(){
//  console.log(3);   
// }).then( function () {
//     console.log(6);
// })
// console.log(4);

//////////----------------- Another Question  --------------------------------////////
/// Implement a queue which will run your async functions max 3 at a time. If more then it will hold in a queue and return a promise/////////////////

function wait(secs) {
  return new Promise(function (resolve, reject) {
    let timing = 2;
    setTimeout(function waiting() {
      timing = secs > 2 ? 2 : secs;
      console.log(`waited ${secs} seconds`);
      resolve();
    }, timing * 1000);
  });
}


function createQueue() {
  const maxSize = 3;
  const funcQueue = [];
  let currentCounter = 0;
    function runner(resolve, args) {
      currentCounter++;
      wait(args).then(function (resp) {
        resolve(resp);
        currentCounter--;
        if (currentCounter < maxSize && funcQueue.length) {
          let funcQueueParams = funcQueue[0];
            funcQueue.shift();
          runner(funcQueueParams.resolve, funcQueueParams.args);
          
        }
      });
    }
  return function (args) {
    return new Promise((resolve, reject) => {
      if (currentCounter < 3) {
        runner(resolve, args);
      } else {
        console.log("Please wait ..."); 
        funcQueue.push({    
          resolve,
          args,
        });
      }
    });
  };
}

const funcRunner = createQueue();

for (let i = 0; i < 5; i++) {
  funcRunner(i);
}

///////////////////////////////////////////-------------- Queue function runner implementation ends --------------------------/////////////////////////////////////////////////////