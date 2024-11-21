/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ret = [-1, -1];
    if (!nums.length)
        return ret;
    let len = nums.length;
    let start = 0;
    let end = len -1;
    if (target < nums[start] || target > nums[end])
        return ret;
    
    while (1) {
        if (start > end) return ret;

        let middle = Math.floor((start + end) / 2);
        // console.log(start, end, middle);

        if (target > nums[middle]) {
            start = middle + 1;
        }
        else if (target < nums[middle]) {
            end = middle -1;
        }
        else {
            start = middle;
            end = middle;
            while (nums[start] == target)
                start--;
            while (nums[end] == target)
                end++;
            // console.log(start + 1, end -1);
            return [start + 1, end -1];
            // 양쪽
            // 왼쪽
            // 오른쪽
        }
        // start, end 다 유효한지 범위 안에 있는지 확인
        // start >= end 일때 finish

    }
};