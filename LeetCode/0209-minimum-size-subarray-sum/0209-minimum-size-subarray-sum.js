/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLen = 100001;
  let left = 0;
  let right = 0;
  let sum = nums[0];
  const len = nums.length;

  while (left < len && right < len && left <= right) {
    if (target <= sum) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    } else {
      right++;
      sum += nums[right];
    }
  }

  return minLen === 100001 ? 0 : minLen;
};

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums)); // 2

((target = 4), (nums = [1, 4, 4]));
console.log(minSubArrayLen(target, nums)); // 1

((target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(target, nums)); // 0
