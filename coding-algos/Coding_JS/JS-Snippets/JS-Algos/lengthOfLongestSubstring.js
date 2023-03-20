// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/*
Algorithm:
Use sliding window technique to capture longest substring.
1. Initialize left and right pointer to the start of the string. 
2. Loop through the string using the right pointer less than the length of the string.
3. Whenever any char is encountered add it to a hashtable for better searching. While adding use index as value and char as key.
4. For any char check if its present in the hashtable already, if yes then move the left one ahead to the first index of the char which is present already. left = toFind[curChar] + 1;
5. For any char calculate the maxLen by using Math.max(maxLen, right - left + 1). 
6. End of the loop return maxLen.
*/
const lengthOfLongestSubstring = function(s) {
  if (s.length === 1) {
    return 1;
  }
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let start = i, currentMaxLen = 0, toFind = {};
    for (let j = i; j < s.length; j++) {
      if (toFind[s[j]]) {
        break;
      } else {
        currentMaxLen = Math.max(currentMaxLen, j - start + 1);
      }
      toFind[s[j]] = true;
    }
    // console.log({currentMaxLen, maxLen});
    maxLen = Math.max(maxLen, currentMaxLen);
  }
  console.log('The longest substr is' + maxLen);
  return maxLen;
};

let s1 = "abcabcbb";
//lengthOfLongestSubstring(s1);

const lengthOfLongestSubstringOpt = function(s) {
  if (s.length === 1) {
    return 1;
  }
  let start = 0, currentMaxLen = 0, toFind = {}, j = 0;
  while (j < s.length) {
    let currentChar = s[j];
    if (toFind[currentChar] > -1) {
      let foundIndex = toFind[currentChar];
      start = foundIndex + 1;
      j = start;
      toFind = {};
    } else {
      currentMaxLen = Math.max(currentMaxLen, j - start + 1);
      toFind[currentChar] = j;
      j++;
    }
  }
  // console.log({currentMaxLen, maxLen});
  //  maxLen = Math.max(maxLen, currentMaxLen);

  console.log('The longest substr is' + currentMaxLen);
  return currentMaxLen;
};
const lengthOfLongestSubstringOptimal = function(s) {
  if (s.length <= 1) {
    return s.length;
  }
  let left = 0, right, maxLen = 0, toFind = {};
  for (right = 0; right < s.length; right++) {
    let curChar = s[right];
    let foundIndex = toFind[curChar];
    if (foundIndex >= left) {
      left = toFind[curChar] + 1;
    }
    maxLen = Math.max(maxLen, right - left + 1);
    toFind[curChar] = right;
  }
  // console.log({currentMaxLen, maxLen});
  //  maxLen = Math.max(maxLen, currentMaxLen);

  console.log('The longest substr is' + maxLen);
  return maxLen;
};
lengthOfLongestSubstringOptimal(s1);