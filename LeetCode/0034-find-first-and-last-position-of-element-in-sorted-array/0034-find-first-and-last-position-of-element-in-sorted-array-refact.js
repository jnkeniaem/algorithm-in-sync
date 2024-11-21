/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let ret = [-1, -1];
  if (!nums.length) return ret;

  let len = nums.length;
  let [start, end] = [0, len - 1];
  if (target < nums[start] || target > nums[end]) return ret;

  while (1) {
    if (start > end) return ret;

    let middle = Math.floor((start + end) / 2);

    if (target > nums[middle]) {
      start = middle + 1;
    } else if (target < nums[middle]) {
      end = middle - 1;
    } else {
      [start, end] = [middle, middle];
      while (nums[start] == target) start--;
      while (nums[end] == target) end++;
      return [start + 1, end - 1];
    }
  }
};
