const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";
class MyPromise {
    constructor(fn) {
        this.state = PENDING;
        this.resolvedHandlers = [];
        this.rejectedHandlers = [];
        fn(this.resolve.bind(this), this.reject.bind(this));
        return this;
    }

    resolve(props) {
        setTimeout(() => {
            this.state = RESOLVED;
            const resolveHandler = this.resolvedHandlers.shift();
            if (!resolveHandler) return;
            const result = resolveHandler(props);
            if (result && result instanceof MyPromise) {
                result.then(...this.resolvedHandlers);
            }
        });
    }
    reject(error) {
        setTimeout(() => {
            this.state = REJECTED;
            const rejectHandler = this.rejectedHandlers.shift();
            if (!rejectHandler) return;
            const result = rejectHandler(error);
            if (result && result instanceof MyPromise) {
                result.catch(...this.rejectedHandlers);
            }
        });
    }
    then(...handlers) {
        this.resolvedHandlers = [...this.resolvedHandlers, ...handlers];
        return this;
    }
    catch (...handlers) {
        this.rejectedHandlers = [...this.rejectedHandlers, ...handlers];
        return this;
    }
}
MyPromise.all = function(promises) {
    return new MyPromise((resolve, reject) => {
        const results = [];
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            promise.then(res => {
                results.push(res);
                if (results.length === promises.length) resolve(results);
            }).catch(reject);
        }
    });
}
MyPromise.race = function(promises) {
    return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            promise.then(resolve).catch(reject);
        }
    });
}

// new MyPromise(function(resolve, reject) {
//     console.log('==========111==========================');
//     setTimeout(() => {
//         console.log('==========222==========================');
//         resolve(
//             new MyPromise(function(resolve, reject) {
//                 console.log('==========333==========================');
//                 setTimeout(() => {
//                     console.log('==========444==========================');
//                     resolve(999)
//                 }, 2000);
//             }).then((res) => {
//                 console.log('=============222res=======================');
//                 console.log(res);
//                 console.log('=============222res=======================');
//             })
//         )
//     }, 2000);
// }).then((res) => {
//     console.log('=============res=======================');
//     console.log(res);
//     console.log('=============res=======================');
// });



// 定义一个promise, 现在有对象
const obj = {
    a: {
        b: {
            c: {
                d: ''
            }
        }
    }
};
// 一层层嵌套形式， 现在要求.then返回a 再.then返回b 再.then返回c 怎么做？

new MyPromise(resolve => resolve(obj)).then((res) => {
    console.log('=============res=======================');
    console.log(res);
    console.log('=============res=======================');
});