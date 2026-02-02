/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let len = nums.length;
  if (len === 0) return [];
  if (len === 1) return [`${nums[0]}`];

  const ranges = [];
  let [s, e] = [nums[0], nums[0]];

  const addRange = () => {
    const range = e - s ? `${s}->${e}` : `${s}`;
    ranges.push(range);
  };

  for (let i = 1; i < len; ++i) {
    const num = nums[i];

    if (e + 1 !== num) {
      addRange();
      s = num;
    }
    e = num;
  }

  addRange();

  return ranges;
};