/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // const set = new Set(nums);
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const elem = nums[i];
    if (map.has(elem) && elem * 2 === target) return [i, map.get(elem)];
    map.set(elem, i);
  }

  for (let i = 0; i < nums.length; ++i) {
    const elem = nums[i];
    const pair = target - elem;

    if (elem !== pair && map.has(pair)) return [i, map.get(pair)];
  }
};