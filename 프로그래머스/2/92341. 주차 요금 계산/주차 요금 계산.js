function solution(fees, records) {
  const answer = [];
  const inMap = new Map(); // 번호:입차시각
  const accTimeMap = new Map(); // 번호:누적시간
  const [basicTime, basicFee, unitTime, unitFee] = fees;

  // 현재 시각 - 입차 시각 계산
  const calculateAccumulatedTime = (carNum, curTime) => {
    const inTime = inMap.get(carNum); // 입차 시간
    const [curTimeH, curTimeM] = curTime.split(":").map((elem) => Number(elem));
    const [inTimeH, inTimeM] = inTime.split(":").map((elem) => Number(elem));

    const curTimeMinutes = curTimeH * 60 + curTimeM;
    const inTimeMinutes = inTimeH * 60 + inTimeM;
    const parkingTime = curTimeMinutes - inTimeMinutes;

    let accTime = accTimeMap.get(carNum); // 누적된 시간
    if (accTime === undefined) accTime = 0;
    accTime += parkingTime;

    accTimeMap.set(carNum, accTime);
  };

  for (const record of records) {
    const [time, carNum, parkingStatus] = record.split(" ");
    if (parkingStatus === "IN") {
      inMap.set(carNum, time);
    } else {
      calculateAccumulatedTime(carNum, time);
      inMap.delete(carNum);
    }
  }

  // 끝까지 돌았는데 출차 시간이 없는 경우=inmap에 남아있는 경우
  // -> 출차 시간 23:59로 처리
  for (const [carNum, inTime] of inMap) {
    calculateAccumulatedTime(carNum, "23:59");
    // // inMap.delete(carNum); for of 문 돌때 영향이 있을까봐
  }

  // 차 번호 오름차 순으로 정렬
  let accTimeMapCopy = [...accTimeMap]; // const로 바꾸기
  accTimeMapCopy.sort((x, y) => Number(x[0]) - Number(y[0]));

  /*
  요금 계산
  - 누적 주차 시간이
    - `기본 시간`이하라면, `기본 요금`을 청구
    - `기본 시간`을 초과하면,
        - `기본 요금`에 더해서 + 초과한 시간에 대해서 `단위 시간` 마다 `단위 요금`을 청구
        - 초과한 시간이 `단위 시간`으로 나누어 떨어지지 않으면, `올림`
  */
  for (const [carNum, accTime] of accTimeMapCopy) {
    if (accTime <= basicTime) answer.push(basicFee);
    else {
      // 초과 시간 구하기
      const overTime = accTime - basicTime;
      // 단위 시간으로 나누기
      const extraTime = Math.ceil(overTime / unitTime);
      // 나눠떨어지지 않으면 -> 올림
      answer.push(basicFee + extraTime * unitFee); // totalFee
    }
  }

  return answer;
}