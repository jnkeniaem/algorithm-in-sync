/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let len = nums.length;
  if (len === 0) return [];

  const ranges = [];

  let [s, e] = [nums[0], nums[0]];

  for (let i = 1; i < len; ++i) {
    const num = nums[i];

    if (e + 1 !== num) {
      if (e - s) ranges.push(`${s}->${e}`);
      else ranges.push(`${s}`);
      s = num;
    }
    e = num;

    if (i === len - 1) {
      if (e - s) ranges.push(`${s}->${e}`);
      else ranges.push(`${s}`);
    }
  }

  return ranges;
};