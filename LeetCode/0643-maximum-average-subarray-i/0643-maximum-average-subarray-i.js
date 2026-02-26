/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const len = nums.length;

  if (len < k) return 0;

  let sum = 0;

  for (let i = 0; i < k; ++i) sum += nums[i];

  let max = Number.MIN_SAFE_INTEGER; //

  for (let right = k - 1; right < len; ++right) {
    max = Math.max(max, sum);

    if (right !== len - 1) {
      sum -= nums[right - k + 1];
      sum += nums[right + 1];
    }
  }

  return max / k;
};
