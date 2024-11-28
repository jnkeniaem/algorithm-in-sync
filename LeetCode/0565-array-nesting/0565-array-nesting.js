/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  const visited = new Set();
  let maxLen = 0;

  const dfs = (num, len) => {
    if (visited.has(num)) return len;
    visited.add(num);
    len++;
    return dfs(nums[num], len);
  };

  for (let i = 0; i < nums.length; i++) {
    if (!visited.has(nums[i])) {
      maxLen = Math.max(maxLen, dfs(nums[i], 0));
    }
  }

  return maxLen;
};
