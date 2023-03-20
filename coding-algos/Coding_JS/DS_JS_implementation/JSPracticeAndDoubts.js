// // function Test() {
// //   this.prop1 = "prop1";
// //   this.prop2 = "prop2";
// //   let newFunct = () => {
// //     console.log("inside newFunct");
// //     console.log('The value of this inside newFunct ' + this);
// //   };
// //   newFunct();
// //   this.newFunct2 = function() {
// //     console.log('inside newFunct2');
// //     console.log('The value of this is ' + this);
// //   }
// //   function newFunct3(){
// //     this.newProps = "newProps";
// //     console.log('THe value of this now should be newProps: : '+ this);
// //   }
// //   let newProps1 = new newFunct3();
// //   this.newProps3 = new newFunct3();
// // }

// // Test.prototype.view = function() {
// //   console.log('The value of this ' + this);
// //   console.log('prop1 : ' + this.prop1);
// //   console.log('prop2 : ' + this.prop2);
// // }


// // let newTest = new Test();
// // newTest.view();
// // newTest.newFunct2();
// // console.log('check the prop1 on newTest ' + newTest.prop1);


// // let newTest2 = Test();
// //newTest2.view(); // error that view doesnt exist on newTest2 because it was called without new keyword.

// //Now Test is called a constructor function in the sense that it creates a new object with properties which are in function with this keyword. in above example, when Test is invoked with new keyword, a object is created with prop1 and prop2 which in function Test is combined with this keyword. 
// //Why methods are added not inside function using this instead of using prototype.. Because if added in prototypes only one definition of the function will be shared by all the objects using the constructor function. If added in constructor function it will be added to each objects property separately. For ex. view only one copy will be present in memory but newFunct2 each time new is called a new copy will be created.


// //Doubt is function and this behave differently when it is called with new keyword.. 


// //Closure begins

// // Here to avoid cache variable to be attached to the global scope(windows variable) we have to use closure such that cache behaves as global object to memoizeAddTo80 function, meaning each time we call memoizeAddTo80 cache doesnt reset. So to do that, we move the logic of memoizeAddTo80 to an inner function and declare cache before that as how it is done below.. Now inner function will have access to cache variable as it is declared in outer function.
// // function memoizeAddTo80(n) { 
// //   let cache = {};
// //   return function(n) {
// //     if (n in cache) {
// //       return cache[n];
// //     } else {
// //       console.log('long time');
// //       const answer = n + 80;
// //       cache[n] = answer;
// //       return answer;
// //     }
// //   }
// // }

// // const memoized = memoizeAddTo80();
// // console.log(1, memoized(6))
// // console.log(2, memoized(6))

// //closure ends


// // let cache = {};
// // var climbStairs = function(n) {
// //     if(n in cache){
// //         return cache[n];
// //     }
// //     if(n <= 2){
// //         return n;
// //     }
// //     let result = climbStairs(n - 2) + climbStairs(n - 1);
// //     cache[n] = result;
// //     return result;
// // };

// // console.log(climbStairs(10));

// // const backspaceCompareMyWay = function(s, t) {

// //   let i = s.length - 1, j = t.length - 1;

// //   while (i >= 0 || j >= 0) {


// //     if (s[i] === '#') {
// //       let backSpaceCounter = 1;
// //       i--;
// //       while (backSpaceCounter > 0) {

// //         if (s[i] === '#') {
// //           backSpaceCounter++;
// //         } else {
// //           backSpaceCounter--;
// //         }
// //         i--;
// //         if (backSpaceCounter === 0) {
// //           if (s[i] === '#') {
// //             backSpaceCounter++;
// //             i--;
// //           }

// //         }
// //       }
// //     }
// //     if (t[j] === '#') {
// //       j--;
// //       let backSpaceCounter = 1;
// //       while (backSpaceCounter > 0) {
// //         if (t[j] === '#') {
// //           backSpaceCounter++;
// //         } else {
// //           backSpaceCounter--;
// //         }
// //         j--;
// //         if (backSpaceCounter === 0) {
// //           if (t[j] === '#') {
// //             backSpaceCounter++;
// //             j--;
// //           }

// //         }
// //       }
// //     }

// //     if (s[i] !== t[j]) {
// //       return false;
// //     }
// //     i--;
// //     j--;

// //   }
// //   return true;
// // };

// // const backspaceCompareOptimal = function(s, t) {

// //   let i = s.length - 1, j = t.length - 1;

// //   while (i >= 0 || j >= 0) {


// //     if (s[i] === '#') {
// //       let backSpaceCounter = 2;
// //       while (backSpaceCounter > 0) {
// //         i--;
// //         backSpaceCounter--;
// //         if (s[i] === '#') {
// //           backSpaceCounter += 2;
// //         }
// //       }
// //     }
// //     if (t[j] === '#') {

