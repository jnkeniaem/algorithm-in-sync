/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLen = 100001;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; ++right) {
    sum += nums[right];

    while (target <= sum) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === 100001 ? 0 : minLen;
};
