function solution(queue1, queue2) {
  let answer = 0;
  let [q1Sum, q2Sum] = [0, 0];
  let totalElemCnt = 0;

  queue1.map((elem) => {
    q1Sum += elem;
    totalElemCnt++;
  });
  queue2.map((elem) => {
    q2Sum += elem;
    totalElemCnt++;
  });

  const q1Copy = [...queue1];
  const q2Copy = [...queue2];
  let total = q1Sum + q2Sum;

  let [q1Front, q2Front] = [0, 0];

  if (
    total % 2 ||
    queue1.find((elem) => elem > total / 2) ||
    queue2.find((elem) => elem > total / 2)
  )
    return -1;

  const checkOverlap = (q) => {
    return history.has(q) ? true : false;
  }; // history에 있는 배열이랑 겹치는 지 확인
  const history = new Set();
  history.add(queue1.join());
  history.add(queue2.join());

  while (1) {
    if (q1Sum > 0 && q2Sum > 0) {
      if (q1Sum > q2Sum) {
        q1Sum -= q2Sum;
        q2Sum = 0;
      } else {
        q2Sum -= q1Sum;
        q1Sum = 0;
      }
    }
    // 2 합이 다 > 0 -> 작은거 기준으로 0으로 맞춰주기

    if (q1Sum === q2Sum) return answer;
    else if (q1Sum > q2Sum) {
      // q1 pop, q2 insert
      q1Sum -= q1Copy[q1Front];
      q2Sum += q1Copy[q1Front];
      q2Copy.push(q1Copy[q1Front]);
      q1Front++;
    } else {
      q2Sum -= q2Copy[q2Front];
      q1Sum += q2Copy[q2Front];
      q1Copy.push(q2Copy[q2Front]);
      q2Front++;
    }

    answer++;
    if (q1Sum === q2Sum) return answer;

    if (answer >= totalElemCnt) {
      if (
        checkOverlap(q1Copy.slice(q1Front).join()) &&
        checkOverlap(q2Copy.slice(q2Front).join())
      )
        return -1;
      history.add(q1Copy.slice(q1Front).join());
      history.add(q2Copy.slice(q2Front).join());
      // 넣기 전에 겹치는지 확인
      let pass1 = false;
      let pass2 = false;

      if (queue1[0] === q1Copy[q1Front]) {
        for (let i = 0; i < queue1.length; ++i) {
          if (queue1[i] !== q1Copy[q1Front + i]) {
            pass1 = true;
            break;
          }
        }
      }

      if (queue1[0] === q1Copy[q1Front]) {
        for (let i = 0; i < queue2.length; ++i) {
          if (queue2[i] !== q1Copy[q1Front + i]) {
            pass1 = true;
            break;
          }
        }
      }

      if (queue1[0] === q2Copy[q2Front]) {
        for (let i = 0; i < queue1.length; ++i) {
          if (queue1[i] !== q2Copy[q2Front + i]) {
            pass2 = true;
            break;
          }
        }
      }

      if (queue2[0] === q2Copy[q2Front]) {
        for (let i = q2Front; i < queue2.length; ++i) {
          if (queue2[i] !== q2Copy[q2Front + i]) {
            pass2 = true;
            break;
          }
        }
      }

      if (pass1 === false && pass2 === false) {
        return -1;
      }
    }
  }

  return answer;
}