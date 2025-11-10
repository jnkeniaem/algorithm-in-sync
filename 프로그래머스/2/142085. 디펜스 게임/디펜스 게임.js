// function solution(n, k, enemy) {
//   const totalRound = enemy.length;
//   if (k >= totalRound) return totalRound;

//   let answer = 0;
//   let leftSkill = k; // 무적권 남은 횟수
//   let curSoldiers = n;
//   let q = [];

//   for (let i = 0; i < totalRound; ++i) {
//     const curEnemy = enemy[i];

//     q.push(curEnemy);
//     q.sort((x, y) => x - y); // 이게 엄청 오래 걸릴것임

//     curSoldiers -= curEnemy;
//     while (curSoldiers < 0) {
//       if (leftSkill) {
//         const max = q.pop();
//         curSoldiers += max;
//         leftSkill--;
//       } else return answer;
//     }
//     answer++;
//   }

//   return answer;
// }


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
function solution(n, k, enemy) {
    let [left, right] = [0, enemy.length];
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        const round = enemy.slice(0, mid).sort((a, b) => b - a);
        let fever = k;
        const remain = round.reduce((acc, val) => {
            if (fever > 0) {
                fever--;
                return acc;
            } else return acc + val
        }, 0);
        // console.log(round, fever, remain, mid)
        if (n - remain >= 0 && fever >= 0) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((left + right) / 2);
    }

    return left - 1;
}