// function Foo() {
//     Foo.a = function() {
//         console.log('==========Foo==Foo.a========================');
//         console.log(1)
//     }
//     this.a = function() {
//         console.log('==========Foo==this.a========================');
//         console.log(2)
//     }
// }
// Foo.prototype.a = function() {
//     console.log('=============Foo.prototype.a=======================');
//     console.log(3)
// }
// Foo.a = function() {
//     console.log('=============Foo.a =======================');
//     console.log(4)
// }
// Foo.a();
// let obj = new Foo();
// obj.a();
// Foo.a();

// 4  2  1


// function changeObjProperty(o) {
//     o.siteUrl = "http://www.baidu.com"
//     o = new Object()
//     o.siteUrl = "http://www.google.com"
// }
// let webSite = new Object();
// changeObjProperty(webSite);
// console.log(webSite.siteUrl);

// http://www.baidu.com



// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');

// /**
//  * script start
//  * async1 start
//  * async2
//  * promise1
//  * script end
//  * async1 end
//  * promise2
//  * setTimeout
//  */


// class Example extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             val: 0
//         };
//     }
//     componentDidMount() {
//         this.setState({ val: this.state.val + 1 });
//         console.log(this.state.val); // 第 1 次 log
//         this.setState({ val: this.state.val + 1 });
//         console.log(this.state.val); // 第 2 次 log
//         setTimeout(() => {
//             this.setState({ val: this.state.val + 1 });
//             console.log(this.state.val); // 第 3 次 log
//             this.setState({ val: this.state.val + 1 });
//             console.log(this.state.val); // 第 4 次 log
//         }, 0);
//     }
//     render() {
//         return null;
//     }
// };

// 解析：
// 1、第一次和第二次都是在 react 自身生命周期内，触发时 isBatchingUpdates 为 true，所以并不会直接执行更新 state，而是加入了 dirtyComponents，所以打印时获取的都是更新前的状态 0。
// 2、两次 setState 时，获取到 this.state.val 都是 0，所以执行时都是将 0 设置成 1，在 react 内部会被合并掉，只执行一次。设置完成后 state.val 值为 1。
// 3、setTimeout 中的代码，触发时 isBatchingUpdates 为 false，所以能够直接进行更新，所以连着输出 2，3
// https://blog.51cto.com/u_15497508/5109144


// var b = 10;
// // 函数声明  > 变量声明
// (function b() {
//     b = 20; // 非匿名函数中 函数变量为只读状态 无法修改
//     console.log(b);
// })();
// 函数声明  > 变量声明
// 非匿名函数中 函数变量为只读状态 无法修改


// var a = 10;
// (function() {
//     console.log(a) //先用  
//     a = 5
//     console.log(window.a)
//     var a = 20; //后定义
//     console.log(a)
// })()

/**
 * undefine
 * 10
 * 20
 */

// var obj = {
//     '2': 3,
//     '3': 4,
//     'length': 2,
//     'splice': Array.prototype.splice,
//     'push': Array.prototype.push
// }
// console.log('====================================');
// console.log(obj[2]);
// console.log('====================================');
// // 将根据 length 将元素填充到对应位置并修改 length 属性 +1，
// obj.push(1);
// obj.push(2);

// console.log(obj);
// console.log(JSON.stringify(obj))


// var a = { n: 1 }; //  { n: 1 }
// var b = a; //  { n: 1 };
// a.x = a = { n: 2 };
// // .的优先级 高于 赋值
// // b { n: 1, x: { n: 2 } } 
// // a { n: 2 }
// console.log(a.x) // undefine
// console.log(b.x) // { n: 2 }


// // example 1
// var a = {},
//     b = '123',
//     c = 123;
// a[b] = 'b'; // { '123': 'b' }
// a[c] = 'c'; // { 123: 'c' }
// console.log(a[b]); // c


// // example 2
// var a = {},
//     b = Symbol('123'),
//     c = Symbol('123');
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]); // b

// // example 3
// var a = {},
//     b = { key: '123' },
//     c = { key: '456' };
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]) // c