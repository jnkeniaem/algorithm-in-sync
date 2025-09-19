function solution(m, musicinfos) {
  // let map = new Map();
  const ary = ["", "0"];

  for (const musicInfo of musicinfos) {
    const [sTime, eTime, title, info] = musicInfo.split(",");
    const [sH, sM] = sTime.split(":").map((elem) => Number(elem));
    const [eH, eM] = eTime.split(":").map((elem) => Number(elem));
    const playedTime = 60 * eH + eM - (60 * sH + sM);
    const mConverted = m.replace(/([A-Z])#/g, (_, ch) => ch.toLowerCase());
    const infoConverted = info.replace(/([A-Z])#/g, (_, ch) =>
      ch.toLowerCase()
    );
    if (mConverted.length > playedTime) continue;

    let repeatedCnt = Math.floor(playedTime / infoConverted.length); // 반복재생된 횟수
    let playedStr =
      infoConverted.repeat(repeatedCnt) +
      infoConverted.slice(0, playedTime % infoConverted.length);
    if (!playedStr.includes(mConverted)) {
      continue;
    } else {
      // 있으면
      // if (map.size) {
      //   let [key, val] = [...map][0];
      //   if (val === playedTime) continue;
      //   if (val < playedTime) {
      //     map.delete(key);
      //   }
      // }
      // map.set(title, playedTime);
      if (ary[0]) {
                if (Number(ary[1]) >= playedTime) continue;

        // else if (Number(ary[1]) < playedTime)
      }
      ary[0] = title;
            ary[1] = playedTime.toString();

    }
  }
  // if (map.size) {
  //   let [key, val] = [...map][0];
  //   return key;
  // } else return "(None)";
  if (ary[0]) {
    return ary[0];
  } else return "(None)";
}