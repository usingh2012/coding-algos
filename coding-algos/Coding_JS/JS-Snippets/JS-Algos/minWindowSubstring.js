/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let right = 0,
      left = -1;
  let tMap = {};
  let minSub = Number.POSITIVE_INFINITY;
  let minSubstr = "";

  if (s.length === 0 || t.length === 0) {
      return minSubstr;
  }

  for (let i = 0; i < t.length; i++) {
      if (tMap[t[i]] === undefined) {
          tMap[t[i]] = 1;
      } else {
          tMap[t[i]] = tMap[t[i]] + 1;
      }
  }

  let sMap = {},
      count = 0;
  while (right < s.length) {
      let currentChar = s[right];
      if (tMap[currentChar]) {
          if (left === -1) {
              left = right;
          } //on first match
          if (sMap[currentChar] === undefined) {
              sMap[currentChar] = 1;
          } else {
              sMap[currentChar] = sMap[currentChar] + 1;
          }
          if (sMap[currentChar] <= tMap[currentChar]) {
              count++;
          }
          if (count === t.length) {
              let currentSubLength = right - left + 1;
              if (currentSubLength < minSub) {
                  minSub = currentSubLength;
                  minSubstr = s.substring(left, right + 1);
              }
                           
              break;
          }

      }
      right++;
  }

  while (right < s.length && left < s.length) {
      let currentChar = s[left];
      if (tMap[currentChar]) {
          sMap[currentChar] = sMap[currentChar] - 1;

          if (sMap[currentChar] < tMap[currentChar]) {
             let currentSubLength = right - left + 1;
              if (currentSubLength < minSub) {
                  minSub = currentSubLength;
                  minSubstr = s.substring(left, right + 1);
              }
              right++;
              while (right < s.length) {
                  let rightCurrentChar = s[right];
                  if (tMap[rightCurrentChar]) {
                      sMap[rightCurrentChar] = sMap[rightCurrentChar] + 1;
                  }
                  if (s[right] === currentChar) {                       
                      break;
                  }
                  right++;
              }
          }
      }
      left++;
  }

  return minSubstr;
};