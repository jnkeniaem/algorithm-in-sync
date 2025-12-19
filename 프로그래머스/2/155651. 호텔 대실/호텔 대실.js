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
    let roomIdx = endTimes.findIndex((elem) => startTime - 10 >= elem);

    if (roomIdx !== -1) endTimes[roomIdx] = endTime;
    else endTimes.push(endTime);

    answer = Math.max(answer, endTimes.length);
  }

  return answer;
}