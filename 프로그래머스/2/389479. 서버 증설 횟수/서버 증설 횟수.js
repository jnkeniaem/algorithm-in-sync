function solution(players, m, k) {
  var answer = 0;
  const map = new Map();

  for (let j = 0; j < players.length; ++j) {
    if (map.size) {
      for (let [key, val] of map) {
        map.set(key, val - 1);

        if (val - 1 === 0) map.delete(key);
      }
    }
    // 각 서버의 운영 가능 시간--

    const targetServerNum = Math.floor(players[j] / m);
    let curServerNum = map.size;
    if (curServerNum < targetServerNum) {
      for (let l = 0; l < targetServerNum - curServerNum; ++l) {
        map.set(`${j}${l}`, k);
      }
      answer += targetServerNum - curServerNum;
    }
  }

  return answer;
}