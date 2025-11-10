function solution(n, k, enemy) {
  //   const totalRound = enemy.length;
  //   if (k >= totalRound) return totalRound;

  //   let [left, right] = [0, totalRound - 1];
  //   let [left, right] = [0, enemy.length - 1];
  let [left, right] = [0, enemy.length];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let leftSkill = k; // 무적권 남은 횟수
    const curEnemies = enemy.slice(0, mid).sort((x, y) => y - x);
    const curEnemy = curEnemies.reduce((acc, curVal) => {
      if (leftSkill) {
        leftSkill--;
        return acc;
      }
      return acc + curVal;
    }, 0);
    if (n < curEnemy) right = mid - 1;
    else left = mid + 1;
  }

  return left - 1;
}