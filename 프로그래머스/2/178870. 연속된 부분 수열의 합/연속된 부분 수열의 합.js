function solution(sequence, k) {
  const kIdx = sequence.indexOf(k);
  if (kIdx !== -1) return [kIdx, kIdx];

  // const sequenceUnderK = sequence.filter((elem) => elem < k); // k 미만의 원소만 가지게
  const candidate = [-1, -1]; // 후보 sIdx, 길이 sIdx, length
  // 정확히 일치하는 원소 찾기

  // const updateCandidate = (newLen, sIdx) => {
  //   candidate.len = newLen;
  //   candidate.sIdx = sIdx;
  // };
  let [sIdx, eIdx] = [0, 0];

  const seqLen = sequence.length;
  let sum = sequence[0];

  /*
  - sIdx~eIdx 값 < sum 반복해서 eIdx++
  - 같으면
      - answer 업데이트
  - 더 크면
      - sIdx++
  */

  while (sIdx < seqLen && eIdx < seqLen) {
    if (sum < k) {
      eIdx++;
      sum += sequence[eIdx];
    } else if (sum === k) {
      // 비교해서 갱신
      if (candidate[0] === -1) {
        candidate[0] = sIdx;
        candidate[1] = eIdx;
      } else {
        const prevLen = candidate[1] - candidate[0];
        if (prevLen > eIdx - sIdx) {
          // 길이
          // 갱신
          candidate[0] = sIdx;
          candidate[1] = eIdx;
        } else if (prevLen === eIdx - sIdx) {
          // 시작 인덱스
          if (candidate[0] > sIdx) {
            // 갱신
            candidate[0] = sIdx;
            candidate[1] = eIdx;
          }
        }
      }
      sum -= sequence[sIdx];
      sIdx++;
    } else {
      sum -= sequence[sIdx];
      sIdx++;
    }
  }

  return candidate;
}