/**
 * 주어진 숫자 문자열에서 k개의 수를 제거하여 가장 큰 숫자를 만듭니다.
 * @param {string} number - 숫자 문자열
 * @param {number} k - 제거할 숫자의 개수
 * @returns {string} - 만들 수 있는 가장 큰 숫자 문자열
 */
function solution(number, k) {
  // 결과를 저장할 스택 (배열 사용)
  const stack = [];
  let removeCount = k; // 남은 제거 횟수

  for (let i = 0; i < number.length; i++) {
    const currentDigit = number[i];

    // [핵심 그리디 로직]
    // 1. 제거 횟수가 남아있고
    // 2. 스택이 비어있지 않으며
    // 3. 스택의 맨 위 숫자가 현재 숫자보다 작다면
    while (stack.length > 0 && stack[stack.length - 1] < currentDigit && removeCount > 0) {
      // 스택의 맨 위 숫자를 제거 (pop)하고 제거 횟수를 차감
      stack.pop();
      removeCount--;
    }

    // 현재 숫자를 스택에 추가
    stack.push(currentDigit);
  }

  // 4. [후처리] 만약 k개를 다 제거하지 못했다면
  // (예: "77777", k=2와 같이 오름차순 또는 동일한 숫자인 경우)
  // 스택의 뒤쪽(작은 자릿수)에서 남은 횟수만큼 제거합니다.
  if (removeCount > 0) {
    stack.splice(stack.length - removeCount, removeCount);
  }
  
  // 스택에 남은 요소들을 합쳐 문자열로 반환
  return stack.join('');
}

