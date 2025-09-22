/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
  if (rows === 1) return encodedText;

  let originalText = "";

  const ary = new Array(rows).fill([]).map(() => new Array());
  const cols = encodedText.length / rows;

  for (let i = 0; i < rows; ++i) {
    ary[i] = encodedText.substring(cols * i, cols * i + cols);
  }
  // 문자열 끊어서 배열에 넣어주기
  let [y, x] = [0, 0];
  let cnt = 0; // 우상향 빗금 횟수
  while (y < rows && x < cols) {
    originalText += ary[y++][x++];

    if (y === rows || x === cols) {
      cnt++;
      y = 0;
      x = cnt;
    }
  }

  return originalText.trimEnd();
};