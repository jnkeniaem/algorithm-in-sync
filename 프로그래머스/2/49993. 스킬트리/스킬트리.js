function solution(skill, skill_trees) {
  let answer = 0;
  const set = new Set();

  for (const letter of skill) {
    set.add(letter);
  }

  for (const skill_tree of skill_trees) {
    const skillTreeAry = [];

    // skill_tree에서 skill에 없는 문자 모두 제거한 다음
    for (const letter of skill_tree) {
      if (set.has(letter)) skillTreeAry.push(letter);
    }

    let idx = 0;
    while (idx < skillTreeAry.length) {
      if (skill[idx] !== skillTreeAry[idx]) break;
      idx++;
    }
    if (idx === skillTreeAry.length) answer++;
    // }
  }

  /*
    1. skill_tree에서 skill에 없는 문자 쫙 제거한 다음에
    2. 포인터로 두 문자열 순차적으로 비교하고 싶당
      - 순서대로면 -> answer++;
      - 아니면 -> 바로 다음 skill_tree로
    - skill을 set에 넣은 다음에 has로 하면 시간 복잡도 높지 않을듯??

  */
  return answer;
}