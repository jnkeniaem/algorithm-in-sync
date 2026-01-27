/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let end1 = m + n - 1;
  // let end2 = n - 1;
  let cur1 = m - 1;
  let cur2 = n - 1;

  if (n === 0) {
    // console.log(nums1);
    return;
  }
  if (m === 0) {
    // nums1 = nums2;
    // console.log(nums1);
    for (let i = 0; i < n; ++i) {
      nums1[i] = nums2[i];
    }
    return;
  }

  while (cur2 >= 0) {
    if (nums1[cur1] <= nums2[cur2]) {
      nums1[end1] = nums2[cur2];
      cur2--;
    } else {
      nums1[end1] = nums1[cur1];
      if (cur1 === 0) {
        nums1[cur1] = 0;
      } else cur1--;
      // nums1의 요소만 이동할뿐, 채워지지 않았다.
    }
    end1--;
  }
  /*
  - nums1 m-1, nums2 n-1 비교
    - nums2 ≥ nums1
        - nums2 요소를 nums1의 0중 맨 뒤에 위치 시키기
    - nums2 < nums1
        - nums1 요소를 nums1의 0중 맨 뒤에 위치 시키기
- 각 반복문마다 nums1, nums2 중 움직인 요소의 포인터 앞으로 땡기기
  */
  // console.log(nums1);
};