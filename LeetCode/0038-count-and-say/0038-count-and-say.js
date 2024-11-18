/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    for (let j=1; j < n; j++) {
        let strAry = str.split('');
        str ='';
        let cnt = 1;
        // Loop through current nth level line
        for (let k=0; k < strAry.length; k++) {
            // Next digit is different
            if (strAry[k] !== strAry[k+1]) {
                // Go to next non-matching digit
                str += cnt + strAry[k];
                cnt = 1;
            }
            else {
                cnt++;
            }
        }
    }
    return str;
};