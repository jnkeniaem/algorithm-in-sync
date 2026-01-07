function solution(n) {
  const answer = [];

  const hanoi = (total, from, to) => {
    if (total === 1) {
      // 그냥 옮긴다.
      answer.push([from, to]);
      return;
    }
    const tmp = 6 - from - to;

    // 나머지를 가장 큰 원판을 방해하지 않는 곳으로 잠깐 옮긴다.
    hanoi(total - 1, from, tmp);
    // 가장 큰 원판을 3으로 옮긴다.
    hanoi(1, from, to); //
    // 임시 장소에 있던 원판들을 3으로 옮긴다.
    hanoi(total - 1, tmp, to); //
  };

  hanoi(n, 1, 3);

  return answer;
}