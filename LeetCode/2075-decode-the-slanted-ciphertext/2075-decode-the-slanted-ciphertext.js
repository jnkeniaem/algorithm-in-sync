/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
  if (rows === 1) return encodedText;

  let originalText = "";

  const matrix = new Array(rows).fill("");
  const cols = encodedText.length / rows;

  for (let i = 0; i < rows; ++i) {
    matrix[i] = encodedText.substring(cols * i, cols * i + cols);
  }
  // 문자열 끊어서 배열에 넣어주기

  let [y, x] = [0, 0];
  let slantedLinesCnt = 0; // 빗금 횟수
  while (y < rows && x < cols) {
    originalText += matrix[y++][x++];

    if (y === rows || x === cols) {
      slantedLinesCnt++;
      y = 0;
      x = slantedLinesCnt;
    }
  }

  return originalText.trimEnd();
};