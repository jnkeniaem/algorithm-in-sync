/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let end1 = m + n - 1;
  let cur1 = m - 1;
  let cur2 = n - 1;

  if (n === 0) {
    // console.log(nums1);
    return;
  }
  if (m === 0) {
    for (let i = 0; i < n; ++i) {
      nums1[i] = nums2[i];
    }
    // console.log(nums1);
    return;
  }

  while (cur2 >= 0) {
    if (cur1 >= 0 && nums1[cur1] > nums2[cur2]) {
      nums1[end1] = nums1[cur1];
      cur1--;
    } else {
      nums1[end1] = nums2[cur2];
      cur2--;
    }
    end1--;
  }

  // console.log(nums1);
};