function solution(bandage, health, attacks) {
  let curHealth = health;
  let prevAttackTime = 0;
  const [bandageTime, x, y] = bandage;

  for (let i = 0; i < attacks.length; ++i) {
    // bandage time
    curHealth += (attacks[i][0] - prevAttackTime - 1) * x;
    if (attacks[i][0] - prevAttackTime - 1 >= bandageTime) {
      curHealth +=
        y * Math.floor((attacks[i][0] - prevAttackTime - 1) / bandageTime);
      
    }
      if (curHealth > health) curHealth = health;
      // 최대 체력 넘으면 -> 최대 체력으로.

    curHealth -= attacks[i][1]; // 공격
    if (curHealth <= 0) return -1;
    prevAttackTime = attacks[i][0]; // 직전 공격 시간 갱신
  }

  return curHealth;
}