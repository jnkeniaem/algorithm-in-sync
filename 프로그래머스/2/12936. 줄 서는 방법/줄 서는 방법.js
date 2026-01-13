function solution(n, k) {
  const permutation = [];
  const people = new Array(n).fill(0).map((_, idx) => idx + 1);
  const factorials = new Array(n + 1).fill(1); // factorials[2] = 2!

  for (let i = 2; i <= n; ++i) factorials[n] *= i;

  let cur = k;

  for (let i = n - 1; i >= 2; --i) {
    factorials[i] = Math.floor(factorials[i + 1] / (i + 1));

    const factorial = factorials[i];
    const quota = Math.floor((cur - 1) / factorial);

    if (quota) cur -= factorial * quota;
    permutation.push(people[quota]);
    people.splice(quota, 1);
  }

  permutation.push(people[cur - 1]);
  permutation.push(people[2 - cur]);

  return permutation;
}