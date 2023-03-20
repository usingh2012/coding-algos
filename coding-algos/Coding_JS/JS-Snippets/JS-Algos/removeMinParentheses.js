/**
 * @param {string} s
 * @return {boolean}
 */
var removeMinParentheses = function (s) {
  let outPutStack = [];
  let matchers = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    let sizeOfStack = outPutStack.length - 1;
    let lastValueInStack = outPutStack[sizeOfStack]?.val ?? '';
    if (matchers[lastValueInStack] === s[i]) {
      outPutStack.pop();
    } else {
        if (s[i] === "(" || s[i] === ")") {
            outPutStack.push({
                val: s[i],
                index: i,
              });
        }    
    }
  }

  if (outPutStack.length === 0) {
    return s;
  } else {
      let indexObj = {};  
      for (let values of outPutStack) {
          let indexVal = values.index;
          indexObj[indexVal] = true;
      }
      let toReturn = '';
      for (let i = 0; i < s.length; i++){
          if (!indexObj[i]) {              
              toReturn = toReturn + s[i]
          }
      }
      return toReturn;
  }
};
