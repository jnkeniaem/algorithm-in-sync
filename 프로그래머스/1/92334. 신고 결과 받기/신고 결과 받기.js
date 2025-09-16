function solution(id_list, report, k) {
  const reportSet = new Set(report);
  const ary = new Array(id_list.length).fill(0);
  const reportedMap = new Map();
  const reporterMap = new Map();
  const suspended = [];
  // k 넘는 사람 있는지 확인

  for (const elem of reportSet) {
    let splitted = elem.split(" ");
    let cnt = reportedMap.get(splitted[1]);
    let reportsSet = reporterMap.get(splitted[0]);
    if (reportsSet === undefined) reportsSet = new Set();
    reporterMap.set(splitted[0], reportsSet.add(splitted[1]));

    if (cnt == k) {
      // k를 넘으면
      continue;
    }
    if (cnt === undefined) cnt = 0;
    reportedMap.set(splitted[1], ++cnt);
    if (cnt >= k) suspended.push(splitted[1]);
    // k를 넘으면
  }

  for (let i = 0; i < id_list.length; ++i) {
    // 정지 리스트에 내가 신고한 사람 있으면
    // suspended.
    let value = reporterMap.get(id_list[i]);
    if (value !== undefined) {
      for (const suspendedPerson of suspended) {
        if (value.has(suspendedPerson)) ++ary[i];
      }
    }
  }

  return ary;
}