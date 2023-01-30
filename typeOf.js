function typeOf(val) {
    return Object.prototype.toString().call(val).slice(8, -1).toLowerCase()
}

function foo() {
    console.log(this.name) //this.name 
}

function bar() {
    var name = 'a' //私有变量
    foo()
}
var name = 'b'
bar()

//打印值  b