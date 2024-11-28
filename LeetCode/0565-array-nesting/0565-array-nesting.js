/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
     const visited = new Set();
    const dfs = (num, len) => {
        if(visited.has(num)) return len;
        visited.add(num);
        len++;
        return dfs(nums[num], len);
    }
    return nums.reduce((len, curr) => visited.has(curr) ? len : Math.max(dfs(curr,  0), len), 0);
};