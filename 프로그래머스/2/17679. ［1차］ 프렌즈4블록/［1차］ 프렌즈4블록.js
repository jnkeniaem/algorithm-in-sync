function solution(m, n, board) {
  let answer = 0;

  const boardCopy = []; // col 별로 배열

  // 열마다 배열 만들기
  for (let k = 0; k < n; ++k) {
    const tmp = [];
    // for (let j = 0; j < m; ++j) {
    for (let j = m - 1; j >= 0; --j) {
      tmp.push(board[j][k]);
    }
    boardCopy.push(tmp);
  }
  let nothingToRemove = false;
  while (!nothingToRemove) {
    const checkTwoByTwo = (y, x) => {
      const curBlock = boardCopy[y][x];

      if (boardCopy[y] && boardCopy[y + 1]) {
        const right = boardCopy[y][x + 1];
        const diagonal = boardCopy[y + 1][x + 1];
        const down = boardCopy[y + 1][x];

        if (right && diagonal && down) {
          if (
            (curBlock == right ||
              curBlock == right.toLowerCase() ||
              curBlock == right.toUpperCase()) &&
            (curBlock == diagonal ||
              curBlock == diagonal.toLowerCase() ||
              curBlock == diagonal.toUpperCase()) &&
            (curBlock == down ||
              curBlock == down.toLowerCase() ||
              curBlock == down.toUpperCase())
          )
            return true;
        }
      }
      // undefined 확인

      return false; // 하나라도 비거나 다르면
    };

    for (let j = 0; j < n; ++j) {
      // m말고 유동적인 값이어야되지 않을까? boardAfterRemoval의 길이
      for (let k = 0; k < m; ++k) {
        if (checkTwoByTwo(j, k)) {
          /**
         - 마킹 - 소문자로 바꾸기
         */
          boardCopy[j][k] = boardCopy[j][k].toLowerCase();
          boardCopy[j][k + 1] = boardCopy[j][k].toLowerCase();
          boardCopy[j + 1][k + 1] = boardCopy[j][k].toLowerCase();
          boardCopy[j + 1][k] = boardCopy[j][k].toLowerCase();
        }
      }
    }

    // "0"이 아닐때까지 이동하는
    // 한바퀴 다 돌았으면 -> "0"으로 치환해서 배열 copy에 담기
    let prevAnswer = answer;

    for (let j = 0; j < n; ++j) {
      let totalLowerCase = 0;
      boardCopy[j] = boardCopy[j].filter((elem) => {
        // console.log(/[a-zA-Z]/.test(elem));
        if (/[a-zA-Z]/.test(elem) && elem.toLowerCase() === elem) {
          totalLowerCase++;
        } else return true;
      });
      // 소문자 제거
      const tmp = new Array(totalLowerCase).fill(" ");
      boardCopy[j].push(...tmp);
      // 빈 만큼 채워주기
      answer += totalLowerCase;
    } // 바꿔서 열 먼저 도는 것 - 가능하구나 - game changing
    // nothingToRemove 계산
    nothingToRemove = prevAnswer === answer;
    // if (totalLowerCase === 0) return answer;
  }
  // console.log(boardCopy);

  // // 더 이상 지울것이 없으면
  return answer;
}