function solution(n, k) {
  const permutation = [];
  const people = new Array(n).fill(0).map((_, idx) => idx + 1);

  const getFactorial = (num) => {
    let factorial = 1;

    for (let i = 2; i <= num; ++i) factorial *= i;

    return factorial;
  };

  let cur = k;

  for (let i = n - 1; i >= 2; --i) {
    const factorial = getFactorial(i);
    const quota = Math.floor((cur - 1) / factorial);
    if (quota) cur -= factorial * quota;
    permutation.push(people[quota]);
    people.splice(quota, 1);
  }

  permutation.push(people[cur - 1]);
  permutation.push(people[2 - cur]);

  // people.splice(cur - 1, 1);
  // permutation.push(people[0]);

  return permutation;
}