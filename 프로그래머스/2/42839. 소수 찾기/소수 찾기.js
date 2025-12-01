function solution(numbers) {
  let answer = 0;
  const set = new Set(); // 조각 조합 숫자들

  const visited = new Array(numbers.length).fill(false);

  const permutation = (cur, r) => {
    if (cur.length === r) {
      set.add(Number(cur.join("")));
      return;
    }

    for (let i = 0; i < numbers.length; ++i) {
      if (!visited[i]) {
        visited[i] = true;
        cur.push(numbers[i]);
        permutation(cur, r);
        cur.pop();
        visited[i] = false;
      }
    }
  };

  for (let i = 1; i <= numbers.length; ++i) {
    permutation([], i);
    // 순열 구하기
  }

  // 소수 판별

  const checkPrimeNumber = (num) => {
    if (num == 0 || num == 1) return false;
    for (let i = 2; i < num; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (const num of set) {
    // console.log(num);
    if (checkPrimeNumber(num)) answer++;
  }

  // console.log("set : ", set);
  return answer;
}