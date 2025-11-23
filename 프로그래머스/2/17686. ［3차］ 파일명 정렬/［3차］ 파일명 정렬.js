function solution(files) {
  const answer = [];

  const parsed = files.map((elem) => {
    const obj = { head: "", number: "", tail: "" }; // 여기서는 number은 문자열. 나중에 숫자로 변환해야됨!
    let numberIng = false; // number로 넘어갔는지
    // let numberFinished = false; // number에서 tail 단계로 넘어갔는지
    for (let i = 0; i < elem.length; ++i) {
            if (Number.isNaN(Number(elem[i])) || elem[i] === " ") {

        if (numberIng) {
          // tail이 시작된 것
          // -> 1. 현재 ~ 문자열 끝까지 tail로 넣고,
          // 2. 다음 파일명으로 ㄱㄱ
          obj.tail = elem.substring(i);
          break;
        }
        obj.head += elem[i];
      } else {
        numberIng = true;
        obj.number += elem[i];
      }
    }
    // obj가 완성돼있을 것.
    return obj;
  });

  /*
1. 세 덩이로 나누기
    1. file 차례대로 돌다가, 숫자 나오면 → 지금까지꺼 head에 저장.
    2. 숫자 돌다가 숫자가 아닌 것 나오면 → 지금까지꺼 number에 저장
    3. 나머지는 tail에 저장
2. head 순으로 정렬
3. number 순으로 정렬

*/

  // head 순으로 정렬
  parsed.sort((x, y) => {
    if (x.head.toLowerCase() < y.head.toLowerCase()) return -1;
  });

  const map = new Map(); // key:val = head:obj[]

  // 같은 head끼리
  for (const obj of parsed) {
    let val = map.get(obj.head.toLowerCase());
    if (val === undefined) val = [];
    map.set(obj.head.toLowerCase(), [...val, obj]); // 참조값을 값으로 함!
  }

  for (const [head, objs] of map) {
    // entry는 같은 head의 모임

    // 같은 head이면 number 순으로 정렬하기
    // console.log("entry : ", entry);

    answer.push(...objs.sort((x, y) => Number(x.number) - Number(y.number)));
  }

  // 다시 조합하기
  // head, tail 같으면 아무것도 안바뀌는지 확인하기

  return answer.map((elem) => elem.head + elem.number + elem.tail);
}