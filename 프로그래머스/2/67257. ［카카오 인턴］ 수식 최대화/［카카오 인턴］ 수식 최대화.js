function solution(expression) {
  const set = new Set();
  let max = 0;

  const ary = expression.split(/([+\-*])/).map((elem) => {
    if (isNaN(Number(elem))) {
      set.add(elem);
      return elem;
    }
    return Number(elem);
  });

  const operators = [...set];

  const permutation = (ary) => {
    let ret = [];
    let visited = new Array(ary.length).fill(false);

    const backtrack = (path) => {
      if (path.length === ary.length) {
        ret.push([...path]);
      }

      for (let i = 0; i < ary.length; ++i) {
        if (visited[i]) continue;

        visited[i] = true;
        path.push(ary[i]);
        backtrack(path);
        path.pop();
        visited[i] = false;
      }
    };

    backtrack([]);
    return ret;
  };

  const permutated = permutation(operators);
  for (let j = 0; j < permutated.length; ++j) {
    // 경우의 수만큼 순회하면서
    // 연산 수행
    const aryCopy = [...ary];
    for (let k = 0; k < permutated[j].length; ++k) {
      let pos = 1;
      while (pos <= aryCopy.length - 1 - 1) {
        // 끝 -1까지
        pos = aryCopy.indexOf(permutated[j][k], pos);
        if (pos == -1) break;

        // 바로바로 계산하기
        if (permutated[j][k] === "-")
          aryCopy.splice(pos - 1, 3, aryCopy[pos - 1] - aryCopy[pos + 1]);
        else if (permutated[j][k] === "*")
          aryCopy.splice(pos - 1, 3, aryCopy[pos - 1] * aryCopy[pos + 1]);
        else if (permutated[j][k] === "+")
          aryCopy.splice(pos - 1, 3, aryCopy[pos - 1] + aryCopy[pos + 1]);
      }
    }
    max = Math.max(max, Math.abs(aryCopy[0]));
  }

  return max;
}