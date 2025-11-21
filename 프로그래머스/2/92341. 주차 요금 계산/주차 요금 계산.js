function solution(fees, records) {
  const answer = [];
  const inMap = new Map(); // 번호:입차시각
  const sumMap = new Map(); // 번호:입차시각
  const [basicTime, basicFee, unitTime, unitFee] = fees;

  for (const record of records) {
    const [time, carNum, inOrOut] = record.split(" ");
    if (inOrOut === "IN") {
      inMap.set(carNum, time);
    } else {
      const inTime = inMap.get(carNum); // 입차 시간
      // 현재 시각 - 입차 시각 계산
      const [timeH, timeM] = time.split(":").map((elem) => Number(elem));
      const [inTimeH, inTimeM] = inTime.split(":").map((elem) => Number(elem));

      const timeMinutes = timeH * 60 + timeM;
      const inTimeMinutes = inTimeH * 60 + inTimeM;
      const timeLasted = timeMinutes - inTimeMinutes;

      let summedTime = sumMap.get(carNum); // 누적된 시간
      if (summedTime === undefined) {
        summedTime = 0;
      }
      summedTime += timeLasted;
      sumMap.set(carNum, summedTime);
      inMap.delete(carNum);
    }
  }

  // 끝까지 돌았는데 출차 시간이 없는 경우=inmap에 남아있는 경우
  // -> 출차 시간 23:59로 처리

  for (const [carNum, inTime] of inMap) {
    // const [timeH, timeM] = "23:59".split(":").map((elem) => Number(elem));
    const [inTimeH, inTimeM] = inTime.split(":").map((elem) => Number(elem));

    // const timeMinutes = timeH * 60 + timeM;
    const timeMinutes = 23 * 60 + 59;
    const inTimeMinutes = inTimeH * 60 + inTimeM;
    const timeLasted = timeMinutes - inTimeMinutes;

    let summedTime = sumMap.get(carNum); // 누적된 시간
    if (summedTime === undefined) {
      summedTime = 0;
    }
    summedTime += timeLasted;
    sumMap.set(carNum, summedTime);
    // inMap.delete(carNum); for of 문 돌때 영향이 있을까봐
  }

  let sumMapCopy = [...sumMap]; // const로 바꾸기
  sumMapCopy.sort((x, y) => Number(x[0]) - Number(y[0]));

  sumMapCopy = sumMapCopy.map((elem) => elem[1]); // 시간만 추출
  // 요금 계산
  /*
  - 누적 주차 시간이
    - `기본 시간`이하라면, `기본 요금`을 청구
    - `기본 시간`을 초과하면,
        - `기본 요금`에 더해서 + 초과한 시간에 대해서 `단위 시간` 마다 `단위 요금`을 청구
        - 초과한 시간이 `단위 시간`으로 나누어 떨어지지 않으면, `올림`
  */

  // return answer;
  return sumMapCopy.map((elem) => {
    if (elem <= basicTime) return basicFee;
    let totalFee = basicFee;
    // 초과 시간 구하기
    const overTime = elem - basicTime;
    // 단위 시간으로 나누기
    let quota = Math.floor(overTime / unitTime); // const로 바꾸기!
    if (overTime % unitTime) quota++;
    // 바로 올림?
    // 나눠떨어지지 않으면 -> 올림
    // totalFee에 더하기
    totalFee += quota * unitFee;
    return totalFee;
  });
}