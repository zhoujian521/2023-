function curringAdd() {
    let args = [].slice.call(arguments, 0);

    function add() {
        args = [...args, ...[].slice.call(arguments, 0)]
        return add
    }

    add.toString = function() {
        return args.reduce((t, a) => t + +a, 0)
    }

    return add;
}

console.log('=============curringAdd=======================');
console.log(curringAdd(1)(2)(3)); // 6
console.log(curringAdd(1, 2, 3)(4)); //10 
console.log(curringAdd(1)(2)(3)(4)(5)); // 15
console.log(curringAdd(2, 6)(1)); // 9
console.log(curringAdd(1)); // 1
console.log('=============curringAdd=======================');

// 部分求值
// 不会立即求值
// 返回另一个函数
// 闭包 保存值


// 参数复用：即如果函数有重复使用到的参数，可以利用柯里化，将复用的参数存储起来，不需要每次都传相同的参数
// 延迟执行：传入参数个数没有满足原函数入参个数，都不会立即返回结果，而是返回一个函数。（bind方法就是柯里化的一个示例）
// 函数式编程中，作为compose, functor, monad 等实现的基础


function curry() {
    let args = [].slice.call(arguments, 0)

    function add() {
        args = [...args, ...[].slice.call(arguments, 0)]
        return add
    }
    add.toString = function() {
        return args.reduce((result, cur) => {
            return result + +cur;
        }, 0)
    }
    return add
}

console.log('=============curry=======================');
console.log(curry(1, 2, 3)(4)(10, 1));
console.log('=============curry=======================');


function curryFn() {
    let args = [].slice.call(arguments, 0)

    function add() {
        args = [...args, ...[].slice.call(arguments, 0)]
        return add;
    }

    add.toString = function() {
        return args.reduce((result, cur) => {
            return result + +cur;
        }, 0)
    }

    return add
}

console.log('============curryFn========================');
console.log(curryFn(1, 2, 3)(4)(10, 1));
console.log('============curryFn========================');