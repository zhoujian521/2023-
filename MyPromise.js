// 设定三个状态 PENDING、 FULFILLED、 REJECTED， 只能由PENDING改变为FULFILLED、 REJECTED， 并且只能改变一次
// MyPromise接收一个函数executor， executor有两个参数resolve方法和reject方法
// resolve将PENDING改变为FULFILLED
// reject将PENDING改变为FULFILLED
// promise变为FULFILLED状态后具有一个唯一的value
// promise变为REJECTED状态后具有一个唯一的reason

// Promise 状态
const PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected';

class MyPromise {
    constructor(executor) {
        // 初始状态 PENDING
        this.state = PENDING;
        // fulfilled 返回值
        this.value = undefined;
        // rejected 返回值
        this.reason = undefined;
        // 存放成功回调
        this.onResolvedCallbacks = [];
        // 存放失败回调
        this.onRejectedCallbacks = [];
        // 成功回调
        let resolve = (value) => {
            if (this.state !== PENDING) return;
            this.state = FULFILLED;
            this.value = value;
            this.onResolvedCallbacks.forEach(fn => fn())
        };
        // 失败回调
        let reject = (reason) => {
            if (this.state !== PENDING) return;
            this.state = REJECTED;
            this.reason = reason;
            this.onResolvedCallbacks.forEach(fn => fn())
        }

        //如果executor执行报错，直接执行reject
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        // 确定状态（pending fulfilled rejected） ==> 异步执行
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err
        }
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                // 模拟异步
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }
            if (this.state === REJECTED) {
                // 模拟异步
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }
            if (this.state === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                })
            }
        })
        return promise2;
    }

    catch (fn) {
        return this.then(null, fn)
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 循环引用
    if (x === promise2) {
        return reject('error')
    }
    // 多次调用
    let called;
    // x 不为null && x 为对象 或 函数
    /**
     * null || object => resolve(x)
     * function => 递归调用
     * 其他 reject(x)
     */
    if (x !== null && typeof x === 'object' || typeof x === 'function') {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return
                    called = true;
                    resolvePromise(promise2, y, resolve, reject)
                }, err => {
                    if (called) return
                    called = true;
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (error) {
            if (called) return;
            called = true;
            reject(error)
        }
    } else {
        resolve(x)
    }
}

// resolve
MyPromise.resolve = function(val) {
    if (val instanceof MyPromise) {
        return val
    }
    return new MyPromise((resolve, reject) => {
        resolve(val)
    })
};
// reject
MyPromise.reject = function(val) {
    if (val instanceof MyPromise) {
        return val
    }
    return new MyPromise((resolve, reject) => {
        reject(val)
    })
};
// race
MyPromise.race = function(promises) {
    return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
};
// all
MyPromise.all = function(promises) {
    let arr = [];
    let i = 0;
    return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            promise.then(data => {
                arr[index] = data;
                i++;
                if (i === promises.length) {
                    resolve(arr);
                }
            }, reject)
        }
    })
};