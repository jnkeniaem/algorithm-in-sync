function solution(video_len, pos, op_start, op_end, commands) {
  const [posM, posS] = pos.split(":").map((elem) => Number(elem));
  const [opStartM, opStartS] = op_start.split(":").map((elem) => Number(elem));
  const [opEndM, opEndS] = op_end.split(":").map((elem) => Number(elem));
  const [vidEndM, vidEndS] = video_len.split(":").map((elem) => Number(elem));
  let [curPosM, curPosS] = [posM, posS]; // 현재 위치

  const checkOpening = (m, s) => {
    if (
      m < opStartM ||
      m > opEndM ||
      (m == opStartM && s < opStartS) ||
      (m == opEndM && s > opEndS)
    ) {
      // 오프닝 구간 아닐때
      return [m, s]; //
    }
    return [opEndM, opEndS]; // 오프닝 끝으로 이동
  };
  // pos가 오프닝 구간인지 확인

  [curPosM, curPosS] = checkOpening(curPosM, curPosS);

  for (const command of commands) {
    // 명령어를 돌면서 하나씩 수행.
    if (command === "prev") {
      curPosS -= 10;
      // prev -> 10초 앞으로
      // 그 후에
      if (curPosS < 0) {
        curPosM -= 1;
      curPosS += 60;
      }
      // 1. 예외 처리 - ~:03 같이 초가 10초 이하일때 -10 하면 -> 분에서 까먹어야 함! (초가 음수이면)
      // 더 간단하게 코드 작성할 수 있을것같음!
      if (curPosM < 0) [curPosM, curPosS] = [0, 0];
      // 2. 시작 시간이랑 비교해서 -> m이 음수이면 -> 00:00으로 이동.
    } else {
      curPosS += 10;
      // next -> 10초 뒤로.
      // 그 후에
      if (curPosS >= 60) {
        curPosM += 1;
        curPosS -= 60;
      }
      // 1. 예외 처리 - 0:53같이 초가 50대이면 -> + 10하면 분을 +1해줘야 함.
      if (curPosM > vidEndM || (curPosM == vidEndM && curPosS > vidEndS))
        [curPosM, curPosS] = [vidEndM, vidEndS];
      // 2. 동영상 길이 < 현재위치 -> 동영상 길이로 이동
    }

    [curPosM, curPosS] = checkOpening(curPosM, curPosS);
    // 오프닝 비교
  }

  // 두자리로 만들어주기.
  return `${String(curPosM).padStart(2, "0")}:${String(curPosS).padStart(
    2,
    "0"
  )}`;
}