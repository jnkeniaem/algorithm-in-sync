function solution(book_time) {
  let answer = 0;
  const endTimes = [];

  // 시간을 분으로 변경
  const getTimeInMin = (time) => {
    const [h, m] = time.split(":").map((elem) => Number(elem));
    return h * 60 + m;
  };

  // 시작 시간 기준으로 정렬
  const sorted_book_time = book_time.map((elem) => [
    getTimeInMin(elem[0]),
    getTimeInMin(elem[1]),
  ]);
  sorted_book_time.sort((x, y) => x[0] - y[0]);

  for (const [startTime, endTime] of sorted_book_time) {
    let entered = false;

    for (let i = 0; i < endTimes.length; ++i) {
      // available → 방에 들어가기. 종료 시간넣기
      // 현재 시간 보다 -10 이상 작으면 대체
      if (startTime - 10 >= endTimes[i]) {
        endTimes[i] = endTime;
        entered = true;
        break;
      }
    }
    // 끝까지 돌았는데도 자리 없었으면
    // unavailable → 방 파기
    if (!entered) endTimes.push(endTime);

    // answer max length로 갱신
    answer = Math.max(answer, endTimes.length);
  }

  return answer;
}