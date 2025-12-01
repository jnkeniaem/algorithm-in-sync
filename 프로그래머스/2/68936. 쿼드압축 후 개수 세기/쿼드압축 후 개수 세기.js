function solution(arr) {
  const answer = [0, 0];

  // 현재 구역이 다 같은 숫자인지 확인
  // ary[0][0]
  const checkSameNum = (ary, num) => {
    for (const row of ary) {
      const set = new Set(row);
      if (set.size === 2) return false;
      if (!set.has(num)) return false;
    }
    return true;
  };

  if (checkSameNum(arr, arr[0][0])) {
    answer[arr[0][0]]++;
          return answer;

  }
  /*
  1. row 절반 pop
  2. 2개의 배열의 열의 절반 pop
  // splice?
  */
  // for (const ary of splitedAry) {
  // 쪼개기 - 길이가 1일때 까지

  const splitedAry = [[...arr]]; // 쪼갠 사각형들 넣는다.
  let length = arr.length;
  // 길이가 1일때까지 쪼갠다.
  // while (length >= 1 && splitedAry.length) {
  while (splitedAry.length) {
    const ary = splitedAry.pop();
    const top = [...ary].splice(0, Math.floor(ary.length / 2));
    const bottom = [...ary].splice(ary.length / 2, Math.floor(ary.length / 2)); // 아래 절반

    if (top.length === 1) {
      // top, bottom 순회하면서 answer++
      for (const row of top) {
        for (const num of row) {
          answer[num]++;
        }
      }
      for (const row of bottom) {
        for (const num of row) {
          answer[num]++;
        }
      }
      continue;
    }
    // 위에 쪼개기
    let tmp = [];
    if (top.length > 1) {
      for (let i = 0; i < top.length; ++i) {
        tmp.push(
          top[i].splice(top[i].length / 2, Math.floor(top[i].length / 2))
        );
      }
      // 넣기 전에
      if (!checkSameNum(top, top[0][0])) splitedAry.push(top);
      else answer[top[0][0]]++;

      if (!checkSameNum(tmp, tmp[0][0])) splitedAry.push(tmp);
      else answer[tmp[0][0]]++;
    } else {
      // [[1]]
      answer[top[0][0]]++;
    }

    // 아래 쪼개기
    if (bottom.length > 1) {
      tmp = [];
      for (let i = 0; i < bottom.length; ++i) {
        tmp.push(
          bottom[i].splice(
            bottom[i].length / 2,
            Math.floor(bottom[i].length / 2)
          )
        );
      }
      if (!checkSameNum(bottom, bottom[0][0])) splitedAry.push(bottom);
      else answer[bottom[0][0]]++;
      if (!checkSameNum(tmp, tmp[0][0])) splitedAry.push(tmp);
      else answer[tmp[0][0]]++;
    } else {
      // [[1]]
      answer[bottom[0][0]]++;
    }

    // length /= 2;
    // splitedary에 숫자 들어가면 안됨
  }

  // 압축하기
  return answer;
}