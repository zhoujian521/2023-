function debounce(fn) {
    let timeout = null
        // 创建一个标记用来存放定时器的返回值
    return function() {
        clearTimeout(timeout)
            // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => {
            // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话， 就不会执行 fn 函数
            fn.apply(this, arguments)
        }, 500)
    }
}

// 节流 => 定时器
function throttle(fn, wait) {
    let timeout = null;
    return function() {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(this, arguments);
                clearTimeout(timeout);
            }, wait);
        }
    }
}

// 节流 => 时间戳
function throttle(fn, wait) {
    let previous = 0;
    return function() {
        let now = +new Date();
        if (now - previous > wait) {
            fn.apply(this, arguments);
        }
    }
}