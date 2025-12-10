function solution(sequence, k) {
  const candidate = [-1, -1];
  let [sIdx, eIdx] = [0, 0];
  const seqLen = sequence.length;
  let sum = sequence[0];

  while (eIdx < seqLen) {
    if (sum < k) {
      eIdx++;
      if (eIdx < seqLen) sum += sequence[eIdx];
    } else {
      if (sum === k) {
        // 비교해서 갱신
        if (candidate[0] === -1) {
          candidate[0] = sIdx;
          candidate[1] = eIdx;
        } else {
          const prevLen = candidate[1] - candidate[0];
          const curLen = eIdx - sIdx;
          if (prevLen > curLen) {
            // 길이
            candidate[0] = sIdx;
            candidate[1] = eIdx;
          } else if (prevLen === curLen && candidate[0] > sIdx) {
            // 시작 인덱스
            candidate[0] = sIdx;
            candidate[1] = eIdx;
          }
        }
      }
      sum -= sequence[sIdx];
      sIdx++;
    }
  }

  return candidate;
}