function solution(msg) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (msg.length === 1) {
    return [alphabet.indexOf(msg[0]) + 1];
  }
  const answer = [];
  const dictionary = new Map();

  // 사전 초기화
  for (let i = 0; i < alphabet.length; ++i) {
    dictionary.set(alphabet[i], i + 1);
  }

  let wStart = 0;

  const getW = () => {
    if (wStart === msg.length - 1) return msg[wStart];

    // 다음 msg 문자까지 합쳐서 사전에 있나 확인
    let w = msg[wStart];
    let nextPos = 1;

    while (dictionary.has(w + msg[wStart + nextPos]) && nextPos < msg.length) {
      w += msg[wStart + nextPos];
      nextPos++;
    }
    // while (dictionary.has(w) && wStart + inputLength < msg.length) {
    //   w += msg[wStart + inputLength];
    //   inputLength++;
    // }
    // return w.slice(0, -1);
    return w;
  };

  while (wStart < msg.length) {
    const w = getW();
    const idx = dictionary.get(w);
    answer.push(idx);
    wStart += w.length;
    if (wStart < msg.length) {
      // 새로운 문자열 사전에 등록
      let c = msg[wStart];
      dictionary.set(w + c, dictionary.size + 1);
    }
  }

  return answer;
}