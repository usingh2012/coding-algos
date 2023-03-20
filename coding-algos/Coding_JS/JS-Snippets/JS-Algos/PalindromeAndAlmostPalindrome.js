
const isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  //console.log(s);
  
  //Way 1 : pointer from 2 ends::
//   let start = 0, end = s.length - 1;
//   while (start <= end) {
//     if (s[start] !== s[end])
//       return false;
//     start++;
//     end--;
//   }
//   return true;
  
  //Way 2 : pointer from middle::
  let middle = Math.floor(s.length / 2), left = middle - 1, right = middle;
  if(s.length%2 !== 0){
    left = right = middle;
  }
  while(left > -1 || right < s.length){
    if(s[left] !== s[right]){
      return false;
    }
    left--;
    right++;         
  }
  return true;  
};   

const palinString = "A man, a plan, a canal: Panama";
const p2 = 'abb'
console.log(isPalindrome(p2));

//check if palindrome by removing at most one character..
const almostPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (s.length <= 3) {
    return true;
  }
  let counter = 0,
    left = 0,
    right = s.length - 1,
    firstLeft,
    firstRight;

  while (left <= right) {
    if (s[left] !== s[right]) {
     
      //if left char is different than right, then 2 options are there,
      //Option 1, remove left char and check if its palindrome.. when counter = 0 block
      //Option 2, remove right char and check if its palidrome.. when counter = 1 block

      if (counter === 0) {
        firstLeft = left;
        firstRight = right;
        left++;
      } else if (counter === 1) {
        left = firstLeft;
        right = firstRight - 1;
      } else {
        return false;
      }
      counter++;
      continue;
    }
    right--;
    left++;
  }

  return true;
}

console.log(almostPalindrome("cbbcc"));