// //       let backSpaceCounter = 2;
// //       while (backSpaceCounter > 0) {
// //         j--;
// //         backSpaceCounter--;
// //         if (t[j] === '#') {
// //           backSpaceCounter += 2;
// //         }

// //       }
// //     }

// //     if (s[i] !== t[j]) {
// //       return false;
// //     }
// //     i--;
// //     j--;

// //   }
// //   return true;
// // };
// // let str1 = "xywrrmp",
// //   str2 = "xywrrmu#p";
// // //console.log(`The result is ${backspaceCompareMyWay(str1, str2)}`);
// // let str3 = "ab#c";
// // let str4 = "ad#c";
// // console.log(`The result is ${backspaceCompareOptimal(str3, str4)}`);

// // https://leetcode.com/problems/longest-substring-without-repeating-characters/
// // const lengthOfLongestSubstring = function(s) {
// //   if (s.length === 1) {
// //     return 1;
// //   }
// //   let maxLen = 0;
// //   for (let i = 0; i < s.length; i++) {
// //     let start = i, currentMaxLen = 0, toFind = {};
// //     for (let j = i; j < s.length; j++) {
// //       if (toFind[s[j]]) {
// //         break;
// //       } else {
// //         currentMaxLen = Math.max(currentMaxLen, j - start + 1);
// //       }
// //       toFind[s[j]] = true;
// //     }
// //     // console.log({currentMaxLen, maxLen});
// //     maxLen = Math.max(maxLen, currentMaxLen);
// //   }
// //   console.log('The longest substr is' + maxLen);
// //   return maxLen;
// // };

// // let s1 = "abcabcbb";
// // //lengthOfLongestSubstring(s1);

// // const lengthOfLongestSubstringOpt = function(s) {
// //   if (s.length === 1) {
// //     return 1;
// //   }
// //   let start = 0, currentMaxLen = 0, toFind = {}, j = 0;
// //   while (j < s.length) {
// //     let currentChar = s[j];
// //     if (toFind[currentChar] > -1) {
// //       let foundIndex = toFind[currentChar];
// //       start = foundIndex + 1;
// //       j = start;
// //       toFind = {};
// //     } else {
// //       currentMaxLen = Math.max(currentMaxLen, j - start + 1);
// //       toFind[currentChar] = j;
// //       j++;
// //     }
// //   }
// //   // console.log({currentMaxLen, maxLen});
// //   //  maxLen = Math.max(maxLen, currentMaxLen);

// //   console.log('The longest substr is' + currentMaxLen);
// //   return currentMaxLen;
// // };
// // const lengthOfLongestSubstringOptimal = function(s) {
// //   if (s.length <= 1) {
// //     return s.length;
// //   }
// //   let left = 0, right, maxLen = 0, toFind = {};
// //   for (right = 0; right < s.length; right++) {
// //     let curChar = s[right];
// //     let foundIndex = toFind[curChar];
// //     if (foundIndex >= left) {
// //       left = toFind[curChar] + 1;
// //     }
// //     maxLen = Math.max(maxLen, right - left + 1);
// //     toFind[curChar] = right;
// //   }
// //   // console.log({currentMaxLen, maxLen});
// //   //  maxLen = Math.max(maxLen, currentMaxLen);

// //   console.log('The longest substr is' + maxLen);
// //   return maxLen;
// // };
// // lengthOfLongestSubstringOptimal(s1);

// //https://leetcode.com/problems/valid-palindrome/
// const isPalindrome = function(s) {
//   s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   //console.log(s);

//   //Way 1 : pointer from 2 ends::
//   //   let start = 0, end = s.length - 1;
//   //   while (start <= end) {
//   //     if (s[start] !== s[end])
//   //       return false;
//   //     start++;
//   //     end--;
//   //   }
//   //   return true;

//   //Way 2 : pointer from middle::
//   //   let middle = s.length / 2, left = middle - 1, right = middle;
//   //   if(middle%2 !== 0){
//   //     left = right = middle;
//   //   }
//   //   while(left > -1 || right < s.length){
//   //     if(s[left] !== s[right]){
//   //       return false;
//   //     }
//   //     left--;
//   //     right++;         
//   //   }
//   //   return true;  
//   // };   

//   // const palinString = "A man, a plan, a canal: Panama";
//   // console.log(isPalindrome(palinString));

//   // console.log("check");
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
  
  
  //   //F,C,E,B,G,H,D,A
  
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
      console.log(current)
      count++;
      if (count === 100) {
        return 'not found';
      }
    }
    return output;
  }
  
  const retVal = resolveDependencies(dependencies, 'A');
  console.log(`The returned val is ${retVal}`);
  //   console.log(resolveDependencies(dependencies, 'A'));
  