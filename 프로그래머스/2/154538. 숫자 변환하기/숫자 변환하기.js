function solution(x, y, n) {
  const q = [[x]];
  let level = 0;

  while (q.length) {
    const operationResults = q.pop();
    // operationResults는 같은 레벨의 x 값들
    // 같은 레벨끼리 배열로 감싸져있겠지
    const ary = []; // 같은 레벨의 x 값들 모아서 q로 push하는
    for (const res of operationResults) {
      if (res > y) continue;
      // 다음 x로 넘어가기
      if (res === y) return level;
      if (res + n === y || res * 2 === y || res * 3 === y) return level + 1;
      // q.push([res + n, res * 2, res * 3]);
      ary.push(res + n, res * 2, res * 3);
      // 연산 결과 중복 방지를 위해 set을 사용할까?
    }
    // if (ary.length) q.push(ary);
    const set = new Set(ary);
    // if (ary.length) q.push(ary);
    if (ary.length) q.push([...set]);
    level++;
  }

  return -1;
}