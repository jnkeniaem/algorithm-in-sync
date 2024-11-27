function solution(record) {
  let ret = [];
  let map = new Map();

  for (const elem of record) {
    let [keyword, uid, nickname] = elem.split(" ");

    if (keyword == "Enter") {
      // map.set(uid, map.get(uid) ? [...map.get(uid), nickname] : [nickname]);
      map.set(uid, nickname);
      ret.push(uid + " " + "님이 들어왔습니다.");
    } else if (keyword == "Leave") {
      ret.push(uid + " " + "님이 나갔습니다.");
    } else {
      // 'Change'
      // map.set(uid, map.get(uid) ? [...map.get(uid), nickname] : [nickname]);
      map.set(uid, nickname);
    }
  }
  // 'uid1234 님이 들어왔습니다.'

  for (let i = 0; i < ret.length; ++i) {
    let [uid, msg1, msg2] = ret[i].split(" ");
    let mapVal = map.get(uid);
    // ret[i] = mapVal[mapVal.length - 1] + msg1 + " " + msg2;
    ret[i] = mapVal + msg1 + " " + msg2;
  }

  return ret;
}
