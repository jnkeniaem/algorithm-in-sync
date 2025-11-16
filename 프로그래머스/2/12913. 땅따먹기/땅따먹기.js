function solution(land) {
  const dp = [...land].map((elem) => [...elem]);

  for (let j = 1; j < land.length; ++j) {
    for (let k = 0; k < 4; ++k) {
      const filtered = dp[j - 1].filter((_, idx) => idx !== k);
      // land[j - 1]에서 같은 열 제외한 배열
      dp[j][k] += Math.max(...filtered);
      // land[j - 1] 중 같은 열이 아닌 점수 중 가장 큰 점수
    }
  }

  return Math.max(...dp[dp.length - 1]);
}