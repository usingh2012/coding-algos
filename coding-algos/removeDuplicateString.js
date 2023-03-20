/**
 * @param {string} str
 * @return {string}/problem/remove-duplicate-letters-in-a-string/discuss
 */
function smallestUniqueSubstr(str) {
  // your code here
  let strHashMap = new Map();
  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (strHashMap.has(currentChar)) {
      let indexOfCurrentChar = strHashMap.get(currentChar);
      let currentIndex = i;
      let found = false;
      while (currentIndex >= indexOfCurrentChar) {
        if (str[currentIndex] && str[currentIndex] < str[i]) {
          found = true;
          break;
        }
        currentIndex--;
      }
      if (found) {
        str[indexOfCurrentChar] = "";
        strHashMap.set(currentChar, i);
      } else {
        str[i] = "";
      }
    } else {
      strHashMap.set(currentChar, i);
    }
  }

  str = str.join("");
  console.log(str);
  return str;
}
smallestUniqueSubstr("xyzabcxyzabc");

//baceaced.
