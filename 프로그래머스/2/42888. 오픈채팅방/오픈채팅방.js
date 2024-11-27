function solution(record) {
  let ret = [];
  let splitAry = [];
  let map = new Map(); // change map id : nickname
  for (const elem of record) {
    let split = elem.split(" ");
    splitAry.push(split); // split

    // result에 넣기
    if (split[0] == "Enter") {
      map.set(
        split[1],
        map.get(split[1]) ? [...map.get(split[1]), split[2]] : [split[2]]
      );
      ret.push(split[1] + " " + "님이 들어왔습니다.");
    } else if (split[0] == "Leave")
      ret.push(split[1] + " " + "님이 나갔습니다.");
    else {
      // change
      map.set(
        split[1],
        map.get(split[1]) ? [...map.get(split[1]), split[2]] : [split[2]]
      );
    }
  }

// console.log(ret)
    for (let i = 0; i < ret.length; ++i) {
        let split = ret[i].split(" ");
        let get = map.get(split[0]);
        // get.length - 1
        ret[i] = get[get.length - 1] + split[1] + " " + split[2];
    }
// console.log(ret)
  return ret;
}
