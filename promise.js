//1.d定义一个promise类

const PENDING = "pending", //等待状态
    FULFILLED = "fulfilled", //成功状态
    REJECTED = "rejected"; // 失败状态

class MyPromise {
    constructor(executor) {
        //初始化 等待状态
        this.state = PENDING

        this.value = undefined // fulfilled的返回值
        this.reason = undefined // rejected的返回值

        //存放成功，失败的数组
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

            //成功的回调
            let resolve = (value) => {

            if (this.state === PENDING) {
                // resolve 调用以后 改变成功状态
                this.state = FULFILLED
                //储存成功的值
                this.value = value

                //一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }

        //失败的回调
        let reject = (reason) => {

            if (this.state === PENDING) {
                // resolve 调用以后 改变成功状态
                this.state = REJECTED
                //储存成功的值
                this.reason = reason

                //一旦 reject执行，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        //如果executor执行报错，直接执行reject
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err)
        }

    }

    then(onFulfilled, onRejected) {

        // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        // onRejected如果不是函数，就忽略onRejected，直接扔出错误
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err
        };


        //链式调用 返回promise
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                //模拟异步
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        //处理自己return的promise和默认的promise2的关系
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            }

            if (this.state === REJECTED) {
                //模拟异步
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        //处理自己return的promise和默认的promise2的关系
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            }

            //如果是 pending 存入 callback 数组 等then调用，然后resolve、reject就调用他们
            if (this.state === PENDING) {

                this.onResolvedCallbacks.push(() => {

                    //模拟异步
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            //处理自己return的promise和默认的promise2的关系
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)

                })

                this.onRejectedCallbacks.push(() => {
                    //模拟异步
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            //处理自己return的promise和默认的promise2的关系
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)

                })
            }


        })

        return promise2


    }



    catch (fn) {
        return this.then(null, fn);
    }


}

function resolvePromise(promise2, x, resolve, reject) {

    //循环引用报错
    if (x === promise2) {
        return reject('error')
    }

    //防止多次调用
    let called;

    //x不是null 且x 是对象或者函数
    if (x !== null && typeof x === 'object' || typeof x === 'function') {
        try {
            //取x的then方法
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    //成功和失败只能调用一个并且一次
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, err => {
                    if (called) return
                    called = true
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (err) {
            if (called) return
            called = true
            reject(err)
        }
    } else {
        resolve(x)
    }
}

//resolve 方法
MyPromise.resolve = function(val){
    if(val instanceof MyPromise){
        return val
    }
    return new MyPromise((resolve,reject)=>{
        resolve(val)
    })
}
//reject 方法
MyPromise.resolve = function(val){
    if(val instanceof MyPromise){
        return val
    }
    return new MyPromise((resolve,reject)=>{
        reject(val)
    })
}
//race方法
MyPromise.race = function(promises){
    return new MyPromise((resolve,reject)=>{
        for (let index = 0; index < promises.length; index++) {
            promises[i].then(resolve,reject)
        }
    })
}
//all方法
MyPromise.all = function(promises){
    let arr = [],i=0;
    return new MyPromise((resolve,reject)=>{
        for (let index = 0; index < promises.length; index++) {
            const element = promises[index];
            element.then(data=>{
                arr[index] = data
                i++
                if(i===promises.length){
                    resolve(arr)
                }
            },reject)
        }
    })
}