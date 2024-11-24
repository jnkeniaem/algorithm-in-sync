function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    let max = 0;
    let idx = 0;
    let ary = new Array(n + 1).fill([]).map((elem) => new Array());
    
    for (const [v1, v2] of wires) {
        ary[v1].push(v2);
        ary[v2].push(v1);
    }
    
    const dfs = (elem, visited) => {
        visited[elem] = true;
        let cnt = 1;
        
        for (let neibor of ary[elem]) {
            if (!visited[neibor]) {
                cnt += dfs(neibor, visited);
            }
        }
        return cnt;
    }
    
    for (const [v1, v2] of wires) {
        let visited = new Array(n + 1).fill(false);
        
        ary[v1] = ary[v1].filter(elem => elem != v2);
        ary[v2] = ary[v2].filter(elem => elem != v1);
        
        let cnt = dfs(v1, visited);
        let other = n - cnt;
        console.log(cnt);
        answer = Math.min(Math.abs(cnt - other), answer);
        
        ary[v1].push(v2);
        ary[v2].push(v1);
        // console.log(a, b)
    }
    
    return answer;
}

    // console.log(ary)
