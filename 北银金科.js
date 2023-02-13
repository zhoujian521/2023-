// 1：Promise.all  => 等到所有的异步任务完成后在执行其他任务   在并行方面与几个Promise串行没什么区别 

console.log('==============111======================');

new Promise((resolve, reject) => {
    console.log('1' + new Date().getTime());
    setTimeout(function() {
        console.log('3秒后 runA方法执行完毕')
        resolve(new Date())
    }, 3000)
})

new Promise((resolve, reject) => {
    console.log('2' + new Date().getTime());
    setTimeout(function() {
        console.log('6秒后 runB方法执行完毕')
        resolve(new Date())
    }, 6000)
})

new Promise((resolve, reject) => {
    console.log('3' + new Date().getTime());
    setTimeout(function() {
        console.log('9秒后 runC方法执行完毕')
        resolve(new Date())
    }, 9000)
})
console.log('=============222=======================');


console.log('==============555======================');

var runA = function() {
    return new Promise((resolve, reject) => {
        console.log('1' + new Date().getTime());
        setTimeout(function() {
            console.log('3秒后 runA方法执行完毕')
            resolve(new Date())
        }, 3000)
    })
}

var runB = function() {
    return new Promise((resolve, reject) => {
        console.log('2' + new Date().getTime());
        setTimeout(function() {
            console.log('6秒后 runB方法执行完毕')
            resolve(new Date())
        }, 6000)
    })
}

var runC = function() {
    return new Promise((resolve, reject) => {
        console.log('3' + new Date().getTime());
        setTimeout(function() {
            console.log('9秒后 runC方法执行完毕')
            resolve(new Date())
        }, 9000)
    })
}
console.log('=============666=======================');

Promise.all([runA(), runB(), runC()]).then((res) => {
    console.log('===============777=====================');
    console.log([JSON.stringify(res)]);
    console.log('===============888=====================');
})

// https://blog.csdn.net/qq_45828551/article/details/126251545
// 2:大家可能或多或少都了解过 Proxy 和 Reflect，因为vue3就是使用 Proxy 和 Reflect 实现响应式的，但是大家可能不清楚为什么 Proxy 一定要配合 Reflcet 使用。下面举几个例子来描述一下他们之间的关系。

// Proxy： 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
// 它不直接操作对象，而是代理模式，通过代理对象进行操作，然后在进行操作的同时，可以添加一些额外操作。
// Reflect：它提供拦截 JavaScript 操作的方法。这些方法与 Proxy 的方法相同。


// https://blog.csdn.net/qq_34629352/article/details/122163072
// 3: Vue3的diff对比Vue2的优化部分
// Vue2 是全量 Diff（当数据发生变化，它就会新生成一个DOM树，并和之前的DOM树进行比较，找到不同的节点然后更新。）；
// Vue3 是静态标记 + 非全量 Diff（Vue 3在创建虚拟DOM树的时候，会根据DOM中的内容会不会发生变化，添加一个静态标记。之后在与上次虚拟节点进行对比的时候，就只会对比这些带有静态标记的节点。）
// 使用最长递增子序列优化对比流程，可以最大程度的减少 DOM 的移动，达到最少的 DOM 操作

// 4:二叉树的中序遍历
// https://blog.csdn.net/u010414589/article/details/115415373
// 二叉树的 [前序遍历] 的记忆法则是“根左右"，即先遍历根节点，再遍历左子树节点，再遍历右子树节点。
// 二叉树的 [中序遍历] 的记忆法则是“左根右"，即先遍历左子树节点，再遍历根节点，再遍历右子树节点。
// 二叉树的 [后序遍历] 的记忆法则是“左右根"，即先遍历左子树节点，再遍历右子树节点，最后遍历根节点。