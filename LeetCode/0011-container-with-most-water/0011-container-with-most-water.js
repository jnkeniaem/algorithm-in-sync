/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  const n = height.length;

  while (left < n - 1) {
    for (let right = left + 1; right < n; ++right) {
      let curH = Math.min(height[left], height[right]);
      // 넓이
      max = Math.max(max, (right - left) * curH);
    }

    // left 이동시키기
    let newLeft = left + 1;

    while (height[left] >= height[newLeft]) newLeft++;

    if (newLeft === left) break;
    left = newLeft;
  }

  return max;
};
