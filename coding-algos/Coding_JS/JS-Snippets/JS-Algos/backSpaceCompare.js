/* https://leetcode.com/problems/backspace-string-compare/submissions/
//Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Two solutions are there:
1st way is to 
1.write a function which converts the string into an array.
2. Traverse the string and whenever # is encountered pop an element from the array otherwise push it to the array.
3. Call this function with the 2 arrays separately and compare the 2 resultant arrays with each other.

2nd way is to 
1. Traverse the strings from backwards using separate pointers for string 1 and string 2.
2. If # is encountered initialize a backwards counter to 2 and while this counter is not equal to 0, decrement the pointer andthe counter by 1. If another # is encountered inside this while loop then again add 2 to the backwardcounter.
3. Repeat the same with second string.
4. Compare the string1[pointer1] with string2[pointer2] and if not equal return false.
5. End of the main while loop return true. Means every character has been compared and found equal.
*/

const str1 = "ab#c", str2 = "ad#c";
const str3 = "ab##", str4 = "c#d#";
const str5 = "xywrrmp", str6 = "xywrrmu#p";


const getEffectiveString = function (str) {
  let toReturn = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      toReturn.pop();     
    } else {
      toReturn.push(str[i]);
    }
  }

  return toReturn;
}

const backspaceCompare = function(s, t) {

  let first = getEffectiveString(s);
  let second = getEffectiveString(t);

  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;

};


const backspaceCompareMyWay = function(s, t) {

  let i = s.length - 1, j = t.length - 1;

  while (i >= 0 || j >= 0) {


    if (s[i] === '#') {
      let backSpaceCounter = 1;
      i--;
      while (backSpaceCounter > 0) {

        if (s[i] === '#') {
          backSpaceCounter++;
        } else {
          backSpaceCounter--;
        }
        i--;
        if (backSpaceCounter === 0) {
          if (s[i] === '#') {
            backSpaceCounter++;
            i--;
          }

        }
      }
    }
    if (t[j] === '#') {
      j--;
      let backSpaceCounter = 1;
      while (backSpaceCounter > 0) {
        if (t[j] === '#') {
          backSpaceCounter++;
        } else {
          backSpaceCounter--;
        }
        j--;
        if (backSpaceCounter === 0) {
          if (t[j] === '#') {
            backSpaceCounter++;
            j--;
          }

        }
      }
    }

    if (s[i] !== t[j]) {
      return false;
    }
    i--;
    j--;

  }
  return true;
};

const backspaceCompareOptimal = function(s, t) {

  let i = s.length - 1, j = t.length - 1;

  while (i >= 0 || j >= 0) {


    if (s[i] === '#') {
      let backSpaceCounter = 2;
      while (backSpaceCounter > 0) {
        i--;
        backSpaceCounter--;
        if (s[i] === '#') {
          backSpaceCounter += 2;
        }
      }
    }
    if (t[j] === '#') {

      let backSpaceCounter = 2;
      while (backSpaceCounter > 0) {
        j--;
        backSpaceCounter--;
        if (t[j] === '#') {
          backSpaceCounter += 2;
        }

      }
    }

    if (s[i] !== t[j]) {
      return false;
    }
    i--;
    j--;

  }
  return true;
};

console.log(`The result is ${backspaceCompareMyWay(str3, str4)}`);

console.log(`The result is ${backspaceCompareOptimal(str5, str6)}`);

console.log('backspaceCompare' + backspaceCompare(str1, str2));

console.log('backspaceCompare' + backspaceCompare(str3, str4));

