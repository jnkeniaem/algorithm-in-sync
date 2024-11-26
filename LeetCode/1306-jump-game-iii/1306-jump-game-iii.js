/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let ret = false;
    if (arr.indexOf(0) == -1)
        return ret;
    let visited = new Array(arr.length + 1).fill(false);
    let q = [start];
    // let cur = 0;
    while (q.length) {
    // while (cur <= q.length -1) {
        let front = q.shift();
        // let front = q[cur];
        if (arr[front] == 0)
            return true;
        visited[front] = true;
        let [forward, backward] = [front - arr[front], front + arr[front]]
        if (!visited[forward] && forward >= 0)
            q.push(forward);
        if (!visited[backward] && backward < arr.length)
            q.push(backward);
        // cur++;
    }

    return false;
};