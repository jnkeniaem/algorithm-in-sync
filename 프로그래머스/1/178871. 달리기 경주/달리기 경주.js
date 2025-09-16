function solution(players, callings) {
  const players_copy = [...players];
  let map = new Map();

  for (let i = 0; i < players.length; ++i) {
    map.set(players[i], i);
    // player: idx
  }

  for (const player of callings) {
    let idx = map.get(player);
    const front = players_copy[idx - 1]; //앞 선수
    players_copy[idx - 1] = player; // 앞 선수 자리에 현재 선수
    players_copy[idx] = front; // 현재 선수 자리에 앞 선수
    map.set(player, idx - 1);
    map.set(front, idx);
  }

  return players_copy;
}