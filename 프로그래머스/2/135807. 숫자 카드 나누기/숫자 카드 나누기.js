function solution(arrayA, arrayB) {
  let max = 0;
  const arrayACopy = [...arrayA];
  const arrayBCopy = [...arrayB];
  const aMin = arrayACopy.sort((x, y) => x - y)[0];
  const bMin = arrayBCopy.sort((x, y) => x - y)[0];
  const aCommonAliquot = new Set();
  const bCommonAliquot = new Set();

  /*
1. 각각 제일 작은 숫자의 약수 구하기
1.5 공통 약수 제거하기
2. 각 배열도 나눠떨어지는지 확인
*/

  const getAliquot = (num, set, array, anotherArray) => {
    for (let i = 1; i * i <= num; ++i) {
      if (
        num % i === 0 &&
        array.every((elem) => elem % i === 0) &&
        anotherArray.every((elem) => elem % i !== 0)
      ) {
        set.add(i);
        max = Math.max(max, i);
      }
      if (
        num % (num / i) === 0 &&
        array.every((elem) => elem % (num / i) === 0) &&
        anotherArray.every((elem) => elem % (num / i) !== 0)
      ) {
        set.add(num / i);
        max = Math.max(max, num / i);
      }
    }
  };

  getAliquot(aMin, aCommonAliquot, arrayA, arrayB);
  getAliquot(bMin, bCommonAliquot, arrayB, arrayA);

  return max;
}