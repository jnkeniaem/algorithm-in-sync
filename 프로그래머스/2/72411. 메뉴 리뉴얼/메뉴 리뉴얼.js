function solution(orders, course) {
  const getCombinations = (ary, selectNumber) => {
    const ret = [];
    if (selectNumber === 1) return ary.map((val) => [val]);
    ary.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combi) => [
        fixed,
        ...combi,
      ]);
      ret.push(...attached);
    });
    return ret;
  };

  const courseMenus = {}; // 각 코스별 최다 주문된 메뉴 조합을 담을 객체
  for (let cnt of course) {
    courseMenus[cnt] = {}; // 각 코스 개수별로 초기화
  }

  // 각 주문의 메뉴를 사전순으로 정렬하고 조합 생성
  orders.forEach((order) => {
    const sortedOrder = order.split("").sort();
    course.forEach((cnt) => {
      if (cnt <= sortedOrder.length) {
        const combinations = getCombinations(sortedOrder, cnt);
        combinations.forEach((combo) => {
          const menu = combo.join("");
          if (!courseMenus[cnt][menu]) {
            courseMenus[cnt][menu] = 0;
          }
          courseMenus[cnt][menu]++;
        });
      }
    });
  });

  const ret = [];

  // 각 코스 개수별 최다 주문된 메뉴 조합 찾기
  Object.keys(courseMenus).forEach((cnt) => {
    const menus = courseMenus[cnt];
    const maxCnt = Math.max(...Object.values(menus));

    if (maxCnt >= 2) {
      Object.keys(menus).forEach((menu) => {
        if (menus[menu] === maxCnt) {
          ret.push(menu);
        }
      });
    }
  });

  return ret.sort();
}