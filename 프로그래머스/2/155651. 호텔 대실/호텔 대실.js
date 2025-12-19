function solution(book_time) {
  let answer = 0;
  const endTimes = [];

  // 시간을 분으로 변경하기
  const getTimeInMin = (time) => {
    const [h, m] = time.split(":").map((elem) => Number(elem));
    return h * 60 + m;
  };

  const sorted_book_time = [...book_time].sort(
    (x, y) => getTimeInMin(x[0]) - getTimeInMin(y[0])
  );
  // 시작 시간 기준으로 정렬

  for (const [startTime, endTime] of sorted_book_time) {
    // 길이랑 실제 차 있는거랑 비교.
    // answer max length로 갱신?
    const endTimeInMin = getTimeInMin(endTime);
    const startTimeInMin = getTimeInMin(startTime);

    if (endTimes.length === 0) endTimes.push(endTimeInMin);
    else {
      let gotIn = false;
      for (let i = 0; i < endTimes.length; ++i) {
        if (startTimeInMin - 10 >= endTimes[i]) {
          endTimes[i] = endTimeInMin;
          gotIn = true;
          break;
        }
        // 현재 시간 보다 -10 이상 작으면
        // 대체
        // gotIn = true;
        // break
      }
      // 끝까지 돌았는데도 자리 없었으면
      if (!gotIn) endTimes.push(endTimeInMin);
    }

    answer = Math.max(answer, endTimes.length);
  }
  /*
  2. sorted_book_time 순회하면서
      - endTimes = []
      1. unavailable → 방 파
      2. available → 거기에 들어가기. 종료 시간넣기
   */
  return answer;
}