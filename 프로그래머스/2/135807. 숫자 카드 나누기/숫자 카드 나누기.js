function solution(arrayA, arrayB) {
  let max = 0;
  const arrayACopy = [...arrayA];
  const arrayBCopy = [...arrayB];
  const aMin = arrayACopy.sort((x, y) => x - y)[0];
  const bMin = arrayBCopy.sort((x, y) => x - y)[0];
  const aAliquot = new Set();
  const bAliquot = new Set();
  /*
1. 각각 제일 작은 숫자의 약수 구하기
1.5 공통 약수 제거하기
2. 각 배열도 나눠떨어지는지 확인
*/

  const getAliquot = (num, set) => {
    for (let i = 1; i * i <= num; ++i)
      if (num % i === 0) {
        set.add(i);
        if (i * i !== num && num % (num / i) === 0) set.add(num / i);
      }
  };

  getAliquot(aMin, aAliquot);
  getAliquot(bMin, bAliquot);

  for (const val of aAliquot) {
    if (bAliquot.has(val)) {
      continue;
    }

    if (
      arrayACopy.every((elem) => elem % val === 0) &&
      arrayBCopy.every((elem) => elem % val !== 0)
    )
      max = Math.max(max, val);
  }

  for (const val of bAliquot) {
    if (aAliquot.has(val)) {
      continue;
    }

    if (
      arrayACopy.every((elem) => elem % val !== 0) &&
      arrayBCopy.every((elem) => elem % val === 0)
    )
      max = Math.max(max, val);
  }

  return max;
}