// // 广联达面试
// var a = null;

// function aa() {
//     a = 1;

//     function cc() {
//         console.log('================11====================');
//         console.log(a);
//         console.log(b);
//         console.log('================11====================');
//     }
//     cc();
// }

// function bb() {
//     var b = 2;
//     aa();
// }

// bb();

// 柯里化
function curry() {
    let args = [].slice.call(arguments, 0);

    function add() {
        args = [...args, ...[].slice.call(arguments, 0)];
        return add
    }

    add.toString = () => {
        return args.reduce((result, cur) => {
            return result + +cur;
        }, 0);
    }

    return add;
}

console.log('==============11======================');
console.log(curry(1, 2)(4)(1, 2));
console.log('==============11======================');