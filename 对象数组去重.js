const list = [{ age: 18, name: '张三' }, { age: 18, name: '李四' }, { age: 17, name: '王五' }]

function quchong() {
    let hash = {};
    // { 18:true }
    return list.reduce((result, next) => {
        if (!hash[next.age]) {
            hash[next.age] = true;
            result.push(next)
        }
        return result;
    }, []);
}

console.log(JSON.stringify(quchong(list)));