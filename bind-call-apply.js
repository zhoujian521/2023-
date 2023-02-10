Function.prototype.MyCall = function(context) { // { "aa": 'bb' }
    const args = [...arguments].slice(1); // aaa
    context.fn = this; // fn
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.MyApply = function(context) {
    const args = arguments[1] || [];
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}


Function.prototype.MyBind = function(context) {
    const args = [...arguments].slice(1);
    console.log('=======args=============================');
    console.log(args);
    console.log('=======args=============================');
    return function() {
        context.MyApply(context, args);
    }
}


function aa(aaa, bbb) {
    console.log('===========aa=========================');
    console.log(aaa + bbb);
    console.log('===========aa=========================');
}

const bb = new Object({ "aa": 'bb' });
aa.MyCall(bb, 'aaa', 'bbb')
aa.MyApply(bb, ['aaa', 'bbb'])
aa.MyBind(bb)

console.log('===========aa=========================');
console.log(aa);
console.log('===========aa=========================');