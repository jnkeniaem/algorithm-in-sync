/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  if (arr.indexOf(0) == -1) return false;
  let visited = new Array(arr.length + 1).fill(false);
  let q = [start];

  while (q.length) {
    let front = q.shift();
    if (arr[front] == 0) return true;

    visited[front] = true;
	
    let [forward, backward] = [front - arr[front], front + arr[front]];
    if (!visited[forward] && forward >= 0) q.push(forward);
    if (!visited[backward] && backward < arr.length) q.push(backward);
  }

  return false;
};
