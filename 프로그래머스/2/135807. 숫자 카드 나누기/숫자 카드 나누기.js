function solution(arrayA, arrayB) {
  let max = 0;
  const arrayACopy = [...arrayA];
  const arrayBCopy = [...arrayB];
  const aMin = arrayACopy.sort((x, y) => x - y)[0];
  const bMin = arrayBCopy.sort((x, y) => x - y)[0];

  const isCommonAliquot = (num, array, divisor) => {
    return num % divisor === 0 && array.every((elem) => elem % divisor === 0);
  };

  const getCommonAliquot = (num, array) => {
    const aliquot = [];

    for (let i = 1; i * i <= num; ++i) {
      if (isCommonAliquot(num, array, i)) aliquot.push(i);
      if (isCommonAliquot(num / i, array, num / i)) aliquot.push(num / i);
    }

    return aliquot;
  };

  const aAliquot = getCommonAliquot(aMin, arrayA);
  const bAliquot = getCommonAliquot(bMin, arrayB);

  for (const num of aAliquot) {
    if (arrayB.every((elem) => elem % num !== 0)) max = Math.max(max, num);
  }

  for (const num of bAliquot) {
    if (arrayA.every((elem) => elem % num !== 0)) max = Math.max(max, num);
  }

  return max;
}