function solution(today, terms, privacies) {
  var answer = [];
  const map = new Map();
  let [yCur, mCur, dCur] = today.split(".").map((elem) => Number(elem));

  for (const term of terms) {
    const termSplitted = term.split(" ");
    map.set(termSplitted[0], Number(termSplitted[1]));
  }
  // term을 맵에 넣기. 종류 : 유효기간

  for (let i = 0; i < privacies.length; ++i) {
    let [dateCollected, type] = privacies[i].split(" ");
    let validM = map.get(type);
    const [yToAdd, MToAdd] = [Math.floor(validM / 12), validM % 12];
    let [y, m, d] = dateCollected.split(".").map((elem) => Number(elem));
    y += yToAdd;
    m += MToAdd;
    if (m >= 13) {
      m -= 12;
      y += 1;
    }
    let [yExp, mExp, dExp] = [y, m, d - 1];
    if (dExp === 0) {
      if (mExp === 1) {
        mExp = 12;
        yExp -= 1;
      } else {
        dExp = 28;
        mExp -= 1;
      }
    }
    if (
      yExp > yCur ||
      (yExp === yCur && mExp > mCur) ||
      (yExp === yCur && mExp === mCur && dExp >= dCur)
    ) {
      // 만료되지 않았다면
      continue;
    } else answer.push(i + 1);
    // 현재 날짜랑 비교.
  }

  return answer;
}