function solution(numbers) {
  let answer = "";
  const map = new Map(); // 맨 앞 자리수 : []
  const ary = new Array(10).fill([]).map(() => new Array().fill([]));

  for (const num of numbers) {
    const str = num.toString();
    let val = map.get(str[0]);
    if (val === undefined) val = [];
    map.set(str[0], [...val, str]);
  }

  for (const [key, val] of map) {
    val.sort((x, y) => {
      if (x.length !== y.length) {
        // x + y가 큰지 y + x가 큰지
        // Number(x + y) - Number(y + x)
        // > -> 순서 그대로
        //  < -> 순서 바뀌어야 함.
        if (Number(x + y) - Number(y + x) > 0) return -1;
        else return 1;
      } else return y - x;
      // 두번째 자리수부터 비교
    });

    ary[key].push(...val);

    // console.log(val);

    // val 대체 문자열로
  }

 for (let i = 9; i >= 0; --i) {
    if (ary[i].length) {
      // 붙이기
      if (i === 0 && answer.length === 0) {
        answer += "0";
      } else answer += ary[i].join("");
    }
  }
  /*
  - 가장 큰 자리의 수가 제일 큰거
    - 같은 숫자라면 → 그 다음 있는지 확인
        - 그 다음 둘다 있으면
            - 그 다음 숫자가 더 큰 거
        - 하나만 다음 숫자 있으면
            - 그 다음 숫자가 그 전 숫자보다 큰것
  */

  return answer;
}