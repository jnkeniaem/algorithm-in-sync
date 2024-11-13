/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let ret = 0;

    const test = (ary) => {
        for (const str of ary) {
            if (str.length >= k){
                let map = new Map();
                let separator = "";
                let fulfilled = true;
                let len = 0;

                for (const letter of str) {
                    map.set(letter, (map.get(letter) || 0) + 1);
                }

                for (const [key, val] of map) {
                    if (val < k) {
                        separator += key + "|";
                        len += val;
                    }
                }
                if (len) { // 다시 쪼개야됨
                    let splitAry = [];
                    separator = separator.substring(0, separator.length - 1);
                    if (separator) {
                        let regex = new RegExp(separator);

                        splitAry = str.split(regex).filter(Boolean);
                    } else
                        splitAry.push(str)
                    
                    test(splitAry);
                }
                else {
                    ret = Math.max(ret, str.length);
                }
            }
        }
    }
    test([s]);

    // for (const str of splitAry) {
    //     if (str.length >= k) {
    //         let len = 0;
    //         for (const letter of str) {
    //             map.set(letter, (map.get(letter) || 0) + 1);
    //         }
    //         for (const [key, val] of map) {
    //             if (val < k) {
    //                 len += val;
    //                 break;
    //             }
    //         }
    //         // console.log(fulfilled);
    //         if (len && str.length - len > ret) {
    //             // 살릴 수 있는건 살리기
    //         }
    //         if (!len) {
    //             ret = Math.max(ret, str.length);
    //         }
    //     }
    // }


    return ret;
};