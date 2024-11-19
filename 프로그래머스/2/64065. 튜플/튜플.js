function solution(s) {
    let map = new Map(); // 순서 보장해야됨
    let ary = Array.from(s);
    let isMatched = false;
    ary.shift();
    ary.pop();
    let elemAry = [];
    let tmpAry = [];
    let numAry = [];
    for (const elem of ary) {
        if (elem == "}") {
            isMatched = true;
            elemAry.push(tmpAry);
            tmpAry = [];
            isMatched = false;
        }

        if (!isMatched){
            if (elem == ",")
              tmpAry.push(elem);
                
            let num = Number(elem);
            if (!isNaN(num))
              tmpAry.push(num);
        }
    }
    // console.log(Number(','));
    for (const elem of elemAry) {
        let str = ""
        for (let i = 0; i < elem.length; ++i) {
            if (elem[i] != ",") {
                str += elem[i];
                if (i + 1 == elem.length) {
                    numAry.push(Number(str));
                }
            }
            else {
                numAry.push(Number(str));
                str = ""                
            }
                
        }

    }
    
    
    for (const elem of numAry) {
        map.set(elem, (map.get(elem) || 0) + 1);
    }
    map.delete(0);
    let answer = new Array(map.size).fill(0);
    
    for (const [key, val] of map) {
        answer[map.size - val] = key
    }
    
    return answer;
}