function solution(n) {
  const answer = [];

  const hanoi = (total, from, to) => {
    if (total === 1) {
      answer.push([from, to]);
      return;
    }

    const tmp = 6 - from - to;

    hanoi(total - 1, from, tmp);
    hanoi(1, from, to);
    hanoi(total - 1, tmp, to);
  };

  hanoi(n, 1, 3);

  return answer;
}