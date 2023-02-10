function mynew(fn) {
    const newObj = Object.create(fn.prototype)
    const result = fn.apply(newObj, [...arguments].slice(1));
    return typeof result === "object" ? result : newObj;
}

function aa() {
    console.log('===========function=========================');
}

console.log('==============111======================');
console.log(mynew(aa));
console.log('==============111======================');