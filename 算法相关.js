// // var 声明在函数内部=>属于函数作用域   函数外部=>全局作用域 

// let arr = [6, 4, 9, 8, 1, 3, 2];
// // 选择排序
// function selectSort(arr) {
//     let length = arr.length;
//     let index;
//     for (let i = 0; i < length; i++) {
//         index = i;
//         for (let j = i + 1; j < length; j++) {
//             console.log('====================================');
//             if (arr[index] > arr[j]) {
//                 index = j;
//             }
//         }
//         if (index != i) {
//             let temp = arr[i];
//             arr[i] = arr[index];
//             arr[index] = temp;
//         }
//     }

//     return arr;
// }

// // 冒泡排序
// function bubbSort(arr) {
//     const len = arr.length;
//     let swapped;
//     for (let i = 0; i < len; i++) {
//         swapped = false;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[i] > arr[j]) {
//                 console.log('==============222======================');
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 swapped = true;
//             }

//         }
//         if (!swapped) return arr;
//     }
//     return arr
// }

// console.log(selectSort(arr));
// console.log(bubbSort(arr));


// 4.（携程） 算法手写题
// 已知如下数组：
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ],10];
// 编写一个程序将数组扁平化去并除其中重复部分数据， 最终得到一个升序且不重复的数组

// // 数组扁平
// // shift  push
// // pop unshift
// let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

// function flatten(arr) {
//     let result = [];
//     let stack = [...arr];
//     while (stack && stack.length) {
//         let cur = stack.shift();
//         if (Array.isArray(cur)) {
//             stack = [...cur, ...stack]
//         } else {
//             result.push(cur)
//         }
//     }
//     return result;
// }

// console.log(flatten(arr))


// 5.给定两个数组， 写一个方法来计算它们的交集。
// // 例如： 给定 nums1 = [1, 2, 2, 1]， nums2 = [2, 2]， 返回[2, 2]。
// function intersection(nums1, nums2) {
//     let result = [];
//     let i1 = 0
//     let i2 = 0;

//     while (i1 < nums1.length && i2 < nums2.length) {
//         if (nums1[i1] < nums2[i2]) {
//             i1++
//         } else if (nums1[i1] > nums2[i2]) {
//             i2++
//         } else {
//             result.push(nums1[i1])
//             i1++
//             i2++
//         }
//     }

//     return result
// }

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];
// console.log('=============数组的交集=======================');
// console.log(intersection(nums1, nums2));
// console.log('=============数组的交集=======================');


// 6.数组编程题
// 随机生成一个长度为 10 的整数类型的数组， 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
// 将其排列成一个新数组， 要求新数组形式如下， 例如 [[2, 3, 4, 5], [10, 11], [20]]

// const arr = [2, 10, 3, 4, 5, 11, 10, 11, 20];
// // [[2, 3, 4, 5], [10, 11], [20]]

// function divideGroups(arr) {
//     let result = [];
//     let map = {};
//     const array = arr.sort((a, b) => a - b);
//     for (let i = 0; i < array.length; i++) {
//         const e = array[i];
//         const key = Math.floor(e / 10);
//         if (key in map) {
//             let value = map[key];
//             value = [...value, e]
//             map[key] = value;
//         } else {
//             let value = [e]
//             map[key] = value;
//         }
//     }
//     for (const key in map) {
//         if (Object.hasOwnProperty.call(map, key)) {
//             const item = map[key];
//             result.push(item)
//         }
//     }
//     return JSON.stringify(result)
// }

// console.log('====================================');
// console.log(divideGroups(arr));
// console.log('====================================');


// 7.如何把一个字符串的大小写取反（大写变小写小写变大写） ， 例如 ’AbC' 变成 'aBc' 。
// const str = 'AbC';

// function convert(str) {
//     let result = ''
//     for (let char of str) {
//         let code = char.charCodeAt()
//         if (code >= 65 && code <= 90) {
//             result += char.toLowerCase()
//         } else if (code >= 97) {
//             // result += char.toUpperCase()
//             result += String.fromCharCode(code - 32)
//         } else {
//             result += char
//         }
//     }
//     return result
// }

// console.log(convert(str));



// 8.实现一个字符串匹配算法， 从长度为 n 的字符串 S 中， 查找是否存在字符串 T， T 的长度是 m， 若存在返回所在位置。
// function findStr(str, target) {
//     let i = 0;
//     while (str.length >= target.length) {
//         const cur = str.slice(0, target.length)
//         if (cur === target) {
//             return i
//         }
//         str = str.slice(1)
//         i++;
//     }
//     return -1;
// }

// const str = 'qwer123456';
// const target = '123456';
// console.log('====================================');
// console.log(findStr(str, target));
// console.log('====================================');

// // 9.算法题「旋转数组」
// // 给定一个数组， 将数组中的元素向右移动 k 个位置， 其中 k 是非负数。

