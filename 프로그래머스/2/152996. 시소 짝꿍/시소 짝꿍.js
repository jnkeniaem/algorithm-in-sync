function solution(weights) {
  const map = new Map(); // 곱했을때 몸무게
  const map2 = new Map();
  const distances = [2, 3, 4];
  let answer = 0;

  for (let i = 0; i < weights.length; ++i) {
    let val = map2.get(weights[i]);
    if (val === undefined) val = 0;
    map2.set(weights[i], val + 1);

    for (const distance of distances) {
      let val = map.get(weights[i] * distance);
      if (val === undefined) map.set(weights[i] * distance, [i]);
      else val.push(i);
      // map.set(weights[i] * distance, [...val, i]);
      // map.set(weights[i] * distance, [...val, i]);
    }
  }

  for (const [weight, people] of map) {
    if (people.length > 1) {
      answer += (people.length * (people.length - 1)) / 2;
      // nC2
    }
  }

  for (const [weight, cnt] of map2) {
    if (cnt > 1) {
      // 중복 처리
      answer -= cnt * (cnt - 1);
      // nC2
    }
  }

  // 마지막에 중복 처리
  return answer;
}
