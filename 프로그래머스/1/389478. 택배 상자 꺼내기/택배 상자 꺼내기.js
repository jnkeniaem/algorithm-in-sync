function solution(n, w, num) {
    if (w === 1) {
    return n - num + 1;
  }
      if (n % w === 0) return (n / w) - Math.floor((num - 1) / w) ;

  const numRow = num % w ? Math.floor(num / w) : Math.floor(num / w) - 1;
  const isNumRowOdd = numRow % 2; // 방향 구하려고
const numCol = isNumRowOdd
    ? w - 1 - ((num - 1) % w) // 끄트머리 확인
    : num % w
    ? (num % w) - 1
    : w - 1;
  const topRow = Math.floor(n / w);
  const topBoxes = n % w ? n % w : w; // 맨 위 상자들 개수

  let answer = topRow - numRow;

  const isTopRowOdd = topRow % 2;

  if (isNumRowOdd === isTopRowOdd) {
    // 둘이 같방
    if (isNumRowOdd) {
      // 홀홀
      const numRevCol = num % w ? (num % w) - 1 : w - 1;
      if (numRevCol <= topBoxes - 1) answer += 1;
    } else {
      // 짝짝
      if (numCol <= topBoxes - 1) answer += 1;
    }
  } else {
    // 둘이 방향 다르면
    if (isNumRowOdd) {
      // num - 홀 & toprow - 짝
      if (numCol <= topBoxes - 1) answer += 1;
    } else {
      // num - 짝 & toprow - 홀
      if (numCol > w - topBoxes - 1) answer += 1;
    }
  }

  return answer;
}