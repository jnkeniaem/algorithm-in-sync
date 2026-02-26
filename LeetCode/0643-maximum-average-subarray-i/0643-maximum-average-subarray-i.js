/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const len = nums.length;
  let sum = 0;

  for (let i = 0; i < k; ++i) sum += nums[i];

  let max = sum;

  for (let right = k; right < len; ++right) {
    sum += nums[right];
    sum -= nums[right - k];
    max = Math.max(max, sum);
  }

  return max / k;
};
