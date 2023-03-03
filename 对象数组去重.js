const list = [{age:18,name:'张三'},{age:18,name:'李四'},{age:18,name:'王五'}]

let hash = {};
// { 18:true }
const res = list.reduce((result, next) => {
    if (!hash[next.age]) {
        hash[next.age] = true;
        result.push(next)
    } 
    return result;
}, []);

console.log(JSON.stringify(res));