// 设定三个状态 PENDING、 FULFILLED、 REJECTED， 只能由PENDING改变为FULFILLED、 REJECTED， 并且只能改变一次
// MyPromise接收一个函数executor， executor有两个参数resolve方法和reject方法
// resolve将PENDING改变为FULFILLED
// reject将PENDING改变为FULFILLED
// promise变为FULFILLED状态后具有一个唯一的value
// promise变为REJECTED状态后具有一个唯一的reason