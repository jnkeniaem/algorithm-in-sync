/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let max = 0;

  while (left !== right) {
    const leftH = height[left];
    const rightH = height[right];
    const h = Math.min(leftH, rightH);
    const w = right - left;

    max = Math.max(max, w * h);

    if (leftH <= rightH) left++;
    else right--;
  }

  return max;
};
