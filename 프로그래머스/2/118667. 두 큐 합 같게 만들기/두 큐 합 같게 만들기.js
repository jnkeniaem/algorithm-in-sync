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
    // 2 합이 다 >0 -> 작은거 기준으로 0으로 맞춰주기

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

    if (answer >= 2 * totalElemCnt) {
      console.log(q1Copy, q2Copy);
      let pass = false;
      // 현재 큐가 queue1 / queue2와 같다면 ? -> return -1
      for (let i = q1Front; i < queue1.length; ++i) {
        if (queue1[i - q1Front] !== q1Copy[i]) {
          pass = true;
          break;
        }
      }
      for (let i = q1Front; i < queue2.length; ++i) {
        if (queue2[i - q1Front] !== q1Copy[i]) {
          pass = true;
          break;
        }
      }
      for (let i = q2Front; i < queue1.length; ++i) {
        if (queue1[i - q2Front] !== q2Copy[i]) {
          pass = true;
          break;
        }
      }
      for (let i = q2Front; i < queue2.length; ++i) {
        if (queue2[i - q2Front] !== q2Copy[i]) {
          pass = true;
          break;
        }
      }
      if (pass === false) return -1;
    }
    // 2n이면
  }

  return answer;
}