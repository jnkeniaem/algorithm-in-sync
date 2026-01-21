/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const elem = nums[i];
    const pair = target - elem;
    const pairIdx = map.get(pair);

    if (pairIdx !== undefined) return [i, pairIdx];
    map.set(elem, i);
  }
};