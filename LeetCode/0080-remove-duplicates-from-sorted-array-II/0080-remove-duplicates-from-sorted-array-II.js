/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len <= 2) return len;

  let ptr = 2;

  for (let i = 2; i < len; ++i) {
    const cur = nums[i];

    if (nums[ptr - 2] !== cur) nums[ptr++] = cur;
  }

  return ptr;
};