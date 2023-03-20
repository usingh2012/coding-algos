function minSubArraylen(target, nums) {
  // your code will replace this placeholder return statement
  if (target < 2) {
    return 1;
  }
  let minSize = Infinity,
    left = 0,
    right = 0,
    currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum >= target) {
      right = i;
      minSize = Math.min(minSize, right - left + 1);
      if (minSize === 1) {
        return 1;
      }
      break;
    }
  }
  if (currentSum < target) {
    return 0;
  }
  while (right < nums.length) {
    currentSum = currentSum - nums[left];
    left++;
    if (currentSum >= target) {
      minSize = Math.min(minSize, right - left + 1);
      if (minSize === 1) {
        return 1;
      }
    } else {
      right++;
      while (right < nums.length) {
        currentSum = currentSum + nums[right];
        if (currentSum >= target) {
          minSize = Math.min(minSize, right - left + 1);
          if (minSize === 1) {
            return 1;
          }
          break;
        }
        right++;
      }
    }
  }
  return minSize;
}
