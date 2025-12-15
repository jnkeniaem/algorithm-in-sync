function solution(weights) {
  const torqueMap = new Map();
  const weightMap = new Map();
  const distances = [2, 3, 4];
  let answer = 0;

  for (let i = 0; i < weights.length; ++i) {
    // let val = weightMap.get(weights[i]);
    // if (val === undefined) val = 0;
    // weightMap.set(weights[i], val + 1);
    weightMap.set(weights[i], (weightMap.get(weights[i]) || 0) + 1);

    for (const distance of distances) {
      // let val = torqueMap.get(weights[i] * distance);
      // if (val === undefined) {
      //   val = 0;
      // }
      // torqueMap.set(weights[i] * distance, val + 1);
      torqueMap.set(
        weights[i] * distance,
        (torqueMap.get(weights[i] * distance) || 0) + 1
      );
    }
  }

  for (const [weight, cnt] of torqueMap) {
    if (cnt > 1) {
      answer += (cnt * (cnt - 1)) / 2;
      // nC2
    }
  }

  for (const [weight, cnt] of weightMap) {
    if (cnt > 1) {
      // 중복 처리
      answer -= ((cnt * (cnt - 1)) / 2) * (distances.length - 1);
      // nC2
    }
  }

  // 마지막에 중복 처리
  return answer;
}