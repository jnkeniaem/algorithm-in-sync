function solution(order) {
  let answer = 0;

  const convey = [...order].map((_, idx) => order.length - idx);

  const subConvey = [];
  for (let i = 0; i < order.length; ++i) {
    /*
    - subConvey && subConvey pop해서 top이 타겟 원하는 건지 확인
        - o -> answer++; continue
        - x ->
          - 다시 subConvey에 push하고,
          - 나올때가지 convey && topConvey !== target
            - convey pop
            - subConvey push
            if (topConvey === target)
            - continue
            else
            - return answer;

    */
    const target = order[i];
    let topSubConvey = 0;
    if (subConvey.length) {
      topSubConvey = subConvey.pop();

      if (topSubConvey === target) {
        answer++;
        continue;
      }
      subConvey.push(topSubConvey);
    }

    let topConvey = 0;
    if (convey.length) {
      topConvey = convey.pop();

      while (convey.length && topConvey !== target) {
        subConvey.push(topConvey);
        topConvey = convey.pop();
        /*
        원하는게 나올때까지 pop 해서 subConvey에 넣어주기
        */
      }
      if (topConvey === target) {
        // 원하는게 나온 것
        answer++;
        continue;
      }
    }
    return answer;
  }

  return answer;
}
