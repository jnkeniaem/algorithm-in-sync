function solution(n, k) {
  const permutation = [];
  const people = new Array(n).fill(0).map((_, idx) => idx + 1);
  const factorials = new Array(n + 1).fill(1);
  let cur = k - 1;

  factorials.reduce((acc, _, idx, ary) => {
    const factorial = acc * idx;
    ary[idx] = factorial;
    return factorial;
  }); // factorials[n] = n!

  for (let i = n - 1; i >= 0; --i) {
    const factorial = factorials[i];
    const quota = Math.floor(cur / factorial);

    cur = cur % factorial;
    permutation.push(people[quota]);
    people.splice(quota, 1);
  }

  return permutation;
}