// function moveRight(arr, k) {
//     const action = k % arr.length
//     const temp = arr.splice(-action)
//     return result = [...temp, ...arr]
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('============moveRight========================');
// console.log(moveRight(arr, 2));
// console.log('============moveRight========================');


// // 10.（京东、 快手） 周一算法题之「两数之和」
// // 给定 nums = [2, 7, 11, 15], target = 9
// // 因为 nums[0] + nums[1] = 2 + 7 = 9
// // 所以返回 [0, 1]

// const nums = [2, 7, 11, 15];
// const target = 9;

// function computed(arr, target) {
//     let result = [];
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         const second = arr[i];
//         const first = target - second;
//         if (map.has(first)) {
//             return [map.get(first), i]
//         } else {
//             map.set(second, i)
//         }
//     }
//     return result;
// }
// console.log('==========computed==========================');
// console.log(computed(nums, target));
// console.log('==========computed==========================');


// // 11.（bilibili） 编程算法题
// // 用 JavaScript 写一个函数， 输入 int 型， 返回整数逆序后的字符串。 如： 输入整型 1234， 返回字符串“4321”。

// function reverse(n) {
//     let result = '';
//     let y = n % 10;
//     result += y;
//     const cur = (n - y) / 10;
//     if (cur >= 1) {
//         result += reverse(cur);
//     }
//     return result;
// }

// const nums = 1234;
// console.log('====================================');
// console.log(reverse(nums));
// console.log('====================================');

// // 12.如何实现数组的随机排序

// const arr = [1, 343, 2, 23, 42, 42, 432, 42, 42, 23, 42];

// // 随机数排序
// function random1(arr) {
//     return arr.sort(() => Math.random() - 0.5);
// }

// // 随机插入排序
// function random2(arr) {
//     let result = [];
//     let curArr = [...arr];
//     while (curArr.length) {
//         const index = Math.floor(Math.random() * curArr.length);
//         result.push(curArr[index])
//         curArr.splice(index, 1);
//     }
//     return result;
// }

// // 洗牌算法
// function random3(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//         const index = Math.floor(Math.random() * (len - i)) + i;
//         const temp = arr[index];
//         arr[index] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }


// console.log('=============random=======================');
// console.log(random1(arr));
// console.log(random2(arr));
// console.log(random3(arr));
// console.log('=============random=======================');


// // 13.将数字变成 0 的操作次数
// // 给你一个非负整数 num ， 请你返回将它变成 0 所需要的步数。 如果当前数字是偶数， 你需要把它除以 2 ； 否则， 减去 1

// // 奇数  偶数  % 2 ?= 0
// function zeroes(num) {
//     let actions = 0;
//     while (num > 0) {
//         if (!(num % 2)) { // 偶数
//             num = num / 2
//         } else {
//             num -= 1
//         }
//         actions++
//     }
//     return actions
// }

// const num = 123;
// console.log('====================================');
// console.log(zeroes(num));
// console.log('====================================');


// // 5.（挖财） 什么是防抖和节流？ 有什么区别？ 闭包   防抖靠定时器控制， 节流靠变量控制

// // 防抖 => ns 重复触发  重新计时   重置计时器
// function debounce(fn, timing) {
//     let timer;
//     return function() {
//         timer && clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, arguments);
//         }, timing)
//     }
// }

// // 节流 => ns 内只会执行一次
// function throttle(fn, timing) {
//     let canRun = true
//     return function() {
//         if (!canRun) return;
//         setTimeout(() => {
//             fn.apply(this, arguments)
//             canRun = true;
//         }, timing);
//     }
// }

// 没有什么是封装一层解决不了的   要是不可以  那就封装2层
// function abortWrapper(p1) {
//     let abort
//     let p2 = new Promise((resolve, reject) => (abort = reject))
//     let p = Promise.race([p1, p2])
//     p.abort = abort
//     return p
// }

// // 8.（ 兑吧） 情人节福利题， 如何实现一个 new
// function mynew(fn, ...args) {
//     // 原型链创建对象
//     let child = Object.create(fn.prototype);
//     // 改变this指向
//     const result = fn.apply(child, args);
//     // 是否返回对象
//     return result instanceof Object ? result : child;
// }


// // 9.（ 京东） 下面代码中 a 在什么情况下会打印 1？
// // 重写valueOf
// var a = {
//     value: 0,
//     valueOf() {
//         return ++this.value
//     }
// };

// if (a == 1 && a == 2 && a == 3) {
//     console.log(1);
// }


// // 10.（ 百度） 实现5.add(3).minus(2) 功能
// Number.prototype.add = function(n) {
//     return this + n
// }

// Number.prototype.minus = function(n) {
//     return this - n
// }
// console.log('====================================');
// console.log((5).add(3).minus(2));
// console.log('====================================');