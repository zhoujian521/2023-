let list = [
    { id: 1, name: '部门 A', parentId: 0 },
    { id: 2, name: '部门 B', parentId: 0 },
    { id: 3, name: '部门 C', parentId: 1 },
    { id: 4, name: '部门 D', parentId: 1 },
    { id: 5, name: '部门 E', parentId: 2 },
    { id: 6, name: '部门 F', parentId: 3 },
    { id: 7, name: '部门 G', parentId: 2 },
    { id: 8, name: '部门 H', parentId: 4 }
];


// function convert(list) {
//     const res = [];
//     const map = list.reduce((res, v) => (res[v.id] = v, res), {})
//         // const map = list.map((v) => {
//         //     return {
//         //         [v.id]: v
//         //     }
//         // })
//     for (const item of list) {
//         // 取出根节点 
//         if (item.parentId === 0) {
//             res.push(item)
//             continue
//         }
//         // 遍历塞进去
//         if (item.parentId in map) {
//             const parent = map[item.parentId]
//             parent.children = parent.children || []
//             parent.children.push(item)
//         }
//     }
//     return res
// }


function convert(list, parentId) {
    const res = [];
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
        // const map = list.map((v) => {
        //     return {
        //         [v.id]: v
        //     }
        // })
    for (const item of list) {
        // 取出根节点 
        if (item.parentId === 0) {
            res.push(item)
            continue
        }
        // 遍历塞进去
        if (item.parentId in map) {
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}

console.log('==========convert==========================');
console.log(JSON.stringify(convert(list)));
console.log('==========convert==========================');



Promise._race = promises => new Promise((resolve, reject) => {
    promises.forEach(promise => {
        promise.then(resolve, reject)
    })
})
Promise.myrace = function(iterator) {
    return new Promise((resolve, reject) => {
        try {
            let it = iterator[Symbol.iterator]();
            while (true) {
                let res = it.next();
                console.log(res);
                if (res.done) break;
                if (res.value instanceof Promise) {
                    res.value.then(resolve, reject);
                } else {
                    resolve(res.value)
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}