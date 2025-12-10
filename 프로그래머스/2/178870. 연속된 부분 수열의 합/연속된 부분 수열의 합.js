function solution(sequence, k) {
  let start = 0; // 부분 수열의 시작 인덱스
  let end = 0; // 부분 수열의 끝 인덱스
  let currentSum = 0; // 현재 부분 수열의 합
  
  // 최소 길이를 저장할 객체. 초기값은 가능한 가장 큰 길이로 설정.
  // [길이, 시작 인덱스, 끝 인덱스]
  let result = [Infinity, -1, -1]; 
  
  const N = sequence.length;

  while (end < N) {
    // 1. end를 오른쪽으로 이동하며 currentSum에 원소를 더함
    currentSum += sequence[end];

    // 2. currentSum이 k보다 크거나 같아지면, start를 이동시켜 currentSum을 k 이하로 만듦
    while (currentSum >= k) {
      // 3. 합이 k와 정확히 일치하는 경우, 최소 길이 갱신 로직 수행
      if (currentSum === k) {
        const currentLength = end - start + 1;

        // 현재 찾은 길이가 result에 저장된 최소 길이보다 짧으면 갱신
        if (currentLength < result[0]) {
          result = [currentLength, start, end];
        } 
        // 길이가 같은 경우, 시작 인덱스가 더 작은 경우 (문제 조건: 더 앞쪽) 갱신
        else if (currentLength === result[0]) {
          // 문제 조건상 시작 인덱스가 더 작을 필요는 없지만, 
          // 현재 코드는 길이가 같으면 시작 인덱스(start)가 작은 것을 우선함
          // (일반적인 '가장 앞쪽'의 의미)
          if (start < result[1]) {
            result = [currentLength, start, end];
          }
        }
      }
      
      // start를 오른쪽으로 이동시키고 currentSum에서 sequence[start]를 뺌
      // (부분 수열의 시작점을 한 칸 오른쪽으로 옮김)
      currentSum -= sequence[start];
      start += 1;
    }
    
    // 다음 루프를 위해 end를 오른쪽으로 이동 (부분 수열 확장)
    end += 1;
  }
  
  // 결과 반환: [시작 인덱스, 끝 인덱스]
  return [result[1], result[2]];
}