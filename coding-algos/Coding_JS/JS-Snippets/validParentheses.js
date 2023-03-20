/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
     let outPutStack = [];
     let matchers = {
        "(" : ")",
         "[": "]",
         "{": "}",
     }
     for (let i = 0; i < s.length; i++){
         let sizeOfStack = outPutStack.length - 1;
         let lastValueInStack = outPutStack[sizeOfStack];
         if (matchers[lastValueInStack] === s[i]) {
             outPutStack.pop();
         } else {
             outPutStack.push(s[i]);
         }
     
     }

     if (outPutStack.length === 0) {
         return true;
     } else {
         return false;
     }
};