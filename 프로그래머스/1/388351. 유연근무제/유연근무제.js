function solution(schedules, timelogs, startday) {
  let answer = 0;
  const timelogs_copy = [...timelogs];

  for (let i = 0; i < timelogs_copy.length; ++i) {
    // timelogs 돌면서 주말 제거하기
    if (startday == 7) {
      timelogs_copy[i] = [...timelogs_copy[i].splice(1, 5)];
    } // 맨 앞이랑 맨 뒤만 제거.
    else {
      // 주말이 가운데에 있는 경우
      timelogs_copy[i].splice(6 - startday, 2);
      // 가운데만 제거.
    }
  }
  // 여기까진 ok
  for (let j = 0, k = 0; j < schedules.length; ++j) {
    // timelogs_copy 돌면서 스케쥴에 맞는지 확인
    // schedules[j] + 10 뒤에서 2번째가 6이면 -> 뒤에서 3번째를 +1해주기
    let plus = schedules[j] + 10;

    let m = plus % 100;
    let h = Math.floor(plus / 100);
    if (m >= 60) {
      h++;
      m -= 60;
    }
    plus = h * 100 + m;

    for (const elem of timelogs_copy[j]) {
      if (elem > plus) {
        break; // 다른 사람으로 넘어감
      }
      k++;
    }
    if (k == 5)
      // 5일 다 잘 출석하면
      answer++;
    k = 0;
  }

  return answer;
}