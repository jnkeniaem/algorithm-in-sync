function solution(s) {
  // {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
  let ary = Array.from(s); // s의 모든 문자를 배열에 담기
  //   ['{','{','2','}','{','2',',','1','}', ... }]
  ary.shift();
  ary.pop();
  // 맨 앞 맨 뒤의 중괄호 제거
  //   ['{','2','}','{','2',',','1','}', ... , '}']
  let elemAry = [];
  let tmpAry = [];
  let numAry = [];
  let map = new Map();

  for (const elem of ary) {
    if (elem == "}") {
      // 집합의 끝 일때
      elemAry.push(tmpAry);
	// console.log("tmpAry : ",tmpAry);
        
      tmpAry = [];
      continue;
    }

	if (elem == ",") tmpAry.push(elem);

    else if (elem != "{") tmpAry.push(elem);
    //  '1','1','1' 같이 한자리수 이상 숫자들도 다룰 수 있게 ','도 넣기
  }
  // console.log("elemAry : ",elemAry);

  for (const elem of elemAry) {
    let str = "";
    for (let i = 0; i < elem.length; ++i) {
      if (elem[i] != ",") {
        str += elem[i];
        if (i + 1 == elem.length) {
          numAry.push(Number(str));
        }
      } else {
        numAry.push(Number(str));
        str = "";
      }
    }
  }
  // console.log("numAry : ",numAry);

  for (const elem of numAry) {
    map.set(elem, (map.get(elem) || 0) + 1);
  }
  map.delete(0);
  let answer = new Array(map.size).fill(0);

  for (const [key, val] of map) {
    answer[map.size - val] = key;
  }

  return answer;
}
