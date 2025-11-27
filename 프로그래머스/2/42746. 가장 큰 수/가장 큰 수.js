function solution(numbers) {
  let answer = "";
  const numsInString = numbers.map((elem) => elem.toString());

  numsInString.sort((x, y) => {
    const xy = x + y;
    const yx = y + x;
    if (xy - yx > 0) return -1;
    else return 1;
  });

  answer += numsInString.join("");


  if (answer[0] === "0") answer = "0";

  return answer;
}