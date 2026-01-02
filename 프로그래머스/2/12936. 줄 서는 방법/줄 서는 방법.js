function solution(n, k) {
  const permutation = [];
  const visited = new Array(n).fill(false);
  const answer = [];
  const people = new Array(n).fill(0).map((_, idx) => idx + 1);
  const getFactorial = (num) => {
    let factorial = 1;

    for (let i = num; i >= 1; --i) factorial *= i;

    return factorial;
  };
  /*
5 = 3! * 0 + 2! * 2 + 1! * 1
// 1 2 3 4
// 2 3 4
// 2 3
// 3
// 1 4 2 3
6 = 3! * 0 + 2! * 2 + 1! * 2
10 = 3! * 1 + 2! * 1 + 1! * 2
// 1 2 3 4
// 1 3 4
// 1 4
// 1
// 2 3 4 1
*/

  let toSubstract = k;
  for (let i = n - 1; i > 1; --i) {
    const quota = Math.floor((toSubstract - 1) / getFactorial(i));
    const person = people[quota];
    people.splice(quota, 1);
    // answer.push(quota + 1); // (quota + 1)번째 그룹
    answer.push(person); // (quota + 1)번째 그룹
    toSubstract -= getFactorial(i) * quota;
  }

  answer.push(people[toSubstract - 1]);
  people.splice(toSubstract - 1, 1);
  answer.push(people[0]);

  return answer;
}