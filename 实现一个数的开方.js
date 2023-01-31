function mySqrt(x) {
    if (x < 0) {
        return NaN
    }
    if (x === 0 || x === 1) return x
    var last = 1
    while (last * last !== x) {
        last = (x / last + last) / 2
    }
    return last
}


function musqrt(num) {
    if (num < 0) return NaN;
    if (!num || num === 1) return num;
    let last = 1;
    while (last * last !== num) {
        last = (num / last + last) / 2
    }
    return last
}

const num = 100;
console.log('====================================');
console.log(musqrt(num));
console.log('====================================');