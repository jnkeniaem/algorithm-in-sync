function solution(numbers) {
    // 결과를 저장할 배열
    const answer = [];

    // BigInt로 변환하여 처리
    for (const num of numbers) {
        // BigInt로 변환
        const x = BigInt(num);

        // 1. x가 짝수인 경우 (가장 낮은 비트가 0)
        // x % 2n === 0n 또는 (x & 1n) === 0n
        if ((x & 1n) === 0n) {
            // f(x) = x + 1 (비트 1개 차이)
            answer.push(Number(x + 1n));
        } 
        // 2. x가 홀수인 경우 (가장 낮은 비트가 1)
        else {
            // 비트 2개 차이 나는 수 중 가장 작은 수를 찾아야 함 (패턴 01...1 -> 10...1)
            
            // Step 1: x의 가장 오른쪽에 있는 0 찾기 (0의 위치에만 1이 켜진 수)
            // (~x) & (x + 1n)
            // 하지만 자바스크립트 BigInt의 ~ 연산자는 부호 확장 문제로 인해 사용하기 까다롭습니다.
            // 대신, 반복문을 통해 직접 가장 오른쪽에 있는 0의 위치를 찾습니다.
            
            let zeroBitMask = 1n;
            // x & zeroBitMask 가 0n이 될 때까지 zeroBitMask를 왼쪽 시프트합니다.
            // 즉, x의 비트들 중 0인 가장 낮은 자리의 비트까지 탐색
            while ((x & zeroBitMask) !== 0n) {
                zeroBitMask <<= 1n; // 다음 자리로 이동 (2배)
            }
            
            // Step 2: x의 가장 낮은 1 찾기 (1의 위치에만 1이 켜진 수)
            // 이 1은 Step 1에서 찾은 0 바로 오른쪽에 있습니다.
            // lowBitMask = zeroBitMask / 2n, 또는 zeroBitMask >> 1n
            const lowBitMask = zeroBitMask >> 1n;
            
            // Step 3: f(x) 계산
            // x | zeroBitMask: 가장 오른쪽 0을 1로 바꿈
            // ( ... ) ^ lowBitMask: 가장 낮은 1을 0으로 바꿈
            const fx = (x | zeroBitMask) ^ lowBitMask;
            
            answer.push(Number(fx));
        }
    }

    return answer;
}