function solution(order) {
  let answer = 0;
  let curBox = 0;
  const subConveyer = [];

  for (const target of order) {
    while (curBox < target) {
      subConveyer.push(curBox);
      curBox++;
    }

    if (curBox === target) {
      answer++;
      curBox++;
      continue;
    }

    if (subConveyer.length && subConveyer[subConveyer.length - 1] === target) {
      subConveyer.pop();
      answer++;
    } else return answer;
  }
  // while (curBox < order.length) {}
  // 메인 컨베이어 벨트를 실제로 움직일 필요는 없다

  return answer;
}