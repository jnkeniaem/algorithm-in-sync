function solution(record) {
  const answer = [];
  const map = new Map();

  for (const string of record) {
    const [status, uid, nickname] = string.split(" ");
          if (nickname !== undefined) map.set(uid, nickname);

    if (status === "Leave") {
      // 구분자 : !
      answer.push(`${uid}!님이 나갔습니다.`);
    } else if (status === "Enter") {
      answer.push(`${uid}!님이 들어왔습니다.`);
    }
  }

  /*
  - map uid : nickname
  - 마지막 순회하면서
      - change 반영
      - result uid nickname으로 변경
  */
  return answer.map((elem) => {
    const [uid, statement] = elem.split("!");
    return map.get(uid) + statement;
  });
}