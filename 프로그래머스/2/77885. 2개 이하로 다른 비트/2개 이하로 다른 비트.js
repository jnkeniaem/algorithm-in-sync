function solution(numbers) {
  const answer = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      answer.push(num + 1);
      continue;
    }

    const binary = Array.from(num.toString(2));
    // console.log(binary, num.toString(2));
    const lastZeroIdx = binary.lastIndexOf("0");

    if (lastZeroIdx === -1) {
      // [1, 0].push()
      binary.splice(0, 1, "1", "0");
      // binary = "10" + binary.substring(1);
    } else {
      binary.splice(lastZeroIdx, 2, "1", "0");
      // binary =
      //   binary.substring(0, lastZeroIdx) +
      //   "10" +
      //   binary.substring(lastZeroIdx + 2);
    }
    // console.log(binary);
    answer.push(Number.parseInt(binary.join(""), 2));
  }
  return answer;
}