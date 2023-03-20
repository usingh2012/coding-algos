//https://leetcode.com/problems/repeated-dna-sequences/
/**
 * @param {string} s
 * @param k - number of characters
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s, k) {
  let previous = s.substring(0, k),
    seen = new Map(),
    result = [];
  seen.set(previous, 1);
  for (let i = k; i < s.length; i++) {
    let currentSubString = previous.substring(1) + s[i];
    let getCurrentFromSeen = seen.get(currentSubString);
    if (getCurrentFromSeen === undefined) {
      seen.set(currentSubString, 1);
    } else if (getCurrentFromSeen === 1) {
      result.push(currentSubString);
      seen.set(currentSubString, 2);
    }
    previous = currentSubString;
  }
  return result;
};

var findRepeatedDnaSequencesUsingRollingHash = function (s, k) {
  let mapping = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  let previousHash = 0,
    seen = new Map(),
    alpha = 4,
    result = [];

  for (let i = 0; i < s.length; i++) {
    if (i < k) {
      let currentPower = k - i - 1;
      previousHash += mapping[s[i]] * Math.pow(alpha, currentPower);
      if (currentPower === 0) {
        seen.set(previousHash, 1);
      }
      continue;
    }
    let toRemove = s[i - k];
    let currentHash =
      (previousHash - mapping[toRemove] * Math.pow(alpha, k - 1)) * alpha +
      mapping[s[i]];   
    let getCurrentFromSeen = seen.get(currentHash);
    if (getCurrentFromSeen === undefined) {
      seen.set(currentHash, 1);
    } else if (getCurrentFromSeen === 1) {
        let currentSubString = s.substring(i - k + 1, k);
      result.push(currentSubString);
      seen.set(currentHash, 2);
    }
    previousHash = currentHash;
  }
  return result;
};
